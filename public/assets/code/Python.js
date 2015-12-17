$(function(){
	//INTRODUCTION WORD
	var w = "Memorize Python language quickly and coding fast with your keyboard";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c = "";
	// know not affecte in same ARRAY to code
	var k = "";
	
	// N 1	
	c = "print \"Welcome to the language of Python !\"";
	k = "Print a simple welcome in python";
	// N 2
	c = c + s + "my_variable = 5";
	k = k + s + "create a variable and sign value 5";
	// N 3
	c = c + s + "#!/usr/bin/python\n\n# First comment\nprint \"Hello, Python!\"; # second comment";
	k = k + s + "Comments in Python: A hash sign (#) that is not inside a string literal begins a comment. All characters after the # and up to the physical line end are part of the comment and the Python interpreter ignores them.";
	// N 4
	c = c + s + "myint = 7";
	k = k + s + "Numbers. Python supports two types of numbers - integers and floating point numbers.";
	// N 5
	c = c + s + "myfloat = 7.0\nmyfloat = float(7)";
	k = k + s + "Numbers. Python supports two types of numbers - integers and floating point numbers. To define a floating point number, you may use one of the tow notations:";
	// N 6
	c = c + s + "mystring = 'hello'\nmystring = \"hello\"";
	k = k + s + "Strings. Strings are defined either with a single quote or a double quotes.";
	// N 7
	c = c + s + "mystring = \"Don't worry about apostrophes\"";
	k = k + s + "Using double quotes makes it easy to include apostrophes (whereas these would terminate the string if using single quotes)";
	// N 8
	c = c + s + "one = 1\ntwo = 2\nthree = one + two\n\nhello = \"hello\"\nworld = \"world\"\nhelloworld = hello + \" \" + world";
	k = k + s + "Simple operators can be executed on numbers and strings";
	// N 9
	c = c + s + "a, b = 3, 4";
	k = k + s + "Assignments can be done on more than one variable \"simultaneously\" on the same line like this";
	// N 10
	c = c + s + "# This will not work!\nprint 1 + 2 + \"hello\"";
	k = k + s + "Mixing operators between numbers and strings is not supported";
	// N 11
	c = c + s + "mylist = []\nmylist.append(1)\nmylist.append(2)\nmylist.append(3)\nprint(mylist[0]) # prints 1\nprint(mylist[1]) # prints 2\nprint(mylist[2]) # prints 3\n\n# prints out 1,2,3\nfor x in mylist:\n\tprint x";
	k = k + s + "Lists are very similar to arrays. They can contain any type of variable, and they can contain as many variables as you wish. Lists can also be iterated over in a very simple manner. Here is an example of how to build a list.";
	// N 12
	c = c + s + "mylist = [1,2,3]\nprint(mylist[10])";
	k = k + s + "Accessing an index which does not exist generates an exception (an error).";
	// N 13
	c = c + s + "number = 1 + 2 * 3 / 4.0";
	k = k + s + "Arithmetic Operators. Just as any other programming languages, the addition, subtraction, multiplication, and division operators can be used with numbers.";
	// N 14
	c = c + s + "remainder = 11 % 3";
	k = k + s + "Another operator available is the modulo (%) operator, which returns the integer remainder of the division. dividend % divisor = remainder.";
	// N 15
	c = c + s + "squared = 7 ** 2\ncubed = 2 ** 3";
	k = k + s + "Using two multiplication symbols makes a power relationship.";
	// N 16
	c = c + s + "helloworld = \"hello\" + \" \" + \"world\"";
	k = k + s + "Using Operators with Strings. Python supports concatenating strings using the addition operator";
	// N 17
	c = c + s + "lotsofhellos = \"hello\" * 10";
	k = k + s + "Python also supports multiplying strings to form a string with a repeating sequence";
	// N 18
	c = c + s + "even_numbers = [2,4,6,8]\nodd_numbers = [1,3,5,7]\nall_numbers = odd_numbers + even_numbers";
	k = k + s + "Using Operators with Lists. Lists can be joined with the addition operators:";
	// N 19
	c = c + s + "print [1,2,3] * 3";
	k = k + s + "Just as in strings, Python supports forming new lists with a repeating sequence using the multiplication operator";
	// N 20
	c = c + s + "# This prints out \"Hello, John!\"\nname = \"John\"\nprint \"Hello, %s!\" % name";
	k = k + s + "ython uses C-style string formatting to create new, formatted strings. The \"%\" operator is used to format a set of variables enclosed in a \"tuple\" (a fixed size list), together with a format string, which contains normal text together with \"argument specifiers\", special symbols like \"%s\" and \"%d\". Let's say you have a variable called \"name\" with your user name in it, and you would then like to print out a greeting to that user.";
	// N 21
	c = c + s + "# This prints out \"John is 23 years old.\"\nname = \"John\"\nage = 23\nprint \"%s is %d years old.\" % (name, age)";
	k = k + s + "To use two or more argument specifiers, use a tuple (parentheses)";
	// N 22
	c = c + s + "# This prints out: A list: [1, 2, 3]\nmylist = [1,2,3]\nprint \"A list: %s\" % mylist";
	k = k + s + "Any object which is not a string can be formatted using the %s operator as well. The string which returns from the \"repr\" method of that object is formatted as the string.";
	// N 23
	c = c + s + "astring = \"Hello world!\"";
	k = k + s + "Strings are bits of text. They can be defined as anything between quotes";
	// N 24
	c = c + s + "astring = \"Hello world!\"\nprint len(astring)";
	k = k + s + "That prints out 12, because \"Hello world!\" is 12 characters long, including punctuation and spaces.";
	// N 25
	c = c + s + "astring = \"Hello world!\"\nprint astring.count(\"l\")";
	k = k + s + "For those of you using silly fonts, that is a lowercase L, not a number one. This counts the number of l's in the string. Therefore, it should print 3.";
	// N 26
	c = c + s + "astring = \"Hello world!\"\nprint astring[3:7]";
	k = k + s + "This prints a slice of the string, starting at index 3, and ending at index 6. But why 6 and not 7? Again, most programming languages do this - it makes doing math inside those brackets easier. If you just have one number in the brackets, it will give you the single character at that index. If you leave out the first number but keep the colon, it will give you a slice from the start to the number you left in. If you leave out the second number, if will give you a slice from the first number to the end.";
	// N 27
	c = c + s + "astring = \"Hello world!\"\nprint astring.upper()";
	k = k + s + "These make a new string with all letters converted to uppercase, respectively";
	// N 28
	c = c + s + "astring = \"Hello world!\"\nprint astring.lower()";
	k = k + s + "These make a new string with all letters converted to lowercase, respectively";
	// N 29
	c = c + s + "print astring.startswith(\"Hello\")# return True\nprint astring.endswith(\"asdfasdfasdf\")# return False";
	k = k + s + "This is used to determine whether the string starts with something or ends with something, respectively. The first one will print True, as the string starts with \"Hello\". The second one will print False, as the string certainly does not end with \"asdfasdfasdf\".";
	// N 30
	c = c + s + "astring = \"Hello world!\"\nafewwords = astring.split(\" \")";
	k = k + s + "This splits the string into a bunch of strings grouped together in a list. Since this example splits at a space, the first item in the list will be \"Hello\", and the second will be \"world!\".";
	// N 31
	c = c + s + "x = 2\nprint x == 2 # prints out True\nprint x == 3 # prints out False\nprint x < 3 # prints out True";
	k = k + s + "Python uses boolean variables to evaluate conditions. The boolean values True and False are returned when an expression is compared or evaluated";
	// N 32
	c = c + s + "name = \"John\"\nage = 23\nif name == \"John\" and age == 23:\n\tprint \"Your name is John, and you are also 23 years old.\"\n\nif name == \"John\" or name == \"Rick\":\n\tprint \"Your name is either John or Rick.\"";
	k = k + s + "Boolean operators. The \"and\" and \"or\" boolean operators allow building complex boolean expressions,";
	// N 33
	c = c + s + "name = \"John\"\nif name in [\"John\", \"Rick\"]:\n\tprint \"Your name is either John or Rick.\"";
	k = k + s + "The \"in\" operator could be used to check if a specified object exists within an iterable object container, such as a list";
	// N 34
	c = c + s + "x = 2\nif x == 2:\n\tprint \"x equals two!\"\nelse:\n\tprint \"x does not equal to two.\"";
	k = k + s + "Python uses indentation to define code blocks, instead of brackets. The standard Python indentation is 4 spaces, although tabs and any other space size will work, as long as it is consistent. Notice that code blocks do not need any termination.";
	// N 35
	c = c + s + "x = [1,2,3]\ny = [1,2,3]\nprint x == y # Prints out True\nprint x is y # Prints out False";
	k = k + s + "The 'is' operator. Unlike the double equals operator \"==\", the \"is\" operator does not match the values of the variables, but the instances themselves.";
	// N 36
	c = c + s + "print not False # Prints out True\nprint (not False) == (False) # Prints out False";
	k = k + s + "The \"not\" operator. Using \"not\" before a boolean expression inverts it";
	// N 37
	c = c + s + "primes = [2, 3, 5, 7]\nfor prime in primes:\n\tprint prime";
	k = k + s + "The \"for\" loop. For loops iterate over a given sequence. Here is an example";
	// N 38
	c = c + s + "# Prints out the numbers 0,1,2,3,4\nfor x in xrange(5): # or range(5)\n\tprint x\n\n# Prints out 3,4,5\nfor x in xrange(3, 6): # or range(3, 6)\n\tprint x\n\n# Prints out 3,5,7\nfor x in xrange(3, 8, 2): # or range(3, 8, 2)\n\tprint x";
	k = k + s + "For loops can iterate over a sequence of numbers using the \"range\" and \"xrange\" functions. The difference between range and xrange is that the range function returns a new list with numbers of that specified range, whereas xrange returns an iterator, which is more efficient. (Python 3 uses the range function, which acts like xrange). Note that the xrange function is zero based.";
	// N 39
	c = c + s + "# Prints out 0,1,2,3,4\n\ncount = 0\nwhile count < 5:\n\tprint count\n\tcount += 1 # This is the same as count = count + 1";
	k = k + s + "\"while\" loops. While loops repeat as long as a certain boolean condition is met.";
	// N 40
	c = c + s + "# Prints out 0,1,2,3,4\ncount = 0\nwhile True:\n\tprint count\n\tcount += 1\n\tif count >= 5:\n\t\tbreak";
	k = k + s + "\"break\" and \"continue\" statements, break is used to exit a for loop or a while loop, whereas continue is used to skip the current block, and return to the \"for\" or \"while\" statement";
	// N 41
	c = c + s + "# Prints out only odd numbers - 1,3,5,7,9\nfor x in xrange(10):\n\t# Check if x is even\n\tif x % 2 == 0:\n\tcontinue\n\tprint x";
	k = k + s + "\"break\" and \"continue\" statements, break is used to exit a for loop or a while loop, whereas continue is used to skip the current block, and return to the \"for\" or \"while\" statement";
	// N 42
	c = c + s + "def my_function():\n\tprint \"Hello From My Function!\"";
	k = k + s + "What are Functions? Functions are a convenient way to divide your code into useful blocks, allowing us to order our code, make it more readable, reuse it and save some time. Also functions are a key way to define interfaces so programmers can share their code.";
	// N 43
	c = c + s + "block_head:\n\t1st block line\n\t2nd block line\n\t...";
	k = k + s + "How do you write functions in Python?";
	// N 44
	c = c + s + "def my_function_with_args(name, greeting):\n\tprint \"Hi, %s,From My Function, I wish you %s\"%(name, greeting)";
	k = k + s + "Functions may also receive arguments (variables passed from the caller to the function).";
	// N 45
	c = c + s + "def sum_two_numbers(a, b):\n\treturn a + b";
	k = k + s + "Functions may return a value to the caller, using the keyword- 'return'.";
	// N 46
	c = c + s + "# print a simple greeting\nmy_function()\n\n#prints - \"Hello, John Doe, From My Function!, I wish you a great year!\"\nmy_function_with_args(\"John Doe\", \"a great year!\")\n\n# after this line x will hold the value 3!\nx = sum_two_numbers(1,2)";
	k = k + s + "How do you call functions in Python? Simply write the function's name followed by (), placing any required arguments within the brackets.";
	// N 47
	c = c + s + "";
	k = k + s + "";
	// N 48
	c = c + s + "";
	k = k + s + "";
	// N 49
	c = c + s + "";
	k = k + s + "";
	// N 50
	c = c + s + "";
	k = k + s + "";
	// N 51
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Python programming language");
});
