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

// --- FAMILY MEMBERS ---
router.get('/family-members', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: { student: true },
    });
    if (!user || !user.student) return res.status(404).json({ error: 'Student profile not found' });
    const members = await prisma.familyMember.findMany({
      where: { student_id: user.student.student_id },
      include: {
        siblingEducation: true,
      },
    });
    res.json(members);
  } catch (error) {
    console.error('Error fetching family members:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/family-members', authenticateToken, async (req, res) => {
  const { full_name, age, relationship, designation, annual_income, workplace, phone_number, siblingEducation } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: { student: true },
    });
    if (!user || !user.student) return res.status(404).json({ error: 'Student profile not found' });
    const member = await prisma.familyMember.create({
      data: {
        student_id: user.student.student_id,
        full_name,
        age,
        relationship,
        designation,
        annual_income,
        workplace,
        phone_number,
        siblingEducation: siblingEducation ? {
          create: siblingEducation
        } : undefined,
      },
      include: { siblingEducation: true },
    });
    res.status(201).json(member);
  } catch (error) {
    console.error('Error adding family member:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/family-members/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { full_name, age, relationship, designation, annual_income, workplace, phone_number, siblingEducation } = req.body;
  try {
    // Update family member
    const member = await prisma.familyMember.update({
      where: { member_id: parseInt(id) },
      data: {
        full_name,
        age,
        relationship,
        designation,
        annual_income,
        workplace,
        phone_number,
      },
      include: { siblingEducation: true },
    });
    // If siblingEducation is provided, update or create
    if (siblingEducation) {
      if (member.siblingEducation.length > 0) {
        await prisma.siblingEducation.update({
          where: { education_id: member.siblingEducation[0].education_id },
          data: siblingEducation,
        });
      } else {
        await prisma.siblingEducation.create({
          data: {
            ...siblingEducation,
            student_id: member.student_id,
            member_id: member.member_id,
          },
        });
      }
    }
    res.json({ message: 'Family member updated' });
  } catch (error) {
    console.error('Error updating family member:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/family-members/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.familyMember.delete({ where: { member_id: parseInt(id) } });
    res.json({ message: 'Family member deleted' });
  } catch (error) {
    console.error('Error deleting family member:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// --- OTHER FUNDING ---
router.get('/other-funding', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: { student: true },
    });
    if (!user || !user.student) return res.status(404).json({ error: 'Student profile not found' });
    const fundings = await prisma.otherFunding.findMany({
      where: { student_id: user.student.student_id },
    });
    res.json(fundings);
  } catch (error) {
    console.error('Error fetching other funding:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/other-funding', authenticateToken, async (req, res) => {
  const { funding_name, organization, annual_amount, start_date, end_date } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { user_id: parseInt(req.user.userId) },
      select: { student: true },
    });
    if (!user || !user.student) return res.status(404).json({ error: 'Student profile not found' });
    const funding = await prisma.otherFunding.create({
      data: {
        student_id: user.student.student_id,
        funding_name,
        organization,
        annual_amount,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });
    res.status(201).json(funding);
  } catch (error) {
    console.error('Error adding other funding:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/other-funding/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { funding_name, organization, annual_amount, start_date, end_date } = req.body;
  try {
    await prisma.otherFunding.update({
      where: { funding_id: parseInt(id) },
      data: {
        funding_name,
        organization,
        annual_amount,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });
    res.json({ message: 'Other funding updated' });
  } catch (error) {
    console.error('Error updating other funding:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/other-funding/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.otherFunding.delete({ where: { funding_id: parseInt(id) } });
    res.json({ message: 'Other funding deleted' });
  } catch (error) {
    console.error('Error deleting other funding:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all students (for coordinators)
router.get('/students', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'coordinator') {
      return res.status(403).json({ error: 'Access denied' });
    }
    const students = await prisma.user.findMany({
      where: { role: 'student' },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        username: true,
        student: {
          include: {
            familyMembers: { include: { siblingEducation: true } },
            otherFunding: true,
          }
        },
      },
      orderBy: { last_name: 'asc' },
    });
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Get all users
router.get('/all', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  try {
    const users = await prisma.user.findMany({
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        email: true,
        username: true,
        role: true,
      },
      orderBy: { last_name: 'asc' },
    });
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Create user
router.post('/', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { first_name, last_name, email, username, password, role } = req.body;
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already in use.' });
    const bcrypt = require('bcryptjs');
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { first_name, last_name, email, username, password: hashed, role },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Update user
router.put('/:id', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { id } = req.params;
  const { first_name, last_name, email, username, role, password } = req.body;
  try {
    let data = { first_name, last_name, email, username, role };
    if (password) {
      const bcrypt = require('bcryptjs');
      data.password = await bcrypt.hash(password, 10);
    }
    const user = await prisma.user.update({
      where: { user_id: parseInt(id) },
      data,
    });
    res.json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin: Delete user
router.delete('/:id', authenticateToken, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { user_id: parseInt(id) } });
    res.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 