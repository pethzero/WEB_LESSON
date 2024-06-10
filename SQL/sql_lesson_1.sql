-- สร้างฐานข้อมูล
CREATE DATABASE LockerManagementDB;

-- ใช้ฐานข้อมูล
USE LockerManagementDB;

-- สร้างตาราง locker_management
CREATE TABLE locker_management (
    id INT PRIMARY KEY,
    status VARCHAR(50),
    building VARCHAR(50),
    [zone] VARCHAR(50),
    locker VARCHAR(50),
    cell VARCHAR(50)
);

-- สร้างตาราง locker_record
CREATE TABLE locker_record (
    id INT PRIMARY KEY,
    locker_id INT,
    request_by VARCHAR(50)
);

-- สร้างตาราง tblUsers
CREATE TABLE tblUsers (
    UserID VARCHAR(50) PRIMARY KEY,
    FirstNameE VARCHAR(50),
    LastNameE VARCHAR(50)
);

-- แทรกข้อมูลตัวอย่างในตาราง locker_management
INSERT INTO locker_management (id, status, building, [zone], locker, cell)
VALUES 
(1, 'Active', 'Building1', 'ZoneA', 'Locker1', 'Cell1'),
(2, 'Inactive', 'Building1', 'ZoneA', 'Locker2', 'Cell1'),
(3, 'Active', 'Building2', 'ZoneB', 'Locker1', 'Cell1');

-- แทรกข้อมูลตัวอย่างในตาราง locker_record
INSERT INTO locker_record (id, locker_id, request_by)
VALUES 
(1, 1, 'User1'),
(2, 1, 'User2'),
(3, 2, 'User3'),
(4, 3, 'User4'),
(5, 1, 'User1');

-- แทรกข้อมูลตัวอย่างในตาราง tblUsers
INSERT INTO tblUsers (UserID, FirstNameE, LastNameE)
VALUES 
('User1', 'John', 'Doe'),
('User2', 'Jane', 'Doe'),
('User3', 'Jim', 'Beam'),
('User4', 'Jack', 'Daniels');
