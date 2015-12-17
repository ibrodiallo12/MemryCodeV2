$(function(){
	// Introduction word
	var w = "Memorize SQL statement now, your keyboard and coding fast!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "SELECT CustomerName,City FROM Customers;";
	k = k + s + "SELECT Column. The SQL statement selects the \"CustomerName\" and \"City\" columns from the \"Customers\" table";
	// N 2
	c = c + s + "SELECT * FROM Customers;";
	k = k + s + "SELECT *. The SQL statement selects all the columns from the \"Customers\" table";
	// N 3
	c = c + s + "SELECT DISTINCT City FROM Customers;";
	k = k + s + "SELECT DISTINCT. The SQL statement selects only the distinct values from the \"City\" columns from the \"Customers\" table";
	// N 4
	c = c + s + "SELECT DISTINCT column_name,column_name\nFROM table_name;";
	k = k + s + "The SQL SELECT DISTINCT Statement. In a table, a column may contain many duplicate values; and sometimes you only want to list the different (distinct) values.";
	// N 5
	c = c + s + "SELECT column_name,column_name\nFROM table_name\nWHERE column_name operator value";
	k = k + s + "The SQL WHERE Clause. The WHERE clause is used to extract only those records that fulfill a specified criterion.";
	// N 6
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Mexico';";
	k = k + s + "WHERE Clause. The SQL statement selects all the customers from the country \"Mexico\", in the \"Customers\" table";
	// N 7
	c = c + s + "SELECT * FROM Customers\nWHERE CustomerID=1;";
	k = k + s + "Text Fields vs. Numeric Fields. SQL requires single quotes around text values (most database systems will also allow double quotes). However, numeric fields should not be enclosed in quotes";
	// N 8
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Germany'\nAND City='Berlin';";
	k = k + s + "AND Operator. The SQL statement selects all customers from the country \"Germany\" AND the city \"Berlin\", in the \"Customers\" table";
	// N 9
	c = c + s + "SELECT * FROM Customers\nWHERE City='Berlin'\nOR City='Paris';";
	k = k + s + "OR Operator. The SQL statement selects all customers from the city \"Berlin\" OR \"Paris\", in the \"Customers\" table";
	// N 10
	c = c + s + "SELECT * FROM Customers\nWHERE Country='Germany'\nAND (City='Berlin' OR City='Paris');";
	k = k + s + "Combining AND & OR. You can also combine AND and OR (use parenthesis to form complex expressions). The SQL statement selects all customers from the country \"Germany\" AND the city must be equal to \"Berlin\" OR \"Paris\", in the \"Customers\" table";
	// N 11
	c = c + s + "SELECT column_name,column_name\nFROM table_name\nORDER BY column_name,column_name ASC|DESC;";
	k = k + s + "The SQL ORDER BY Keyword. The ORDER BY keyword is used to sort the result-set by one or more columns. The ORDER BY keyword sorts the records in ascending order by default. To sort the records in a descending order, you can use the DESC keyword.";
	// N 12
	c = c + s + "SELECT * FROM Customers\nORDER BY Country;";
	k = k + s + "ORDER BY. The SQL statement selects all customers from the \"Customers\" table, sorted by the \"Country\" column";
	// N 13
	c = c + s + "SELECT * FROM Customers\nORDER BY Country DESC;";
	k = k + s + "ORDER BY DESC. The SQL statement selects all customers from the \"Customers\" table, sorted DESCENDING by the \"Country\" column";
	// N 14
	c = c + s + "SELECT * FROM Customers\nORDER BY Country,CustomerName;";
	k = k + s + "ORDER BY Several Columns. The SQL statement selects all customers from the \"Customers\" table, sorted by the \"Country\" and the \"CustomerName\" column";
	// N 15
	c = c + s + "SELECT * FROM Customers\nORDER BY Country ASC, CustomerName DESC;";
	k = k + s + "ORDER BY Several Columns. The SQL statement selects all customers from the \"Customers\" table, sorted ascending by the \"Country\" and descending by the \"CustomerName\" column";
	// N 16
	c = c + s + "INSERT INTO Customers (CustomerName, ContactName, Address, Country)\nVALUES ('Cardinal','Tom Erichsen','Skagen 21','Norway');";
	k = k + s + "INSERT INTO. Assume we wish to insert a new row in the \"Customers\" table";
	// N 17
	c = c + s + "INSERT INTO Customers (CustomerName, City, Country)\nVALUES ('Cardinal', 'Stavanger', 'Norway');";
	k = k + s + "Insert Data Only in Specified Columns. It is also possible to only insert data in specific columns. The SQL statement will insert a new row, but only insert data in the \"CustomerName\", \"City\", and \"Country\" columns (and the CustomerID field will of course also be updated automatically)";
	// N 18
	c = c + s + "UPDATE Customers\nSET ContactName='Alfred', City='Hamburg'\nWHERE CustomerName='Alfred';";
	k = k + s + "SQL UPDATE. Assume we wish to update the customer \"Alfreds Futterkiste\" with a new contact person and city.";
	// N 19
	c = c + s + "DELETE FROM Customers\nWHERE CustomerName='Alfred' AND ContactName='Maria Anders';";
	k = k + s + "SQL DELETE. Assume we wish to delete the customer \"Alfred\" from the \"Customers\" table.";
	// N 20
	c = c + s + "DELETE FROM table_name;";
	k = k + s + "Delete All Data. It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact";
	// N 21
	c = c + s + "DELETE * FROM table_name;";
	k = k + s + "Delete All Data. It is possible to delete all rows in a table without deleting the table. This means that the table structure, attributes, and indexes will be intact";
	// N 22
	c = c + s + "txtUserId = getRequestString(\"UserId\");\ntxtSQL = \"SELECT * FROM Users WHERE UserId = \" + txtUserId;";
	k = k + s + "When SQL is used to display data on a web page, it is common to let web users input their own search values. Since SQL statements are text only, it is easy, with a little piece of computer code, to dynamically change SQL statements to provide the user with selected data";
	// N 23
	c = c + s + "SELECT * FROM Users WHERE UserId = 105 or 1=1";
	k = k + s + "SQL Injection Based on 1=1 is Always True. Look at the example above, one more time. Let's say that the original purpose of the code was to create an SQL statement to select a user with a given user id. If there is nothing to prevent a user from entering \"wrong\" input, the user can enter some \"smart\" input";
	// N 24
	c = c + s + "SELECT UserId, Name, Password FROM Users WHERE UserId = 105 or 1=1";
	k = k + s + "The SQL is valid. It will return all rows from the table Users, since WHERE 1=1 is always true. this example seem dangerous? What if the Users table contains names and passwords?";
	// N 25
	c = c + s + "SELECT * FROM Users WHERE Name =\"\" or \"\"=\"\" AND Pass =\"\" or \"\"=\"\"";
	k = k + s + "The result SQL is valid. It will return all rows from the table Users, since WHERE \"\"=\"\" is always true.";
	// N 26
	c = c + s + "SELECT * FROM Users; DROP TABLE Suppliers";
	k = k + s + "SQL Injection Based on Batched SQL Statements. Most databases support batched SQL statement, separated by semicolon. The SQL above will return all rows in the Users table, and then delete the table called Suppliers.";
	// N 27
	c = c + s + "SELECT *\nFROM Persons\nLIMIT 5;";
	k = k + s + "The SQL SELECT TOP clause is used to specify the number of records to return. The SELECT TOP clause can be very useful on large tables with thousands of records. Returning a large number of records can impact on performance.";
	// N 28
	c = c + s + "SELECT *\nFROM Persons\nWHERE ROWNUM <= 5;";
	k = k + s + "The SQL SELECT TOP clause is used to specify the number of records to return. The SELECT TOP clause can be very useful on large tables with thousands of records. Returning a large number of records can impact on performance.";
	// N 29
	c = c + s + "SELECT TOP 2 * FROM Customers;";
	k = k + s + "SQL SELECT TOP. The SQL statement selects the two first records from the \"Customers\" table";
	// N 30
	c = c + s + "SELECT TOP 50 PERCENT * FROM Customers;";
	k = k + s + "SQL SELECT TOP PERCENT. The SQL statement selects the first 50% of the records from the \"Customers\" table";
	// N 31
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE 's%';";
	k = k + s + "SQL LIKE Operator. The SQL statement selects all customers with a City starting with the letter \"s\". The \"%\" sign is used to define wildcards (missing letters) both before and after the pattern. ";
	// N 32
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '%s';";
	k = k + s + "The SQL statement selects all customers with a City ending with the letter \"s\"";
	// N 33
	c = c + s + "SELECT * FROM Customers\nWHERE Country LIKE '%land%';";
	k = k + s + "The SQL statement selects all customers with a Country containing the pattern \"land\"";
	// N 34
	c = c + s + "SELECT * FROM Customers\nWHERE Country NOT LIKE '%land%';";
	k = k + s + "The SQL statement selects all customers with Country NOT containing the pattern \"land\"";
	// N 35
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE 'ber%';";
	k = k + s + "Using the SQL % Wildcard. The SQL statement selects all customers with a City starting with \"ber\"";
	// N 36
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '%es%';";
	k = k + s + "Using the SQL % Wildcard. The SQL statement selects all customers with a City containing the pattern \"es\"";
	// N 37
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '_erlin';";
	k = k + s + "Using the SQL _ Wildcard. The SQL statement selects all customers with a City starting with any character, followed by \"erlin\"";
	// N 38
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE 'L_n_on';";
	k = k + s + "The SQL statement selects all customers with a City starting with \"L\", followed by any character, followed by \"n\", followed by any character, followed by \"on\"";
	// N 39
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '[bsp]%';";
	k = k + s + "Using the SQL [charlist] Wildcard. The SQL statement selects all customers with a City starting with \"b\", \"s\", or \"p\"";
	// N 40
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '[a-c]%'";
	k = k + s + "Using the SQL [charlist] Wildcard. The SQL statement selects all customers with a City starting with \"a\", \"b\", or \"c\"";
	// N 41
	c = c + s + "SELECT * FROM Customers\nWHERE City NOT LIKE '[bsp]%';";
	k = k + s + "Using the SQL [charlist] Wildcard. The SQL statement selects all customers with a City NOT starting with \"b\", \"s\", or \"p\"";
	// N 42
	c = c + s + "SELECT * FROM Customers\nWHERE City LIKE '[!bsp]%';";
	k = k + s + "Using the SQL [charlist] Wildcard. The SQL statement selects all customers with a City NOT starting with \"b\", \"s\", or \"p\"";
	// N 43
	c = c + s + "SELECT * FROM Customers\nWHERE City IN ('Paris','London');";
	k = k + s + "IN Operator. The SQL statement selects all customers with a City of \"Paris\" or \"London\"";
	// N 44
	c = c + s + "SELECT * FROM Products\nWHERE Price BETWEEN 10 AND 20;";
	k = k + s + "BETWEEN Operator. The SQL statement selects all products with a price BETWEEN 10 and 20";
	// N 45
	c = c + s + "SELECT * FROM Products\nWHERE Price NOT BETWEEN 10 AND 20;";
	k = k + s + "NOT BETWEEN Operator. To display the products outside the range of this example, use NOT BETWEEN";
	// N 46
	c = c + s + "SELECT * FROM Products\nWHERE (Price BETWEEN 10 AND 20)\nAND NOT CategoryID IN (1,2,3);";
	k = k + s + "BETWEEN Operator with IN. The SQL statement selects all products with a price BETWEEN 10 and 20, but products with a CategoryID of 1,2, or 3 should not be displayed";
	// N 47
	c = c + s + "SELECT * FROM Products\nWHERE ProductName BETWEEN 'C' AND 'M';";
	k = k + s + "BETWEEN Operator with Text Value. The SQL statement selects all products with a ProductName beginning with any of the letter BETWEEN 'C' and 'M'";
	// N 48
	c = c + s + "SELECT * FROM Products\nWHERE ProductName NOT BETWEEN 'C' AND 'M';";
	k = k + s + "NOT BETWEEN Operator with Text Value. The SQL statement selects all products with a ProductName beginning with any of the letter NOT BETWEEN 'C' and 'M'";
	// N 49
	c = c + s + "SELECT * FROM Orders\nWHERE OrderDate BETWEEN #07/04/1996# AND #07/09/1996#;";
	k = k + s + "BETWEEN Operator with Date Value. The SQL statement selects all orders with an OrderDate BETWEEN '04-July-1996' and '09-July-1996'";
	// N 50
	c = c + s + "SELECT CustomerName AS Customer, ContactName AS [Contact Person]\nFROM Customers;";
	k = k + s + "Alias Example for Table Columns. The SQL statement specifies two aliases, one for the CustomerName column and one for the ContactName column. It requires double quotation marks or square brackets if the column name contains spaces";
	// N 51
	c = c + s + "SELECT CustomerName,\nAddress+', '+City+', '+PostalCode+', '+Country AS Address\nFROM Customers;";
	k = k + s + "In the SQL statement we combine four columns (Address, City, PostalCode, and Country) and create an alias named \"Address\"";
	// N 52
	c = c + s + "SELECT o.OrderID, o.OrderDate, c.CustomerName\nFROM Customers AS c, Orders AS o\nWHERE c.CustomerName=\"Around the Horn\"\nAND c.CustomerID=o.CustomerID;";
	k = k + s + "Alias Example for Tables. The SQL statement selects all the orders from the customer with CustomerID=4 (Around the Horn). We use the \"Customers\" and \"Orders\" tables, and give them the table aliases of \"c\" and \"o\" respectively (Here we have used aliases to make the SQL shorter)";
	// N 53
	c = c + s + "SELECT Orders.OrderID, Orders.OrderDate, Customers.CustomerName\nFROM Customers, Orders\nWHERE Customers.CustomerName=\"Around the Horn\"\nAND Customers.CustomerID=Orders.CustomerID;";
	k = k + s + "The SQL statement without aliases. The SQL statement selects all the orders from the customer with CustomerID=4 (Around the Horn).";
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("SQL");
});
