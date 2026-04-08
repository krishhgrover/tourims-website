const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

// serve all frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// 👉 make "/" open home_page.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/home_page.html'));
});

// booking route
app.post('/book', (req, res) => {
    console.log("Booking:", req.body);
    res.send("✅ Booking successful");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});