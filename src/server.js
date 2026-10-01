require("dotenv").config();
require("./firebase");

const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    message: "Backend is working",
    currentTime: new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    })
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});