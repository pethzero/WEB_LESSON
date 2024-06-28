CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    BirthDate DATE,
    HireDate DATE,
    JobTitle VARCHAR(100)
);

INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, HireDate, JobTitle)
VALUES (1, 'John', 'Doe', '1980-01-15', '2020-03-01', 'Software Engineer');

INSERT INTO Employees (EmployeeID, FirstName, LastName, BirthDate, HireDate, JobTitle)
VALUES (2, 'Jane', 'Smith', '1985-02-20', '2018-07-15', 'Project Manager');

UPDATE Employees
SET JobTitle = 'Senior Software Engineer', HireDate = '2019-01-01'
WHERE EmployeeID = 1;

DELETE FROM Employees
WHERE EmployeeID = 2;
