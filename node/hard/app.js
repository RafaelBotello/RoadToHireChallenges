// HARD: Add the remaining CRUD functionality to your medium problem.
// Make sure you return the proper HTTP status codes based on the outcome of the request.
// Be sure to implement error checking here.
// If an invalid request is made, we want to return some sort of error message and the
// correct HTTP status code for the situation.
// HTTP Status Codes: http://www.restapitutorial.com/httpstatuscodes.html

// POST::myendpointname.com/employees  =  Inserts new employee into your data.
// GET::myendpointname.com/employees = Returns json with information from all employees.
// GET::myendpointname.com/employees/<employeeID>  =  Returns json with the information from that specific employee.
// PUT::myendpointname.com/employees/<employeeID>  =  Updates information for specified employee.
// DELETE::myendpointname.com/employees/<employeeID>  =  Removes the employee with that ID from the data.

// *** At the beginning of your API code, please comment in your endpoints so that I can test your code via Postman.
// You can use a similar technique as the one shown above in the API design.

/* endpoints 

localhost:3000/employees/
localhost:3000/employees/9

*/

// Import all the modules required.
const Joi = require("joi");
const express = require("express");
const app = express();
const port = 3000;
const employees = require("./employees.json");
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world!"));
// In this function we request all the data.
app.get("/employees", (req, res) => res.status(200).send(employees));
// In this function we are getting the data that matches the id.
app.get("/employees/:id", (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee)
    res.status(404).send("The id given does not match and existing employeee.");
  res.send(employee);
});

// In this funtion we will insert a new employee
app.post("/employees/post", (req, res) => {
  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateEmployee(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const employee = {
    id: employees.length + 1,
    name: req.body.name,
    salary: req.body.price,
    departmentName: req.body.departmentName
  };
  employees.push(employee);
  res.status(201).send(employee);
});

//This function will update an employee
app.put("/employees/:id", (req, res) => {
  // requesting the user to be updated
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) {
    res.status(404).send("The user with the id given was not found.");
    return;
  }
  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateEmployee(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  //Update employees
  // Return the updated employee
  employee.name = req.body.name;
  employee.salary = req.body.salary;
  employee.departmentName = req.body.departmentName;
  res.send(employee);
});

// This function will delete an employee
app.delete("/employees/:id", (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) {
    res.status(404).send("The user with the id given was not found.");
    return;
  }
  const index = employees.indexOf(employee);
  employees.splice(index, 1);

  res.send(employee);
});

//This function will validate our input using Joi
function validateEmployee(employee) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    salary: Joi.number()
      .min(20000)
      .required(),
    departmentName: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(employee, schema);
}

app.listen(port, () => console.log(`App listening on port ${port}`));
