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

inquirer.prompt({
	name: "choice",
	type: "list",
	message: "Would you like to:",
	choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add a New Product"]
}).then(function(answer) {

	// switch for different options

	switch(action) {
		case 'View Products for Sale': 
			productsForSale();
			break;
		case 'View Low Inventory':
			lowInventory();
			break;
		case 'Add to Inventory':
			addInventory();
			break;
		case 'Add a New Product':
			newProduct();
			break;
	} // end of switch

}); // end of inquirer prompt function

// View Products for Sale: List products available for sale: the titemsIDs, names, prices, and quantities

function productsForSale() {



}; // end of productsForSale function

// View Low Inventory: list all items for which the quantity available in stores is less than 5

function lowInventory() {



}; // end of lowInventory function

// Add to Inventory: add more of any item currently in the store

function addInventory() {



}; // end of addInventory function

// Add New Product: add a completely new product to the store

function newProduct() {



}; // end of newProduct function