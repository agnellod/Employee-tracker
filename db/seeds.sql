USE employees_db;

INSERT INTO department (depName)
VALUES 
('IT'),
('Finance'),
('Legal'),
('Human Resources'),
('Security'),
('Sales');

INSERT INTO role (job_title, salary, department_id)
VALUES
('Web Developer', 80000, 1),
('Accountant', 50000, 2),
('Paralegal', 70000, 3),
('Manager', 80000, 4),
('Engineer', 100000, 5),
('Sales Rep', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ari', 'Mccormick', 1, 458),
('Rachel', 'Bishop', 2, 276),
('Aniya', 'Nielsen', 3, 486),
('Heidy', 'Yates', 4, 126),
('Baylee', 'Le', 5, 724),
('Tripp', 'Avery', 6, 157);