const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../../src/generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
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

// Get all completed payments for the logged-in user
router.get('/history', authenticateToken, async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { user_id: parseInt(req.user.userId) },
    });
    if (!student) {
      return res.status(404).json({ error: 'Student profile not found.' });
    }
    const payments = await prisma.payment.findMany({
      where: {
        application: { student_id: student.student_id },
        status: 'completed',
      },
      include: {
        application: {
          select: {
            scholarship: { select: { name: true } },
          },
        },
      },
      orderBy: { payment_date: 'desc' },
    });
    res.json(payments);
  } catch (error) {
    console.error('Error fetching payment history:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get total paid amount for the logged-in user
router.get('/total', authenticateToken, async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { user_id: parseInt(req.user.userId) },
    });
    if (!student) {
      return res.json({ total: 0 });
    }
    const result = await prisma.payment.aggregate({
      _sum: { amount: true },
      where: {
        application: { student_id: student.student_id },
        status: 'completed',
      },
    });
    res.json({ total: result._sum.amount || 0 });
  } catch (error) {
    console.error('Error fetching total paid:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 