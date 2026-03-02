require('dotenv').config();
const express = require('express');
const { connectDB } = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDB()
  .then(() => {
    console.log('SQLite Database initialized');
  })
  .catch(err => {
    console.log('Database connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/roles', roleRoutes);
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'User & Role API (SQLite)',
    endpoints: {
      roles: '/api/roles',
      users: '/api/users'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
