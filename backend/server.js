const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Or any port you prefer

// Database credentials
const dbConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '170055510m',
  database: 'scholarsphere' // Replace with your actual database name
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to database with threadId:', connection.threadId);
  connection.release(); // Release the connection
});

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to fetch users
app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});