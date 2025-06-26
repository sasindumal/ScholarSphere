const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Get count of available scholarships
router.get('/count', authenticateToken, async (req, res) => {
  try {
    const count = await prisma.scholarship.count({
      where: {
        is_active: true,
      },
    });
    res.json({ count });
  } catch (error) {
    console.error('Error fetching scholarship count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all available scholarships
router.get('/', authenticateToken, async (req, res) => {
  try {
    const scholarships = await prisma.scholarship.findMany({
      where: {
        is_active: true,
      },
      include: {
        provider: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        application_deadline: 'asc',
      },
    });
    res.json(scholarships);
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Apply for a scholarship
router.post('/apply', authenticateToken, async (req, res) => {
  const { scholarshipId } = req.body;
  const userId = req.user.userId;

  try {
    // Get student ID from user ID
    const student = await prisma.student.findUnique({
      where: {
        user_id: parseInt(userId),
      },
    });

    if (!student) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    // Check if already applied
    const existingApplication = await prisma.application.findFirst({
      where: {
        student_id: student.student_id,
        scholarship_id: parseInt(scholarshipId),
      },
    });

    if (existingApplication) {
      return res.status(400).json({ error: 'You have already applied for this scholarship' });
    }

    // Create new application
    const application = await prisma.application.create({
      data: {
        student_id: student.student_id,
        scholarship_id: parseInt(scholarshipId),
        submission_date: new Date(),
        status: 'pending',
      },
    });

    res.status(201).json({ message: 'Application submitted successfully', applicationId: application.application_id });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new scholarship
router.post('/', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const { name, description, amount, no_of_students, application_deadline, start_date, end_date, provider_id, is_active } = req.body;
    const scholarship = await prisma.scholarship.create({
      data: {
        name,
        description,
        amount: parseFloat(amount),
        no_of_students: parseInt(no_of_students),
        application_deadline: new Date(application_deadline),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        provider_id: parseInt(provider_id),
        is_active: is_active !== undefined ? is_active : true,
      },
    });
    // Notify all students
    const students = await prisma.user.findMany({ where: { role: 'student' }, select: { user_id: true } });
    const notifications = students.map(stu => ({
      user_id: stu.user_id,
      message: `A new scholarship '${scholarship.name}' is now available. Check it out and apply if eligible!`,
    }));
    await prisma.notification.createMany({ data: notifications });
    res.status(201).json(scholarship);
  } catch (error) {
    console.error('Error creating scholarship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Edit an existing scholarship
router.put('/:id', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const { id } = req.params;
    const { name, description, amount, no_of_students, application_deadline, start_date, end_date, provider_id, is_active } = req.body;
    const scholarship = await prisma.scholarship.update({
      where: { scholarship_id: parseInt(id) },
      data: {
        name,
        description,
        amount: parseFloat(amount),
        no_of_students: parseInt(no_of_students),
        application_deadline: new Date(application_deadline),
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        provider_id: parseInt(provider_id),
        is_active: is_active !== undefined ? is_active : true,
      },
    });
    res.json(scholarship);
  } catch (error) {
    console.error('Error updating scholarship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all scholarship providers
router.get('/providers', authenticateToken, async (req, res) => {
  try {
    const providers = await prisma.scholarshipProvider.findMany({
      select: { provider_id: true, name: true }
    });
    res.json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a scholarship
router.delete('/:id', authenticateToken, async (req, res) => {
  if (req.user.role !== 'coordinator' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const { id } = req.params;
    await prisma.scholarship.delete({ where: { scholarship_id: parseInt(id) } });
    res.json({ message: 'Scholarship deleted successfully' });
  } catch (error) {
    console.error('Error deleting scholarship:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 