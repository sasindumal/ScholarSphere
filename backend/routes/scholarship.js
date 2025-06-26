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

module.exports = router; 