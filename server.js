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

  // Send the response
  res.send("all the employees");
});

app.get("/api/employees/:id", (req, res) => {
  // console.log("Successful GET route for a single employee")
  res.send("single employee");
})

// Listen on port for connections
app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
