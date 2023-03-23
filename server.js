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
    database: 'employees_db',
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
]);
switch (option) {
  case 'View all departments':
    
  console.error(`error please try a different selection: ${err}`);
  break;

  
}












}

run();
