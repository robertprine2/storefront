var inquirer = require('inquirer');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost', // the machine that is running this code
	port: 3306, // mysql port number
	user: 'root', // username, but mysql uses root?
	password: 'Babyfever2', // can pass the password through process.argv[2]
	database: 'bamazon'
});

// List options: View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product

// switch for different options

// View Products for Sale: List products available for sale: the titemsIDs, names, prices, and quantities

// View Low Inventory: list all items for which the quantity available in stores is less than 5

// Add to Inventory: add more of any item currently in the store

// Add New Product: add a completely new product to the store

