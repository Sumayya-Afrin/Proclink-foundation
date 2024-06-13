use Task
CREATE TABLE orders (
    ord_no INT PRIMARY KEY,
    purch_amt DECIMAL(10, 2),
    ord_date DATE,
    customer_id INT,
    salesman_id INT
);

CREATE TABLE Employees(
    
EmployeeID INT PRIMARY KEY,
   FirstName nvarchar(50),
    LastName nvarchar(50)
  
);

INSERT INTO Employees(EmployeeID, FirstName, LastName) VALUES
(1,'John','Doe'), 
(2,'Jane','Smith'),
(3,'Alice','Johnson');


CREATE TABLE Products(
    
ProductID INT PRIMARY KEY,
  ProductName nvarchar(50),
    ProductDescription nvarchar(50)
  
);

INSERT INTO Products(ProductID, ProductName, ProductDescription) VALUES
(101,'Widget A','A standard widget'),
(102,'Gadget B','A fancy new gadget'),
(103,'Thingamajig','A very useful tool');

select * from Employees;



CREATE TABLE SalesOrders(
    
SalesOrderID INT,
  OrderDate datetime,
    TotalAmount  decimal(10,2)
  
);





INSERT INTO SalesOrders(SalesOrderID, OrderDate, TotalAmount) VALUES
(1001,'2023-01-15 14:33:00',150.00),
(1002,'2023-03-22 10:45:00',200.00),
(1003,'2024-05-17 09:20:00',350.00);

select * from SalesOrders;

CREATE TABLE Customers(
    
CustomerID INT PRIMARY KEY,
  CustomerName nvarchar(50),
    Address nvarchar(50)
  
);

INSERT INTO Customers VALUES
(201,'Acme Corp','123 Main St'),
(202,'Globex Inc','456 Elm St'),
(203,'Initech','789 Oak St');

select * from Customers;

--Exercise 1: Employee Full Name
--Scenario: You need to create a list of employees with their full names in uppercase.
select EmployeeID , concat(UPPER(FirstName),' ' , UPPER(LastName)) as FullName
from Employees

--Exercise 2: Product Description Length
--Scenario: You need to find the length of the product descriptions.

select ProductID , ProductName , Len(ProductDescription) as DescriptionLength
from Products

--Exercise 3: Sales Date Formatting
--Scenario: You need to display sales order dates in the YYYY-MM-DD format.
select SalesOrderID, FORMAT(OrderDate,'yyyy-MM-dd') as FormattedOrderDate
from SalesOrders

--Exercise 4: Customer Address Cleanup
--Scenario: You need to remove leading and trailing spaces from the customer addresses.
select CustomerID , CustomerName , LTRIM(Address) as CleanedAddress
from Customers
--Exercise 5: Sales Summary by Year
--Scenario: You need to show the total sales amount for each year.
select datepart(YEAR,OrderDate) as Year, sum(TotalAmount)
from SalesOrders
group by datepart(YEAR,OrderDate)

CREATE TABLE Departments(
    
DepartmentID INT,
  DepartmentName nvarchar(max)
   
  
);

INSERT INTO Departments VALUES
(101,'Sales'), (102,'Engineering'),(103,'Marketing');


ALTER Table Employees 
ADD  DepartmentID int;

UPDATE Employees 
SET DepartmentID = 101 
where EmployeeID=1;

UPDATE Employees 
SET DepartmentID = 102 
where EmployeeID=2;

UPDATE Employees 
SET DepartmentID = 103
where EmployeeID=3;

select * from Employees;
select *  from departments;
--1
select EmployeeID,concat(UPPER(FirstName),' ',UPPER(LastName)) as FullName , Lower(DepartmentName) as DepartmentName
from Employees
 join Departments
on Employees.DepartmentID =Departments.DepartmentID

--2
select ProductID,ProductName,Len(ProductDescription),REVERSE(ProductDescription)
from products;

--4
select ProductID,ProductName,REPLACE(ProductDescription,'useful','beneficial')
from Products
where ProductDescription Like '%useful%'

--3
select * from SalesOrders
ALTER Table SalesOrders
ADD  customer int;

UPDATE SalesOrders
SET customer=201
where SalesOrderID=1001

UPDATE SalesOrders
SET customer=202
where SalesOrderID=1002

UPDATE SalesOrders
SET customer=203
where SalesOrderID=1003
select CustomerID,CustomerName,Format(OrderDate,'yyyyMM-dd'), TotalAmount
from Customers
inner join SalesOrders
on Customers.CustomerID=SalesOrders.Customer;



select * from salesorders;

