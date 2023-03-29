USE employees_db;

INSERT INTO department (dep_Name)
VALUES 
('IT'),
('Finance'),
('Legal'),
('Human Resources'),
('Security'),
('Sales');

INSERT INTO roles (title, salary, dep_id)
VALUES
('Web Developer', 80000, 1),
('Accountant', 50000, 2),
('Paralegal', 70000, 3),
('Manager', 80000, 4),
('Engineer', 100000, 5),
('Sales Rep', 60000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Ari', 'Mccormick', 1, NULL),
('Rachel', 'Bishop', 2, 1),
('Aniya', 'Nielsen', 3, NULL),
('Heidy', 'Yates', 4, 3),
('Baylee', 'Le', 5, NULL),
('Tripp', 'Avery', 6, 5);