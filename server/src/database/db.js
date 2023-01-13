const mysql = require("mysql");
const connection = mysql.createConnection({
  // host: process.env.HOST ||'localhost',
  // user: process.env.USER || 'root',
  // password: "",
  // database: process.env.DATABASE || 'cbmisdb',
  host: "localhost",
  user: "root",
  password: "",
  database: "cbmisdb",
});

connection.connect((err) => {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

module.exports = connection;
