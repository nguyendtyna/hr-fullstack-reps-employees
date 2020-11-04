// Require express middleware
const express = require("express");
// Create a new express application as an instance object
const app = express();
const path = require("path");
// Define a port
const PORT = 3001;
const queries = require("./queries");

// Bind middleware to the app object
// Serve static files
app.use(express.static(path.join(__dirname, "./frontend/build")));

// Route a GET request
app.get("/api/employees", (req, res) => {
  // Log to the node server
  // console.log("Successful GET route for all the employees");

  // Respond with all employees from the database
  queries.retrieveAllEmployees((err, results) => {
    // console.log("Results from GET request: ", results);
    if (err) {
      res.status(400).send(err);
    }
    // Send the response
    res.status(200).send(results);
  })
});

app.get("/api/employees/:id", (req, res) => {
  // console.log("Successful GET route for a single employee")
  // console.log("Value of id property on req.params:", req.params.id);

  let employeeId = req.params.id;
  // Respond with a single employee from the database by id
  queries.retrieveEmployee(employeeId, (err, results) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(results);
  })
})

// Listen on port for connections
app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
