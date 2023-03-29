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

function choices() {
  inquirer.prompt({
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
      switch (answer.selections) {
        case 'View all departments':
          viewDepartment();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Update employee role':
          updateEmployee();
          break;
        case 'Remove an employee':
          removeEmployee();
          break;
        default:
          quit();

      }
    }
    )
};

function viewDepartment() {
  connection.query(`SELECT * FROM department`, function (err, res) {
    if (err) throw err;
    console.table(res)
    choices();
  })
};

function addDepartment() {
  inquirer
    .prompt([{
      type: "input",
      name: "departmentName",
      message: "Enter the department you would like to add."
    }])
    .then(answer => {
      connection.query(
        `INSERT INTO department (dep_Name) VALUES (?)`,
        [answer.departmentName],
        function (err) {
          if (err) throw err;
          viewDepartment();

        }
      );
    });
};


function viewEmployees() {
  connection.query(
    'SELECT * FROM employees',
    function (err, res) {
      if (err) throw err;
      console.table(res)
      choices();
    })
};
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter new employees first name.'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter new employees last name.',
    },
    {
      type: 'list',
      name: 'roleId',
      message: 'Select role ID for new employee.',
      choices: [{
        name: '(Web Developer)',
        value: 1
      },
      {
        name: '(Accountant)',
        value: 2
      },
      {
        name: '(Paralegal)',
        value: 3
      },
      {
        name: '(Manager)',
        value: 4
      },
      {
        name: '(Engineer)',
        value: 5
      },
      {
        name: '(Sales Rep)',
        value: 6
      },
      ],
    },
    {
      name: 'managerId',
      type: 'list',
      message: 'Select manager ID for new employee.',
      choices: [
        {
          name: '(Ari Mccormick)',
          value: 1
        },
        {
          name: '(Aniya Nielsen)',
          value: 2
        },
        {
          name: '(Baylee Le)',
          value: 3
        }
      ],
    },
  ])
    .then(answer => {
      connection.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
        function (err) {
          if (err) throw err;
          viewEmployees();
        })
    });
};


function viewRoles() {
  connection.query(
    'SELECT * FROM roles',
    function (err, res) {
      if (err) throw err;
      console.table(res),
        choices();
    })
};


function addRole() {
  connection.promise().query(`SELECT * FROM department`).then(([rows]) => {
    let departments = rows
    const departmentChoices = departments.map(({ id, dep_name}) => ({ name: dep_name, value: id }))
  console.log('dep', departmentChoices)
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the roles title?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this job?',
    },
    {
      type: 'list',
      name: 'dep_id',
      message: 'which department does this role belong to.',
      choices: departmentChoices
    }
  ])
    .then(answer => {
      connection.query(
        'INSERT INTO roles (title, salary, dep_id) VALUES (?, ?, ?)',
        [answer.title, answer.salary, answer.dep_id],
        function (err) {
          if (err) throw err;
          viewRoles();
        }
      );
    })
  })
};




function updateEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee id',
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter new role id',
    },
  ])
    .then(answer => {
      connection.query(
        'UPDATE employees SET role_id=? WHERE id=?',
        [answer.roleId, answer.id],
        function (err) {
          if (err) throw err;
          viewEmployees();
        })
    })
};

function quit() {
  console.log("goodbye")
  process.exit();
}


// function removeEmployee() {
//   connection.query(
//     'SELECT * FROM employees',
//     function (err, res) {
//         if (err) throw err;
//         console.table(res)
//         inquirer,prompt([
//           {
//             type: 'input',
//             name: 'empRemove',
//             message: 'Enter the Employee Id of the person you wish to remove.',
//           }
//         ])
//         .then((answer) => {
//           connection.query('DELETE FROM roles WHERE ? ', {title: answer.empRemove})
//           choices();
//         })
//     })
// };

choices();











