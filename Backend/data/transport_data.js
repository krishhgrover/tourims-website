var con = require("../db");

const data = [
  ["Mumbai", "Goa", "2026-04-25", 4500],
  ["Goa", "Mumbai", "2026-04-28", 4500],

  ["Mumbai", "Manali", "2026-04-26", 9000],
  ["Manali", "Mumbai", "2026-05-02", 9000],

  ["Mumbai", "Kerala", "2026-04-27", 7500],
  ["Kerala", "Mumbai", "2026-05-03", 7500],

  ["Mumbai", "Jaipur & Udaipur", "2026-04-28", 5000],
  ["Jaipur & Udaipur", "Mumbai", "2026-05-04", 5000],

  ["Mumbai", "Kashmir", "2026-04-29", 12000],
  ["Kashmir", "Mumbai", "2026-05-05", 12000],

  ["Mumbai", "Andaman", "2026-04-30", 15000],
  ["Andaman", "Mumbai", "2026-05-06", 15000],

  ["Mumbai", "Rishikesh", "2026-05-01", 6000],
  ["Rishikesh", "Mumbai", "2026-05-07", 6000],

  ["Mumbai", "Darjeeling", "2026-05-02", 11000],
  ["Darjeeling", "Mumbai", "2026-05-08", 11000],

  ["Mumbai", "Ooty", "2026-05-03", 8000],
  ["Ooty", "Mumbai", "2026-05-09", 8000],

  ["Mumbai", "Ladakh", "2026-05-04", 20000],
  ["Ladakh", "Mumbai", "2026-05-10", 20000],

  ["Mumbai", "Dubai", "2026-05-05", 30000],
  ["Dubai", "Mumbai", "2026-05-11", 30000],

  ["Mumbai", "Bali", "2026-05-06", 35000],
  ["Bali", "Mumbai", "2026-05-12", 35000],

  ["Mumbai", "Bangkok & Phuket", "2026-05-07", 25000],
  ["Bangkok & Phuket", "Mumbai", "2026-05-13", 25000],

  ["Mumbai", "Singapore", "2026-05-08", 28000],
  ["Singapore", "Mumbai", "2026-05-14", 28000],

  ["Mumbai", "Maldives", "2026-05-09", 40000],
  ["Maldives", "Mumbai", "2026-05-15", 40000],

  ["Mumbai", "Paris & Rome", "2026-05-10", 55000],
  ["Paris & Rome", "Mumbai", "2026-05-16", 55000],

  ["Mumbai", "Switzerland", "2026-05-11", 60000],
  ["Switzerland", "Mumbai", "2026-05-17", 60000],

  ["Mumbai", "Tokyo & Kyoto", "2026-05-12", 50000],
  ["Tokyo & Kyoto", "Mumbai", "2026-05-18", 50000],

  ["Mumbai", "Sydney & Melbourne", "2026-05-13", 65000],
  ["Sydney & Melbourne", "Mumbai", "2026-05-19", 65000],

  ["Mumbai", "USA", "2026-05-14", 70000],
  ["USA", "Mumbai", "2026-05-20", 70000],

  ["Mumbai", "Istanbul & Cappadocia", "2026-05-15", 45000],
  ["Istanbul & Cappadocia", "Mumbai", "2026-05-21", 45000],
];

const sql =
  "INSERT INTO transports (from_location, to_location, travel_date, price) VALUES ?";

con.query(sql, [data], function (err, result) {
  if (err) {
    console.error("Insert Error:", err);
    return;
  }
  console.log("✅ Transport data inserted successfully!");
});