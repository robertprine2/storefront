var inquirer = require('inquirer');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost', // the machine that is running this code
	port: 3306, // mysql port number
	user: 'root', // username, but mysql uses root?
	password: 'Babyfever2', // can pass the password through process.argv[2]
	database: 'bamazon'
});

// List options: View Product Sales by Department, Create New Department

// View Product Sales by Department: show a talbe with all the department SQL data plus totalProfit column (custom alias, if that doesn't work then it can be added to the table hint: joins and grouping)

// Create New Department: allows user to make their own departments for the table.