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
itemID INTEGER(11) AUTO_INCREMENT NOT NULL,
productName VARCHAR(30) NOT NULL,
departmentName VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stockQuantity INTEGER(10) NOT NULL,
PRIMARY KEY (itemID)
);
-- Insert different rows into the products table
INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("TV", "Electronics", 500, 7);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("banana", "Food", .50, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("colored pencils", "Crafts", 5, 18);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("floral dress", "Clothing", 30, 13);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("iPhone7", "Electronics", 5000, 3);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("Galaxy s7", "Electronics", 499, 0);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("steak", "Food", 10, 4);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("broccoli", "Food", 1, 970);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("beads", "Crafts", 3, 35);

INSERT INTO products (productName, departmentName, price, stockQuantity) VALUES ("yarn", "Crafts", 5, 29);
-- lets you see everything in the products table
SELECT * FROM products;

CREATE TABLE departments (
departmentID INTEGER(10) AUTO_INCREMENT NOT NULL,
departmentName VARCHAR(30) NOT NULL,
overHeadCosts DECIMAL(10, 2) NOT NULL,
totalSales DECIMAL(10, 2) NOT NULL,
PRIMARY KEY (departmentID)
);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Crafts", 1000, 2000);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Food", 3000, 17000.50);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Clothing", 2000, 12000);

INSERT INTO departments (departmentName, overHeadCosts, totalSales) VALUES ("Electronics", 2500, 20000);

SELECT * FROM departments;