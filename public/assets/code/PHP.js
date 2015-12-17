$(function(){
	//INTRDUCTION WORD
	var w = "<? Memorize PHP code, being fast and Impose your Dynamic Website ?>";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "<?php echo \"Hello world !\"; ?>";
	k = "A simple hello world in php";
	// N 2
	c = c + s + "<?php $my_variable = 5; ?>";
	k = k + s + "Create a simple variable and sign it value 5 in php";
	// N 3
	c = c + s + "<?php\n// PHP code goes here\n?>";
	k = k + s + "Basic PHP Syntax. A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>:";
	// N 4
	c = c + s + "<!DOCTYPE html>\n<html>\n<body>\n<h1>My first PHP page</h1>\n\n<?php\n\techo \"Hello World!\";\n?>\n\n</body>\n</html>";
	k = k + s + "A PHP file normally contains HTML tags, and some PHP scripting code. Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function \"echo\" to output the text \"Hello World!\" on a web page";
	// N 5
	c = c + s + "<?php\n// This is a single-line comment\n\n# This is also a single-line comment\n\n/*\nThis is a multiple-lines comment block\nthat spans over multiple\nlines\n*/\n\n// You can also use comments to leave out parts of a code line\n$x = 5 /* + 15 */ + 5;\necho $x;\n?>";
	k = k + s + "Comments in PHP. A comment in PHP code is a line that is not read/executed as part of the program. Its only purpose is to be read by someone who is looking at the code.";
	// N 6
	c = c + s + "<?php\n\tECHO \"Hello World!<br>\";\n\techo \"Hello World!<br>\";\n\tEcHo \"Hello World!<br>\";\n?>";
	k = k + s + "PHP Case Sensitivity. In PHP, all keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive. In the example below, all three echo statements below are legal (and equal)";
	// N 7
	c = c + s + "<?php\n\t$color = \"red\";\n\techo \"My car is \" . $color . \"<br>\";\n\techo \"My house is \" . $COLOR . \"<br>\";\n\techo \"My boat is \" . $coLOR . \"<br>\";\n?>";
	k = k + s + "In the example below, only the first statement will display the value of the $color variable (this is because $color, $COLOR, and $coLOR are treated as three different variables)";
	// N 8
	c = c + s + "<?php\n\t$txt = \"Hello world!\";\n\t$x = 5;\n\t$y = 10.5;\n?>";
	k = k + s + "Creating (Declaring) PHP Variables. In PHP, a variable starts with the $ sign, followed by the name of the variable:";
	// N 9
	c = c + s + "<?php\n\t$txt = \"PHP\";\n\techo \"I love $txt!\";\n?>";
	k = k + s + "Output Variables. The PHP echo statement is often used to output data to the screen. The example will show how to output text and a variable";
	// N 10
	c = c + s + "<?php\n\t$txt = \"PHP\";\n\techo \"I love \" . $txt . \"!\";\n?>";
	k = k + s + "Output Variables. The PHP echo statement is often used to output data to the screen. The example will show how to output text and a variable";
	// N 11
	c = c + s + "<?php\n\t$x = 5;\n\t$y = 4;\n\techo $x + $y;\n?>";
	k = k + s + "The example will output the sum of two variables";
	// N 12
	c = c + s + "<?php\n$x = 5; // global scope\nfunction myTest() {\n\t// using x inside this function will generate an error\n\techo \"<p>Variable x inside function is: $x</p>\";\n}\nmyTest();\necho \"<p>Variable x outside function is: $x</p>\";\n?>";
	k = k + s + "Global and Local Scope. A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function";
	// N 13
	c = c + s + "<?php\nfunction myTest() {\n\t$x = 5; // local scope\n\techo \"<p>Variable x inside function is: $x</p>\";\n}\nmyTest();\n\n// using x outside the function will generate an error\necho \"<p>Variable x outside function is: $x</p>\";\n?>";
	k = k + s + "A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function";
	// N 14
	c = c + s + "<?php\n$x = 5;\n$y = 10;\n\nfunction myTest() {\n\tglobal $x, $y;\n\t$y = $x + $y;\n}\nmyTest();\necho $y; // outputs 15\n?>";
	k = k + s + "PHP The global Keyword. The global keyword is used to access a global variable from within a function. To do this, use the global keyword before the variables (inside the function)";
	// N 15
	c = c + s + "<?php\n$x = 5;\n$y = 10;\nfunction myTest() {\n\t$GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];\n}\nmyTest();\necho $y; // outputs 15\n?>";
	k = k + s + "PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.";
	// N 16
	c = c + s + "<?php\nfunction myTest() {\n\tstatic $x = 0;\n\techo $x;\n\t$x++;\n}\n\nmyTest();\nmyTest();\nmyTest();\n?>";
	k = k + s + "PHP The static Keyword. Normally, when a function is completed/executed, all of its variables are deleted. However, sometimes we want a local variable NOT to be deleted. We need it for a further job.";
	// N 17
	c = c + s + "<?php\necho \"<h2>PHP is Fun!</h2>\";\necho \"Hello world!<br>\";\necho \"I'm about to learn PHP!<br>\";\necho \"This \", \"string \", \"in \", \"PHP \";\n?>";
	k = k + s + "The PHP echo Statement. The echo statement can be used with or without parentheses: echo or echo(). This example shows how to output text with the echo command (notice that the text can contain HTML markup):";
	// N 18
	c = c + s + "<?php\n$txt1 = \"Learn PHP\";\n$txt2 = \"memrycode.com\";\n$x = 5;\n$y = 4;\n\necho \"<h2>$txt1</h2>\";\necho \"Study PHP at $txt2<br>\";\necho $x + $y;\n?>";
	k = k + s + "Display Variables. This example shows how to output text and variables with the echo statement";
	// N 19
	c = c + s + "<?php\nprint \"<h2>PHP is Fun!</h2>\";\nprint \"Hello world!<br>\";\nprint \"I'm about to learn PHP!\";\n?>";
	k = k + s + "Display Text. This example shows how to output text with the print command (notice that the text can contain HTML markup):";
	// N 20
	c = c + s + "<?php\n$txt1 = \"Learn PHP\";\n$txt2 = \"memrycode.com\";\n$x = 5;\n$y = 4;\n\nprint \"<h2>$txt1</h2>\";\nprint \"Study PHP at $txt2<br>\";\nprint $x + $y;\n?>";
	k = k + s + "Display Variables. This example shows how to output text and variables with the print statement";
	// N 21
	c = c + s + "<?php\n$x = \"Hello world!\";\n$y = 'Hello world!';\n\necho $x;\necho \"<br>\";\necho $y;\n?>";
	k = k + s + "PHP String. A string is a sequence of characters, like \"Hello world!\". A string can be any text inside quotes. You can use single or double quotes:";
	// N 22
	c = c + s + "<?php\n$x = 5985;\nvar_dump($x);\n?>";
	k = k + s + "PHP Integer. An integer is a whole number (without decimals).  It is a number between -2,147,483,648 and +2,147,483,647.";
	// N 23
	c = c + s + "<?php\n$x = 10.365;\nvar_dump($x);\n?>";
	k = k + s + "PHP Float. A float (floating point number) is a number with a decimal point or a number in exponential form. In this example $x is a float. The PHP var_dump() function returns the data type and value:";
	// N 24
	c = c + s + "$x = true;\n$y = false;";
	k = k + s + "PHP Boolean. A Boolean represents two possible states: TRUE or FALSE.";
	// N 25
	c = c + s + "<?php\n$cars = array(\"Volvo\",\"BMW\",\"Toyota\");\nvar_dump($cars);\n?>";
	k = k + s + "PHP Array. An array stores multiple values in one single variable. In this example $cars is an array. The PHP var_dump() function returns the data type and value";
	// N 26
	c = c + s + "<?php\nclass Car {\n\tfunction Car() {\n\t\t$this->model = \"VW\";\n\t}\n}\n\n// create an object\n$herbie = new Car();\n// show object properties\necho $herbie->model;\n?>";
	k = k + s + "PHP Object. An object is a data type which stores data and information on how to process that data. In PHP, an object must be explicitly declared. First we must declare a class of object. For this, we use the class keyword. A class is a structure that can contain properties and methods:";
	// N 27
	c = c + s + "<?php\n$x = \"Hello world!\";\n$x = null;\nvar_dump($x);\n?>";
	k = k + s + "PHP NULL Value. Null is a special data type which can have only one value: NULL. A variable of data type NULL is a variable that has no value assigned to it.";
	// N 28
	c = c + s + "<?php\necho strlen(\"Hello world!\"); //outputs 12\n?>";
	k = k + s + "Get The Length of a String. The PHP strlen() function returns the length of a string (number of characters). This below returns the length of the string \"Hello world!\"";
	// N 29
	c = c + s + "<?php\necho str_word_count(\"Hello world!\"); //outputs 2\n?>";
	k = k + s + "Count The Number of Words in a String. The PHP str_word_count() function counts the number of words in a string";
	// N 30
	c = c + s + "<?php\necho strrev(\"Hello world!\"); //outputs !dlrow olleH\n?>";
	k = k + s + "Reverse a String. The PHP strrev() function reverses a string";
	// N 31
	c = c + s + "<?php\necho strpos(\"Hello world!\", \"world\"); //outputs 6\n?>";
	k = k + s + "Search For a Specific Text Within a String. The PHP strpos() function searches for a specific text within a string. If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE. This example searches for the text \"world\" in the string \"Hello world!\"";
	// N 32
	c = c + s + "<?php\necho str_replace(\"world\", \"Dolly\", \"Hello world!\");\n// outputs Hello Dolly!\n?>";
	k = k + s + "Replace Text Within a String. The PHP str_replace() function replaces some characters with some other characters in a string. This example replaces the text \"world\" with \"Dolly\"";
	// N 33
	c = c + s + "<?php\ndefine(\"GREETING\", \"Welcome to memrycode.com!\");\necho GREETING;\n?>";
	k = k + s + "Create a PHP Constant. To create a constant, use the define() function.";
	// N 34
	c = c + s + "<?php\ndefine(\"GREETING\", \"Welcome to memrycode.com!\", true);\necho greeting;\n?>";
	k = k + s + "This example creates a constant with a case-insensitive name";
	// N 35
	c = c + s + "<?php\ndefine(\"GREETING\", \"Welcome to memrycode.com!\");\nfunction myTest() {\n\techo GREETING;\n}\n\nmyTest();\n?>";
	k = k + s + "Constants are Global. Constants are automatically global and can be used across the entire script.this example uses a constant inside a function, even if it is defined outside the function:";
	// N 36
	c = c + s + "<?php\n$t = date(\"H\");\n\nif ($t < \"20\") {\n\techo \"Have a good day!\";\n}";
	k = k + s + "This example will output \"Have a good day!\" if the current time (HOUR) is less than 20";
	// N 37
	c = c + s + "<?php\n$t = date(\"H\");\nif ($t < \"20\") {\n\techo \"Have a good day!\";\n} else {\n\techo \"Have a good night!\";\n}\n?>";
	k = k + s + "PHP - The if...else Statement. Use the if....else statement to execute some code if a condition is true and another code if the condition is false.";
	// N 38
	c = c + s + "<?php\n$t = date(\"H\");\nif ($t < \"10\") {\n\techo \"Have a good morning!\";\n} elseif ($t < \"20\") {\n\techo \"Have a good day!\";\n} else {\n\techo \"Have a good night!\";\n}\n?>";
	k = k + s + "PHP - The if...elseif....else Statement. Use the if....elseif...else statement to specify a new condition to test, if the first condition is false.";
	// N 39
	c = c + s + "<?php\n$favcolor = \"red\";\nswitch ($favcolor) {\n\tcase \"red\":\n\t\techo \"Your favorite color is red!\";\n\t\tbreak;\n\tcase \"blue\":\n\t\techo \"Your favorite color is blue!\";\n\t\tbreak;\n\t\tdefault:\n\techo \"Your favorite color is neither red or blue!\";\n}\n?>";
	k = k + s + "The PHP switch Statement. Use the switch statement to select one of many blocks of code to be executed.";
	// N 40
	c = c + s + "<?php\n$x = 1;\n\nwhile($x <= 5) {\n\techo \"The number is: $x <br>\";\n\t$x++;\n}\n?>";
	k = k + s + "The while loop executes a block of code as long as the specified condition is true.";
	// N 41
	c = c + s + "<?php\n$x = 1;\n\ndo {\n\techo \"The number is: $x <br>\";\n\t$x++;\n} while ($x <= 5);\n?>";
	k = k + s + "The do...while loop will always execute the block of code once, it will then check the condition, and repeat the loop while the specified condition is true.";
	// N 42
	c = c + s + "<?php\n$x = 6;\n\ndo {\n\techo \"The number is: $x <br>\";\n\t$x++;\n} while ($x <= 5);\n?>";
	k = k + s + "This example sets the $x variable to 6, then it runs the loop, and then the condition is checked";
	// N 43
	c = c + s + "<?php\nfor ($x = 0; $x <= 10; $x++) {\n\techo \"The number is: $x <br>\";\n}\n?>";
	k = k + s + "The for loop is used when you know in advance how many times the script should run.";
	// N 44
	c = c + s + "<?php\n$colors = array(\"red\", \"green\", \"blue\", \"yellow\");\n\nforeach ($colors as $value) {\n\techo \"$value <br>\";\n}\n?>";
	k = k + s + "The foreach loop works only on arrays, and is used to loop through each key/value pair in an array.";
	// N 45
	c = c + s + "<?php\nfunction writeMsg() {\n\techo \"Hello world!\";\n}\nwriteMsg(); // call the function\n?>";
	k = k + s + "Create a User Defined Function in PHP. A user defined function declaration starts with the word \"function\"";
	// N 46
	c = c + s + "<?php\nfunction familyName($fname) {\n\techo \"$fname Gates<br>\";\n}\n\nfamilyName(\"Jani\");\nfamilyName(\"Hege\");\nfamilyName(\"Stale\");\n?>";
	k = k + s + "PHP Function Arguments. Information can be passed to functions through arguments. An argument is just like a variable. Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just seperate them with a comma.";
	// N 47
	c = c + s + "<?php\nfunction familyName($fname, $year) {\n\techo \"$fname Gates. Born in $year <br>\";\n}\n\nfamilyName(\"Hege\", \"1975\");\nfamilyName(\"Stale\", \"1978\");\nfamilyName(\"Bill\", \"1965\");\n?>";
	k = k + s + "This example has a function with two arguments ($fname and $year)";
	// N 48
	c = c + s + "<?php\nfunction setHeight($minheight = 50) {\n\techo \"The height is : $minheight <br>\";\n}\n\nsetHeight(350);\nsetHeight(); // will use the default value of 50\nsetHeight(135);\nsetHeight(80);\n?>";
	k = k + s + "PHP Default Argument Value. This example shows how to use a default parameter. If we call the function setHeight() without arguments it takes the default value as argument";
	// N 49
	c = c + s + "<?php\nfunction sum($x, $y) {\n\t$z = $x + $y;\n\treturn $z;\n}\n\necho \"5 + 10 = \" . sum(5, 10) . \"<br>\";\necho \"7 + 13 = \" . sum(7, 13) . \"<br>\";\necho \"2 + 4 = \" . sum(2, 4);\n?>";
	k = k + s + "PHP Functions - Returning values. To let a function return a value, use the return statement";
	// N 50
	c = c + s + "<?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho \"I like \".$cars[0].\",\".$cars[1].\" and \".$cars[2].\".\";\n?>";
	k = k + s + "An array stores multiple values in one single variable";
	// N 51
	c = c + s + "<?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\n?>";
	k = k + s + "PHP Indexed Arrays. There are two ways to create indexed arrays. The index can be assigned automatically (index always starts at 0)";
	// N 52
	c = c + s + "<?php\n$cars[0] = \"Volvo\";\n$cars[1] = \"BMW\";\n$cars[2] = \"Toyota\";\n?>";
	k = k + s + "PHP Indexed Arrays. There are two ways to create indexed arrays. The index can be assigned automatically (index always starts at 0)";
	// N 53
	c = c + s + "<?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\necho count($cars);\n?>";
	k = k + s + "Get The Length of an Array - The count() Function. The count() function is used to return the length (the number of elements) of an array";
	// N 54
	c = c + s + "<?php\n$cars = array(\"Volvo\", \"BMW\", \"Toyota\");\n$arrlength = count($cars);\n\nfor($x = 0; $x < $arrlength; $x++) {\n\techo $cars[$x];\n\techo \"<br>\";\n}\n?>";
	k = k + s + "Loop Through an Indexed Array. To loop through and print all the values of an indexed array, you could use a for loop";
	// N 55
	c = c + s + "<?php\n$age = array(\"Peter\"=> \"35\", \"Ben\" => \"37\", \"Joe\" => \"43\");\n?>";
	k = k + s + "PHP Associative Arrays. Associative arrays are arrays that use named keys that you assign to them.";
	// N 56
	c = c + s + "<?php\n$age['Peter'] = \"35\";\n$age['Ben'] = \"37\";\n$age['Joe'] = \"43\";\n?>";
	k = k + s + "PHP Associative Arrays. Associative arrays are arrays that use named keys that you assign to them.";
	// N 57
	c = c + s + "<?php\n$age = array(\"Peter\" => \"35\", \"Ben\" => \"37\", \"Joe\" => \"43\");\necho \"Peter is \" . $age['Peter'] . \" years old.\";\n?>";
	k = k + s + "PHP Associative Arrays. The named keys can then be used in a script";
	// N 58
	c = c + s + "<?php\n$age = array(\"Peter\" => \"35\", \"Ben\" => \"37\", \"Joe\" => \"43\");\nforeach($age as $x => $x_value) {\n\techo \"Key=\" . $x . \", Value=\" . $x_value;\n\techo \"<br>\";\n}\n?>";
	k = k + s + "Loop Through an Associative Array. To loop through and print all the values of an associative array, you could use a foreach loop";
	// N 59
	c = c + s + "";
	k = k + s + "";
	// N 60
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("PHP");
});
