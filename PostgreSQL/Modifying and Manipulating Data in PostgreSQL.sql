-- Insert a new record into the "Employees" table with the following data: EmployeeID: 4, FirstName: 'Sarah', LastName: 'Wilson', Age: 28.
-- ans
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age)
VALUES (4, 'Sarah', 'Wilson', 28);

-- Update the "Age" of the employee with EmployeeID 1 in the "Employees" table to 26.
-- ans
UPDATE Employees SET Age = 26 WHERE EmployeeID = 1;

-- Delete the record from the "Customers" table where the CustomerID is 2.
-- ans
DELETE FROM Customers
WHERE CustomerID = 2;

-- Insert a new record into the "Customers" table with the following data: CustomerID: 3, FirstName: 'Robert', LastName: 'Davis', City: 'Chicago
-- ans
INSERT INTO Customers (CustomerID, FirstName, LastName, City)
VALUES (3, 'Robert', 'Davis', 'Chicago');

-- Update the "City" of the customer with CustomerID 1 in the "Customers" table to 'San Francisco'.
-- ans
UPDATE Customers
SET City = 'San Francisco'
WHERE CustomerID = 1;

-- Delete all records from the "Employees" table where the "Age" is less than 30.
-- ans
DELETE FROM Employees
WHERE Age < 30;

-- Insert multiple records into the "Customers" table in a single statement. The records should have the following data:
-- CustomerID: 4, FirstName: 'Michelle', LastName: 'Anderson', City: 'Houston'
-- CustomerID: 5, FirstName: 'William', LastName: 'Thompson', City: 'New York'
INSERT INTO Customers (CustomerID, FirstName, LastName, City)
VALUES 
    (4, 'Michelle', 'Anderson', 'Houston'),
    (5, 'William', 'Thompson', 'New York');


-- Update the "LastName" of the employee with EmployeeID 3 in the "Employees" table to 'Brown'.
-- ans
UPDATE Employees
SET LastName = 'Brown'
WHERE EmployeeID = 3;

-- Delete all records from the "Customers" table.
-- ans
DELETE FROM Customers;

-- Insert a new record into the "Employees" table with the following data: EmployeeID: 5, FirstName: 'Emily', LastName: 'Jones', Age: 32.
-- ans
INSERT INTO Employees (EmployeeID, FirstName, LastName, Age)
VALUES (5, 'Emily', 'Jones', 32);


-- Update the "City" of all customers in the "Customers" table to 'Seattle'.
-- ans
UPDATE Customers
SET City = 'Seattle';

-- Delete the record from the "Employees" table where the EmployeeID is 4.
-- ans
DELETE FROM Employees
WHERE EmployeeID = 4;


-- Insert a new record into the "Customers" table with the following data: CustomerID: 6, FirstName: 'Daniel', LastName: 'Wilson', City: 'Los Angeles'.
-- ans
