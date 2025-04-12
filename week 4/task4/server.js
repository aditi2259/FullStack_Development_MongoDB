const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

// 📌 New /welcome Route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});