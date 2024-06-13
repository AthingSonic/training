-- Problems
-- 1.Create a table called "Employees" with columns for "EmployeeID" (integer), "FirstName" (text), "LastName" (text), and "Age" (integer).
-- ans:
CREATE TABLE Employees (
    EmployeeID INTEGER PRIMARY KEY,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL,
    Age INTEGER
);

-- 2.Insert three records into the "Employees" table with the following data:
-- EmployeeID: 1, FirstName: 'John', LastName: 'Doe', Age: 25
-- EmployeeID: 2, FirstName: 'Jane', LastName: 'Smith', Age: 30
-- EmployeeID: 3, FirstName: 'Mike', LastName: 'Johnson', Age: 35
-- ans:
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age)
VALUES
    (1, 'John', 'Doe', 25),
    (2, 'Jane', 'Smith', 30),
    (3, 'Mike', 'Johnson', 35);

-- 3.Retrieve all records from the "Employees" table.
-- ans:
SELECT * FROM Employees;

-- 4.Retrieve only the "FirstName" and "LastName" columns from the "Employees" table.
-- ans: 
SELECT FirstName, LastName FROM Employees;

-- 5.Retrieve the record(s) from the "Employees" table where the "Age" is greater than 28.
-- ans: 
SELECT * FROM Employees WHERE Age > 28;

-- 6.Update the record in the "Employees" table where the "EmployeeID" is 2, and change the "Age" to 32.
-- ans: 
UPDATE Employees SET Age = 32 WHERE EmployeeID = 2;

-- 7.Delete the record from the "Employees" table where the "EmployeeID" is 3.
-- ans: 
DELETE FROM Employees WHERE EmployeeID = 3;

-- 8.Create a table called "Customers" with columns for "CustomerID" (integer), "FirstName" (text), "LastName" (text), and "City" (text).
-- ans: 
CREATE TABLE Customers (
    CustomerID INTEGER PRIMARY KEY,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL,
    City TEXT
);

-- 9.Insert two records into the "Customers" table with the following data:
CustomerID: 1, FirstName: 'Michael', LastName: 'Brown', City: 'New York'
CustomerID: 2, FirstName: 'Emily', LastName: 'Johnson', City: 'Los Angeles'
ans: INSERT INTO Customers (CustomerID, FirstName, LastName, City)
VALUES 
    (1, 'Michael', 'Brown', 'New York'),
    (2, 'Emily', 'Johnson', 'Los Angeles');

-- 10.Retrieve all records from the "Customers" table where the "City" is 'New York'.
-- ans: 
SELECT * FROM Customers WHERE City = 'New York';

-- 11.Join the "Employees" and "Customers" tables based on the "LastName" column and retrieve all records where the last name matches.
-- ans: 
SELECT *
FROM Employees e
JOIN Customers c ON e.LastName = c.LastName;

-- 12.Calculate the average age of all employees in the "Employees" table.
-- ans: 
SELECT AVG(Age) AS AverageAge
FROM Employees;

-- 13.Calculate the total number of employees in the "Employees" table.
-- ans: 
SELECT COUNT(*) AS TotalEmployees
FROM Employees;
