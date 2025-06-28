const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../src/generated/prisma');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token (assuming it's in a separate file or here)
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

// Get all notifications for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        user_id: parseInt(req.user.userId),
      },
      orderBy: {
        created_at: 'desc',
      },
    });
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get recent (last 5) notifications, regardless of read status
router.get('/recent', authenticateToken, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        user_id: parseInt(req.user.userId),
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 5,
    });
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching recent notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get unread notifications count
router.get('/unread-count', authenticateToken, async (req, res) => {
    try {
      const count = await prisma.notification.count({
        where: {
          user_id: parseInt(req.user.userId),
          is_read: false,
        },
      });
      res.json({ count });
    } catch (error) {
      console.error('Error fetching unread notification count:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Mark notifications as read
router.post('/mark-as-read', authenticateToken, async (req, res) => {
  const { notificationIds } = req.body; // Expecting an array of IDs

  if (!notificationIds || !Array.isArray(notificationIds)) {
    return res.status(400).json({ error: 'Invalid request body, expected notificationIds array' });
  }

  try {
    await prisma.notification.updateMany({
      where: {
        notification_id: {
          in: notificationIds,
        },
        user_id: parseInt(req.user.userId), // Ensure user can only update their own notifications
      },
      data: {
        is_read: true,
      },
    });
    res.json({ message: 'Notifications marked as read' });
  } catch (error) {
    console.error('Error marking notifications as read:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
