const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'emplyees_db',
    password: 'Soundtribe9!',
    port: 3306
  });

  function choices(){
    inquirer
    .prompt({
      type: "list",
      name: "selections",
      message: "Employee database. Please select an option.",
      choices: [
        'View all departments',
        'Add a department',
        'View all employees',
        'Add an employee',
        'View all roles',
        'Add a role',
        'Update employee role',
        'Delete an employee',
      ]
    })
.then(function (answer) {
  switch(answer.selctions) {
    case 'View all departments':
      allDepartments();
      break;
    case 'Add a department':
      addDepartment();
      break;
    case 'View all employees':
      allEmployees();
      break;
    case 'Add an employee':
      addEmployee();
      break;
    case 'View all roles':
      allRoles();
      break;
    case 'Add a role':
      addRole();
      break;
    case 'Update employee role':
      updateRole();
      break;
    case 'Remove an employee':
      removeEmployee();
      break;
    case 'Quit':
      quit();
      break;


  }
}
)};

function allDepartments() {
  db.query(`SELECT * FROM department`, function (err, res) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`\n`);
    console.table(res);
      choices();
  })
};

function addDepartment() {
inquirer
.prompt({
  type: "input",
  name: "departmentName",
  message: "Enter the department you would like to add."
})
.then((department) => {
  db.query(
    `INSERT INTO department (depName) VALUES (?)`,
    [department.depName],
    function (err, results) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`\nDepartment added successfully!\n`);
      allDepartments();
    }
  );
});
}

function allEmployees() {
  db.query(
    `
      SELECT 
        employee.id, 
        employee.first_name, 
        employee.last_name, 
        role.job_title, 
        department.depName AS department, 
        role.salary, 
        CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
      FROM employee
      LEFT JOIN role ON employee.role_id = role.id
      LEFT JOIN department ON role.department_id = department.id
      LEFT JOIN employee manager ON employee.manager_id = manager.id
    `,
    function (err, res) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`\n`);
      console.table(res);
      choices();
    }
  );
}
function addEmployee() {
 inquirer
 .prompt([
  {
  type: "input",
  name: "firstName",
  message: "Enter the first nmae of the employee you'd like to add."
 },
 {
  type: "input",
  name: "lastName",
  message: "Enter the last name of the employee you'd like to add."
 },
 {
  type: "input",
  name: "employeeRole",
  message: "Enter the employee's role."
 },
 {
  type: "input",
  name: "employeeManager",
  message: "Enter the employee's manager."
 }
])
.then(function)
};

function allRoles() {

};

function addRole() {

};

function updateRole() {

};

function removeEmployee() {

};

function quit() {

};














