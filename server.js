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

async function run(){
  const connection = mysql.createConnection;
  
  
  const { option } = await inquirer.prompt([
    {
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
      'Quit'
    ]
  }
])
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

};

function addDepartment() {
inquirer
.prompt({
  type: "input",
  name: "department_name",
  message: "Please enter the departnment you would like to add."
})
.then
};

function allEmployees() {

};

function addEmployee() {

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














