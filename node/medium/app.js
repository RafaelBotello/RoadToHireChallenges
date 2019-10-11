// MEDIUM: Create a JSON file that will have 10 employees in it, their employeeID, their name,
// their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api
// to respond with all data on the employees.
// If you hit the endpoint with their employeeID,
// we want to hand up only the information on that one employee.

// If you hit the endpoint with an incorrect employeeID, send back the correct
// HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from
// that specific employee.

// Import all the modules required.
const express = require("express");
const app = express();
const port = 3000;
const employees = require("./employees.json");

app.get("/", (req, res) => res.send("Hello world!"));
// In this function we request all the data.
app.get("/employees", (req, res) => res.send(employees));
// In this function we are getting the data that matches the id.
app.get("/employees/:id", (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee)
    res.status(404).send("The user with the id given was not found.");
  res.send(employee);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
