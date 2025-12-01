const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/database');

const app = express();
const PORT = 3000;

// Import routers
const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');
const usnRouter = require('./routes/usn');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

// Use routers
app.use('/api', apiRouter);
app.use('/usn', usnRouter);
app.use('/', pagesRouter);

// Start server
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Registration form backend is ready!');
});