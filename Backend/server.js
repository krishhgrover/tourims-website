const express = require("express");
const path = require("path");
const con = require("./db");

const app = express();
app.use(require("cors")());
app.use(express.json());

/* =========================
   🔥 API ROUTES FIRST
========================= */

// Booking
app.post("/book", (req, res) => {
  const { name, email, destination } = req.body;

  const sql = "INSERT INTO bookings (name, email, destination) VALUES (?, ?, ?)";

  con.query(sql, [name, email, destination], (err, result) => {
    if (err) return res.status(500).send("DB error");
    res.send("Booking successful");
  });
});

// Get bookings
app.get("/bookings", (req, res) => {
  con.query("SELECT * FROM bookings", (err, result) => {
    if (err) return res.status(500).send("Error");
    res.json(result);
  });
});

// Get packages
app.get("/packages", (req, res) => {
  con.query("SELECT * FROM holiday_packages", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});


app.get("/search-transport", (req, res) => {
  const { from, to, date } = req.query;

  const sql = `
    SELECT * FROM transports
    WHERE from_location = ? AND to_location = ? AND travel_date = ?
  `;

  con.query(sql, [from, to, date], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length > 0) {
  return res.json({
    available: true,
    data: result[0]   // 👈 ADD THIS
  });
}

    const suggestSql = `
      SELECT travel_date, price FROM transports
      WHERE from_location = ? AND to_location = ?
      ORDER BY travel_date ASC
      LIMIT 3
    `;

    con.query(suggestSql, [from, to], (err2, result2) => {
      if (err2) return res.status(500).send(err2);

      res.json({
        available: false,
        suggestions: result2
      });
    });
  });
});


/* =========================
   SERVER START
========================= */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});