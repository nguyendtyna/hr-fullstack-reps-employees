const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hratxsq00l",
  database: "fullstackreps",
});

// Set up a connection to the database
connection.connect();

const retrieveAllEmployees = (cb) => {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

// Query a single employee from the database
const retrieveEmployee = (id, cb) => {
  connection.query("SELECT * FROM employees WHERE id = ?", id, (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  retrieveAllEmployees,
  retrieveEmployee
};
