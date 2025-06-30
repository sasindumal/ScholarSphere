const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, username, email, password, role } = req.body;

  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long.' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        username,
        email,
        password: hashedPassword,
        role: role || 'student',
      },
    });

    // If the user is a student, create a corresponding student row
    if ((role || 'student') === 'student') {
      await prisma.student.create({
        data: {
          user_id: user.user_id,
          full_name: `${firstName} ${lastName}`,
          registration_no: `UGC/NEW/${user.user_id}`,
          date_of_birth: new Date('2000-01-01'), // Placeholder, should be updated by user later
          permanent_address: 'To be updated',
          admission_date: new Date(), // Placeholder, should be updated by user later
          year_of_study: 1, // Default to 1st year
          gender: 'other', // Placeholder, should be updated by user later
          phone_number: '0000000000', // Placeholder
          email: email,
          school_name: 'To be updated',
          unmarried_siblings: 0, // Default
        },
      });
    }

    res.status(201).json({ message: 'User created successfully!', userId: user.user_id });

  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'An error occurred during signup.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const token = jwt.sign({ userId: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, userId: user.user_id, role: user.role });

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

// Forgot Password Route (Placeholder)
router.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  // In a real application, you would send a password reset email here.
  // For now, we'll just simulate a success response.
  console.log(`Password reset requested for: ${email}`);
  res.status(200).json({ message: 'If an account with this email exists, a password reset link has been sent.' });
});

// Update password
router.put('/password', async (req, res) => {
  const { currentPassword, newPassword, confirmPassword } = req.body;
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { user_id: decoded.userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) return res.status(400).json({ error: 'Current password is incorrect' });
    if (newPassword !== confirmPassword) return res.status(400).json({ error: 'Passwords do not match' });
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { user_id: user.user_id }, data: { password: hashed } });
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
