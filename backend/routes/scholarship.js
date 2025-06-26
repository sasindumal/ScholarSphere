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

module.exports = router; 