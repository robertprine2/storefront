var inquirer = require('inquirer');

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost', // the machine that is running this code
	port: 3306, // mysql port number
	user: 'root', // username, but mysql uses root?
	password: 'Babyfever2', // can pass the password through process.argv[2]
	database: 'bamazon'
});

// connect to bamazon database
connection.connect(function(err) {

	if (err) throw err;

	console.log('connected as id ' + connection.threadId);
});

// display all of the items that are for sale: IDs, names, and price

connection.query('SELECT * FROM products', function(err, data) {
	if (err) throw err;
	console.log(data);

	// prompt user to ask them the ID of the product they would like to buy

	inquirer.prompt([
		{
		type: "input",
		message: "What is the itemID of the product you would like to buy?",
		name: "id"
		}, {

			// prompt the user to ask them how many of the product they would like to buy

			type: "input",
			message: "How many would you like to purchase?",
			name: "amount"

		}]).then(function (answers) {

			//Check that the store has enough to sell the user, if not respond to user "Insufficient quanitity" and prevent the order from going through
			var idOfItem = answers.id

			connection.query('SELECT * FROM products WHERE ?', {itemID: idOfItem}, function(err, data) {
				if (err) throw err;
				
				var item = data[0];

				console.log(answers.amount);
				console.log(item);

				if (answers.amount < item.stockQuantity) {

					// If the store does have enough show the user the total cost of their purchase, update SQL to reflect the remaining quantity

					connection.query('UPDATE products SET stockQuantity = ' + answers.amount + ' WHERE stockQuantity = ' + (item.stockQuantity - answers.amount), function(err, data1) {
						if (err) throw err;
						
						console.log(data1);

					}); // end of query answers

				} // end of if amount is purchaseable

				else {

					console.log("Insufficient quantity.");

				} // end of else you can't buy this
			}); // end of query answers
	}); // end of prompt user
}); // end of connection function





// put total cost into totalSales column for the related department

