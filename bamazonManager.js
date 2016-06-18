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

	switch(answer.choice) {
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

	connection.query('SELECT * FROM products', function(err, data) {
		if (err) throw err;

		console.log('Products for sale: '); 

		console.log(data);

	}); // end of query select * from products

}; // end of productsForSale function

// View Low Inventory: list all items for which the quantity available in stores is less than 5

function lowInventory() {

	connection.query('SELECT * FROM products', function(err, data) {
		if (err) throw err;

		for (i = 0; i < data.length; i++) {

			if (data[i].stockQuantity < 5) {

				// log the number of the low quantity item left

				console.log("There is/are only " + data[i].stockQuantity + " " + data[i].productName + "(s) left!");

			} // end if quantity < 5

			else {

				// this wouldn't be viable on large inventories, but it shows that it loops through the whole inventory

				console.log("There is/are plenty of " + data[i].productName + "(s) left!");

			} // end of else quantity < 5

		} // end of for loop through data

	}); // end of query select * from products

}; // end of lowInventory function

// Add to Inventory: add more of any item currently in the store

function addInventory() {

	inquirer.prompt([
		{
		type: "input",
		message: "What is the itemID of the product you would like to add inventory to?",
		name: "id"
	}, {
		type: "input",
		message: "How many more of the product would you like to add to inventory?",
		name: "amount"
	}]).then(function(answers) {

		var idOfItem = answers.id;
		var increaseInventory = parseInt(answers.amount);


		connection.query('SELECT * FROM products WHERE ?', {
			itemID: idOfItem}, function(err, data) {
				if (err) throw err;

				var item = data[0];

				var newInventoryAmount = increaseInventory + item.stockQuantity;

				connection.query('UPDATE products SET ? WHERE ?', [{
					stockQuantity: newInventoryAmount
					}, {
					itemID: idOfItem
				}], function(err, data) {

					console.log('There are now ' + newInventoryAmount + ' ' + item.productName + '(s) in inventory.');

				}); // end of query update products

		}); // end of query SELECT FROM Products

	}); // end of inquirer prompt how many more?

}; // end of addInventory function

// Add New Product: add a completely new product to the store

function newProduct() {



}; // end of newProduct function