-- create table 
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    manager_id INT,
    salary NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create trigger function
CREATE OR REPLACE FUNCTION check_salary()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.salary <= 0 THEN
        RAISE EXCEPTION 'Salary must be positive';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- create trigger
CREATE TRIGGER before_insert_employee
BEFORE INSERT ON employees
FOR EACH ROW
EXECUTE FUNCTION check_salary();


-- create cte
WITH total_salary AS (
    SELECT manager_id, SUM(salary) AS total_salary
    FROM employees
    GROUP BY manager_id
)
SELECT e.name AS manager_name, ts.total_salary
FROM total_salary ts
JOIN employees e ON ts.manager_id = e.employee_id
WHERE e.manager_id IS NOT NULL;


-- create a recursive query
WITH RECURSIVE employee_hierarchy AS (
    SELECT employee_id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.employee_id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.employee_id
)
SELECT * FROM employee_hierarchy
ORDER BY level, manager_id;


-- Inserting employees with positive salaries
INSERT INTO employees (name, manager_id, salary) VALUES
    ('Alice', NULL, 50000.00),
    ('Bob', 1, 45000.00),
    ('Charlie', 1, 60000.00),
    ('David', 2, 40000.00),
    ('Eve', 2, 55000.00);

-- Attempting to insert an employee with a non-positive salary (should fail due to trigger)
INSERT INTO employees (name, manager_id, salary) VALUES
    ('Frank', 3, -30000.00);