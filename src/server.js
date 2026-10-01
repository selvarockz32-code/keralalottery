const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Backend is working"
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});