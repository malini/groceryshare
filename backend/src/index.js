const express = require('express');
const app = express();

// Middleware to handle JSON requests (if needed)
app.use(express.json());

// Simple API route
app.get('/', (req, res) => {
  res.sendStatus(200); // Respond with HTTP 200
});

// Port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

