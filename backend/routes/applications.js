const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token (could be refactored into its own file)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};

// Get all applications for the logged-in student
router.get('/', authenticateToken, async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { user_id: parseInt(req.user.userId) },
    });

    if (!student) {
      return res.status(404).json({ error: 'Student profile not found.' });
    }

    const applications = await prisma.application.findMany({
      where: { student_id: student.student_id },
      include: {
        scholarship: {
          select: { name: true, amount: true },
        },
        reviews: {
          select: {
            comments: true,
            points_awarded: true,
            review_date: true,
          },
        },
      },
      orderBy: { submission_date: 'desc' },
    });

    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get the count of applications for the logged-in student
router.get('/count', authenticateToken, async (req, res) => {
    try {
      const student = await prisma.student.findUnique({
        where: { user_id: parseInt(req.user.userId) },
      });
  
      if (!student) {
        return res.json({ count: 0 });
      }
  
      const count = await prisma.application.count({
        where: { student_id: student.student_id },
      });
  
      res.json({ count });
    } catch (error) {
      console.error('Error fetching application count:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Get all applications for coordinators (with full student, family, and funding details)
router.get('/all', authenticateToken, async (req, res) => {
  try {
    // Only coordinators can access
    if (req.user.role !== 'coordinator') {
      return res.status(403).json({ error: 'Access denied' });
    }
    const applications = await prisma.application.findMany({
      include: {
        scholarship: true,
        student: {
          include: {
            familyMembers: {
              include: { siblingEducation: true }
            },
            otherFunding: true,
          }
        },
        documents: {
          select: {
            document_id: true,
            document_type: true,
            file_name: true,
            upload_date: true,
            verification_status: true,
          }
        },
      },
      orderBy: { submission_date: 'desc' },
    });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching all applications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Approve or reject a document (coordinator only)
router.post('/documents/:id/verify', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { id } = req.params;
  const { status } = req.body; // status: 'verified' or 'rejected'
  if (!['verified', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  try {
    const doc = await prisma.document.update({
      where: { document_id: parseInt(id) },
      data: { verification_status: status },
    });
    res.json({ message: `Document ${status}` });
  } catch (error) {
    console.error('Error updating document status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Review, approve, or reject an application (coordinator only)
router.post('/:id/review', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { id } = req.params;
  const { status, reviewer_comments } = req.body;
  try {
    // Update application
    const application = await prisma.application.update({
      where: { application_id: parseInt(id) },
      data: {
        status,
        reviewer_comments,
        review_date: new Date(),
      },
      include: {
        student: { select: { user_id: true } },
        scholarship: { select: { name: true } },
      },
    });
    // Send notification to student
    let notifMsg = `Your application for scholarship '${application.scholarship.name}' has been ${status}.`;
    if (reviewer_comments) notifMsg += `\nComment: ${reviewer_comments}`;
    await prisma.notification.create({
      data: {
        user_id: application.student.user_id,
        message: notifMsg,
      },
    });
    res.json({ message: 'Application reviewed and student notified.' });
  } catch (error) {
    console.error('Error reviewing application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get count of pending applications for coordinators
router.get('/pending', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const count = await prisma.application.count({ where: { status: 'pending' } });
    res.json({ count });
  } catch (error) {
    console.error('Error fetching pending applications count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new application (student)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { user_id: parseInt(req.user.userId) },
    });
    if (!student) {
      return res.status(404).json({ error: 'Student profile not found.' });
    }
    const { scholarship_id } = req.body;
    const application = await prisma.application.create({
      data: {
        student_id: student.student_id,
        scholarship_id: parseInt(scholarship_id),
        submission_date: new Date(),
        status: 'pending',
      },
    });
    // Notify all coordinators
    const coordinators = await prisma.user.findMany({ where: { role: 'coordinator' } });
    const notifications = coordinators.map(c => ({
      user_id: c.user_id,
      message: `A new application has been submitted and is pending your review.`,
    }));
    if (notifications.length > 0) {
      await prisma.notification.createMany({ data: notifications });
    }
    res.status(201).json(application);
  } catch (error) {
    console.error('Error creating application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Coordinator sends a custom notification to a student
router.post('/notify-student', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { student_id, message } = req.body;
  if (!student_id || !message) {
    return res.status(400).json({ error: 'student_id and message are required' });
  }
  try {
    // Find the user_id for the student
    const student = await prisma.student.findUnique({
      where: { student_id: parseInt(student_id) },
      select: { user_id: true }
    });
    if (!student) return res.status(404).json({ error: 'Student not found' });
    await prisma.notification.create({
      data: {
        user_id: student.user_id,
        message,
      },
    });
    res.json({ message: 'Notification sent to student.' });
  } catch (error) {
    console.error('Error sending custom notification:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 