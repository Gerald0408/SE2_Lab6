const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Backend API is running...');
});

// Mood Analysis Mock Route (Part 4 ng Lab)
app.post('/api/mood', (req, res) => {
    const { message } = req.body;
    const feedback = `Gerald's AI Analysis: Feeling ${message.length > 5 ? 'expressive' : 'quiet'} today!`;
    res.json({ ai_feedback: feedback });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));