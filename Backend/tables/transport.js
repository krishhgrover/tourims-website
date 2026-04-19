var con = require('../db');

var sql = `
CREATE TABLE transports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  from_location VARCHAR(255),
  to_location VARCHAR(255),
  travel_date DATE
  
)
`;

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Transport table created!");
});