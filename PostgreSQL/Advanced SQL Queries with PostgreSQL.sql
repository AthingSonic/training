-- 1.Perform an inner join between the "Employees" and "Customers" tables using the "LastName" column, and retrieve the FirstName and City of the matching records.
-- ans:
SELECT e.FirstName AS EmployeeFirstName, c.FirstName AS CustomerFirstName, c.City
FROM Employees e
JOIN Customers c ON e.LastName = c.LastName;

-- 2.Write a query to retrieve all employees who are not present in the "Customers" table using a left outer join.
-- ans:
SELECT e.EmployeeID, e.FirstName, e.LastName, e.Age
FROM Employees e
LEFT JOIN Customers c ON e.LastName = c.LastName
WHERE c.CustomerID IS NULL;

-- 3.Find the total count of customers from each city using a GROUP BY clause
-- ans
SELECT City, COUNT(*) AS TotalCustomers
FROM Customers
GROUP BY City;

-- 4.Retrieve the average age of employees who have made a purchase. Combine a subquery with an aggregate function to solve this.
-- ans
SELECT AVG(e.Age) AS AverageAgeWithPurchase
FROM Employees e
WHERE EXISTS (
    SELECT 1
    FROM Customers c
    WHERE e.LastName = c.LastName
);

-- 5.Find the total number of customers and the sum of their purchases for each city using a join, subquery, and aggregate functions.
-- ans
SELECT c.City,
       COUNT(c.CustomerID) AS TotalCustomers,
       COALESCE(SUM(p.PurchaseAmount), 0) AS TotalPurchases
FROM Customers c
LEFT JOIN (
    SELECT CustomerID, 
           CASE 
               WHEN CustomerID % 2 = 0 THEN 100  -- Hypothetical purchase amount
               ELSE 150  -- Another hypothetical purchase amount
           END AS PurchaseAmount
    FROM Customers  -- Simulating purchases based on customer data
) p ON c.CustomerID = p.CustomerID
GROUP BY c.City
ORDER BY c.City;

-- 6.Write a query to retrieve the names and ages of employees who have made a purchase and whose age is above the average age of all employees.
-- ans
SELECT e.FirstName, e.LastName, e.Age
FROM Employees e
JOIN (
    SELECT AVG(Age) AS AvgAge
    FROM Employees
) avg_age ON e.Age > avg_age.AvgAge
WHERE EXISTS (
    SELECT 1
    FROM Customers c
    WHERE e.LastName = c.LastName
);

-- 7.Perform a right outer join between the "Customers" and "Employees" tables using the "LastName" column and retrieve the FirstName and LastName of the matching records.
-- ans
SELECT e.FirstName AS EmployeeFirstName, e.LastName AS EmployeeLastName, c.FirstName AS CustomerFirstName, c.LastName AS CustomerLastName
FROM Customers c
RIGHT JOIN Employees e ON c.LastName = e.LastName;

-- 8.Find the highest purchase amount made by each customer using a subquery and aggregate function.
-- ans
SELECT 
    c.CustomerID, 
    c.FirstName, 
    c.LastName,
    MAX(p.PurchaseAmount) AS HighestPurchaseAmount
FROM Customers c
LEFT JOIN (
    SELECT CustomerID, MAX(PurchaseAmount) AS PurchaseAmount
    FROM Purchases
    GROUP BY CustomerID
) p ON c.CustomerID = p.CustomerID
GROUP BY c.CustomerID, c.FirstName, c.LastName;

-- 9.Retrieve the names of customers who have not made any purchases using a subquery and a left outer join.
-- ans
SELECT c.FirstName, c.LastName
FROM Customers c
LEFT JOIN Purchases p ON c.CustomerID = p.CustomerID
WHERE p.CustomerID IS NULL;

-- 10.Write a query to calculate the average age of employees for each city they belong to using a join, subquery, and GROUP BY clause.
-- ans
SELECT c.CityName, AVG(e.Age) AS AvgAge
FROM City c
LEFT JOIN Employees e ON c.CityID = e.CityID
GROUP BY c.CityName
ORDER BY c.CityName;


-- Purchases table
CREATE TABLE Purchases (
    PurchaseID SERIAL PRIMARY KEY,
    CustomerID INTEGER,
    PurchaseAmount NUMERIC(10, 2),
    PurchaseDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
INSERT INTO Purchases (CustomerID, PurchaseAmount, PurchaseDate)
VALUES
    (1, 500.00, '2023-01-15'),
    (2, 800.00, '2023-02-20'),
    (1, 300.00, '2023-03-10');

-- city names table
CREATE TABLE city_names (
    city_name TEXT
);

INSERT INTO city_names (city_name)
VALUES
    ('New York'),
    ('Los Angeles'),
    ('Chicago')
