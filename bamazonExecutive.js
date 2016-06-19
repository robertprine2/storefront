var Table = require('cli-table');

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

inquirer.prompt({
	name: "choice",
	type: "list",
	message: "Would you like to:",
	choices: ["View Product Sales of Departments", "Create New Department"]
}).then(function(answer) {

	// switch for different options

	switch(answer.choice) {
		case 'View Product Sales of Departments':
			departmentSales();
			break;
		case 'Create New Department':
			newDepartment();
			break;
	} // end of switch

}); // end of inquirer prompt function

// View Product Sales by Department: show a table with all the department SQL data plus totalProfit column (custom alias, if that doesn't work then it can be added to the table hint: joins and grouping)

function departmentSales() {

	connection.query('SELECT * FROM departments', function(err, data) {
		if (err) throw err;

		console.log(data);

		var table = new Table({
			head: ['Department ID', 'Department Name', 'Overhead Costs', 'Total Sales', 'Total Profit'],
				colWidths: [20, 20, 20, 20, 20]
		}); // end newTable

		

		for (i = 0; i < data.length; i++) {

			table.push(
				[data[i].departmentID, data[i].departmentName, data[i].overHeadCosts, data[i].totalSales, (data[i].totalSales - data[i].overHeadCosts)]
			); // end table.push

		} // end of for loop

		console.log(table.toString());

	}); // end of query select all from departments

} // end of departmentSales function

// Create New Department: allows user to make their own departments for the table.

function newDepartment() {



} // end of newDepartment function