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

// Helper middleware to check coordinator role
const requireCoordinator = (req, res, next) => {
  if (req.user.role !== 'coordinator') {
    return res.status(403).json({ error: 'Coordinator access required' });
  }
  next();
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

// Get all applications for coordinators
router.get('/all', authenticateToken, requireCoordinator, async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      include: {
        student: {
          select: {
            full_name: true,
            registration_no: true,
            email: true,
            year_of_study: true,
            user: { select: { first_name: true, last_name: true } }
          }
        },
        scholarship: {
          select: { name: true, amount: true }
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

// Review (approve/reject/comment) an application
router.post('/:id/review', authenticateToken, requireCoordinator, async (req, res) => {
  const { id } = req.params;
  const { status, reviewer_comments } = req.body;
  if (!['approved', 'rejected', 'pending', 'under_review'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }
  try {
    const updated = await prisma.application.update({
      where: { application_id: parseInt(id) },
      data: {
        status,
        reviewer_comments,
        review_date: new Date(),
      },
    });
    res.json({ message: 'Application reviewed', application: updated });
  } catch (error) {
    console.error('Error reviewing application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 