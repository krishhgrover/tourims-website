var con = require('../db');

var sql = `
CREATE TABLE holiday_packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  location VARCHAR(255),
  price INT,
  duration VARCHAR(100),
  description TEXT,
  image VARCHAR(500),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Holiday Packages table created!");
});