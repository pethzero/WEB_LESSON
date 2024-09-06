-- Drop existing tables if they exist
IF OBJECT_ID('Products', 'U') IS NOT NULL DROP TABLE Products;
IF OBJECT_ID('Customers', 'U') IS NOT NULL DROP TABLE Customers;
IF OBJECT_ID('PurchaseOrders', 'U') IS NOT NULL DROP TABLE PurchaseOrders;
IF OBJECT_ID('OrderItems', 'U') IS NOT NULL DROP TABLE OrderItems;
IF OBJECT_ID('Payments', 'U') IS NOT NULL DROP TABLE Payments;

-- Create tables
CREATE TABLE Products (
    product_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    stock_quantity INT,
    category VARCHAR(50),
    supplier VARCHAR(100)
);

CREATE TABLE Customers (
    customer_id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    contact_number VARCHAR(20),
    email VARCHAR(100),
    address TEXT,
    registration_date DATE
);

CREATE TABLE PurchaseOrders (
    order_id VARCHAR(50) PRIMARY KEY,
    customer_id VARCHAR(50),
    order_date DATE,
    delivery_date DATE,
    total_amount DECIMAL(10, 2),
    status VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE OrderItems (
    item_id INT IDENTITY(1,1) PRIMARY KEY,
    order_id VARCHAR(50),
    product_id VARCHAR(50),
    quantity INT,
    unit_price DECIMAL(10, 2),
    total_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES PurchaseOrders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Payments (
    payment_id VARCHAR(50) PRIMARY KEY,
    order_id VARCHAR(50),
    payment_date DATE,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    FOREIGN KEY (order_id) REFERENCES PurchaseOrders(order_id)
);

-- Insert data
INSERT INTO Products (product_id, name, description, price, stock_quantity, category, supplier)
VALUES 
('P001', 'Laptop', '15-inch laptop with 8GB RAM', 1200.00, 30, 'Electronics', 'Tech Supplier Inc.'),
('P002', 'Smartphone', 'Latest smartphone with 128GB storage', 800.00, 50, 'Electronics', 'Gadget Co.');

INSERT INTO Customers (customer_id, name, contact_number, email, address, registration_date)
VALUES 
('C001', 'Alice Johnson', '+1-555-6789', 'alice.johnson@example.com', '789 Maple Street, Anytown, TX', '2023-01-15'),
('C002', 'Bob Smith', '+1-555-2345', 'bob.smith@example.com', '456 Oak Avenue, Big City, CA', '2023-03-22');

INSERT INTO PurchaseOrders (order_id, customer_id, order_date, delivery_date, total_amount, status)
VALUES 
('O001', 'C001', '2024-09-01', '2024-09-05', 2000.00, 'Processing');

INSERT INTO OrderItems (order_id, product_id, quantity, unit_price, total_price)
VALUES 
('O001', 'P001', 1, 1200.00, 1200.00),
('O001', 'P002', 1, 800.00, 800.00);

INSERT INTO Payments (payment_id, order_id, payment_date, amount, payment_method)
VALUES 
('P001', 'O001', '2024-09-01', 2000.00, 'Credit Card');
