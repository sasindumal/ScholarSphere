require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const scholarshipRoutes = require('./routes/scholarship');
const applicationRoutes = require('./routes/applications');
const paymentsRoutes = require('./routes/payments');
const notificationRoutes = require('./routes/notifications');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/scholarships', scholarshipRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/notifications', notificationRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('ScholarSphere backend is running!');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
