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

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        user_id: parseInt(req.user.userId)
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get full profile (user + student)
router.get('/full-profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        username: true,
        role: true,
        student: true,
      },
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error('Error fetching full profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user basic info
router.put('/profile', authenticateToken, async (req, res) => {
  const { first_name, last_name, email, username } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { user_id: parseInt(req.user.userId) },
      data: { first_name, last_name, email, username },
    });
    res.json({ message: 'Profile updated', user: updated });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update student info
router.put('/student', authenticateToken, async (req, res) => {
  const data = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: { student: true },
    });
    if (!user || !user.student) return res.status(404).json({ error: 'Student profile not found' });
    const updated = await prisma.student.update({
      where: { student_id: user.student.student_id },
      data,
    });
    res.json({ message: 'Student info updated', student: updated });
  } catch (error) {
    console.error('Error updating student info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 