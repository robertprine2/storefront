-- Used to change the column price from INTEGER TO DOUBLE in the products table
ALTER TABLE products MODIFY COLUMN price DOUBLE;
-- Used to delete all entries in the products table
DELETE FROM products;
-- Created a new database called bamazon
CREATE DATABASE bamazon;
-- enter the database to make changes and access information
USE bamazon;
-- Create the products table
CREATE TABLE products (
itemID INTEGER(10),
productName VARCHAR(30),
departmentName VARCHAR(30),
price INTEGER(10),
stockQuantity INTEGER(10)
);
-- Insert different rows into the products table
INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (01, "TV", "Electronics", 500, 7);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (02, "banana", "Food", .50, 50);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (03, "colored pencils", "Crafts", 5, 18);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (04, "floral dress", "Clothing", 30, 13);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (05, "iPhone7", "Electronics", 5000, 3);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (06, "Galaxy s7", "Electronics", 499, 0);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (07, "steak", "Food", 10, 4);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (08, "broccoli", "Food", 1, 970);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (09, "beads", "Crafts", 3, 35);

INSERT INTO products (itemID, productName, departmentName, price, stockQuantity) VALUES (10, "yarn", "Crafts", 5, 29);
-- lets you see everything in the products table
SELECT * FROM products;

CREATE TABLE departments (
departmentID INTEGER(10),
departmentName VARCHAR(30),
overHeadCosts DECIMAL(10, 2),
totalSales DECIMAL(10, 2)
);

INSERT INTO departments (departmentID, departmentName, overHeadCosts, totalSales) VALUES (1, "Crafts", 1000, 2000);

INSERT INTO departments (departmentID, departmentName, overHeadCosts, totalSales) VALUES (2, "Food", 3000, 17000.50);

INSERT INTO departments (departmentID, departmentName, overHeadCosts, totalSales) VALUES (3, "Clothing", 2000, 12000);

INSERT INTO departments (departmentID, departmentName, overHeadCosts, totalSales) VALUES (4, "Electronics", 2500, 20000);

SELECT * FROM departments;