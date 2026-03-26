require('dotenv').config();

const express = require('express');
const app = express();

// Use PORT from .env or fallback
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, NodeJS Application 🚀');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is a simple testing NodeJS Application');
});

// Service route
app.get('/service', (req, res) => {
  res.send('💼 Premium Professional Services You Can Trust');
});

// General Error Handling
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
