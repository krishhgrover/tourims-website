const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 👉 Serve React build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

// 👉 API Route (Booking)
app.post("/book", (req, res) => {
  console.log("Booking:", req.body);
  res.send("✅ Booking successful");
});

// 👉 IMPORTANT: React Routing Fix (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// 👉 Run server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});