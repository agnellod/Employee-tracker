// const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');


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
    }
  }
  )};
  
function allDepartments() {
    var query = 'SELECT * FROM department';
    connection.query(query, function(err, res) {
      if (err) {
        res.status(400).json({ error: err.message });
      }
        console.table('All Departments:', res);
        choices();
    })
    };



