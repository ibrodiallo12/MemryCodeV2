$(function(){
	// Introduction word
	var w = "{# Memorize C++ code, your keyboard and coding fast! #}";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "#include <iostream>\nusing namespace std;\nint main()\n{\n\tcout << \"Hello this is C++\";\n}";
	k = k + s + "Header files are included at the beginning just like in C program. Here iostream is a header file which provides us with input & output streams. Header files contained predeclared function libraries, which can be used by users for their ease.";
	// N 2
	c = c + s + "std::cout << \"A\";";
	k = k + s + "Using namespace std, tells the compiler to use standard namespace. Namespace collects identifiers used for class, object and variables. NameSpace can be used by two ways in a program, either by the use of using statement at the beginning, like we did in above mentioned program or by using name of namespace as prefix before the identifier with scope resolution (::) operator.";
	// N 3
	c = c + s + "cout<<\"single line\"; // This is single line comment";
	k = k + s + "Comments. For single line comments, use // before mentioning comment, like";
	// N 4
	c = c + s + "/*this is \na multiple line \ncomment */";
	k = k + s + "Comments. For multiple line comment, enclose the comment between /* and */";
	// N 5
	c = c + s + "class jk201\n{\n\tint i; //data variable\n\tvoid display() //Member Function\n\t{\n\t\tcout<<\"Inside Member Function\";\n\t}\n}; // Class ends here\n\nint main()\n{\n\tjk201 obj; // Creatig jk201 class's object\n\tobj.display(); //Calling member function using class object\n}";
	k = k + s + "Using Classes. Classes name must start with capital letter, and they contain data variables and member functions. This is a mere introduction to classes. This is how class is defined, its object is created and the member functions are used. Variables can be declared anywhere in the entire program, but must be declared, before they are used. Hence, we don't need to declare variable at the start of the program.";
	// N 6
	c = c + s + "void counter()\n{\n\tstatic int count=0;\n\tcout << count++;\n}\n\nint main(0)\n{\n\tfor(int i=0;i<5;i++)\n\t{\n\t\tcounter();\n\t}\n}";
	k = k + s + "Static variables inside Functions. Static variables when used inside function are initialized only once, and then they hold there value even through function calls. These static variables are stored on static storage area , not in stack.";
	// N 7
	c = c + s + "class X\n{\n\tstatic int i;\n\tpublic:\n\tX (){};\n};\n\nint X::i=1;\n\nint main()\n{\n\tX obj;\n\tcout << obj.i; // prints value of i\n}";
	k = k + s + "Static data member in class. Static data members of class are those members which are shared by all the objects. Static data member has a single piece of storage, and is not available as separate copy with each object, like other non-static data members.";
	// N 8
	c = c + s + "class X\n{\n\tpublic:\n\tstatic void fl(){};\n};\n\nint main()\n{\n\tX::f(); // calling member function directly with class name\n}";
	k = k + s + "Static Member Functions. These functions work for the class as whole rather than for a particular object of a class. It can be called using an object and the direct member access . operator. But, its more typical to call a static member function by itself, using class name and scope resolution :: operator.";
	// N 9
	c = c + s + "#include <iostream>\nusing namespace std;\nint main()\n{\n\tchar str[] = \"C++ tutorial\";\n\tcout << \"Value of str is : \" << str << endl;\n}";
	k = k + s + "The standard output stream (cout). The predefined object cout is an instance of iostream class. The cout object is said to be \"connected to\" the standard output device, which usually is the display screen. The cout is used in conjunction with the stream insertion operator, which is written as << which are two less than signs.";
	// N 10
	c = c + s + "#include <iostream>\nusing namespace std;\nint main ()\n{\n\tchar name[100];\n\tcout << \"Please enter your name:\";\n\tcin >> name;\n\tcout, << \"Your name is:\" << name << endl;\n}";
	k = k + s + "The standard input stream (cin). The predefined object cin is an instance of iostream class. The cin object is said to be attached to the standard input device, which usually is the keyboard. The cin is used in conjunction with the stream extraction operator, which is written as >> which are two greater than signs";
	// N 11
	c = c + s + "#include <iostream>\nusing namespace std;\n// main() is where program execution begins.\nint main(){\n\tcout <<\"Hello World\"; // prints Hello World\n\treturn0;\n}";
	k = k + s + "The compiler treats them as white space. You can use comments in testing to make certain lines of code inactive; however, #if / #endif preprocessor directives work better for this because you can surround code that contains comments but you cannot nest comments.";
	// N 12
	c = c + s + "#include<iostream>\nusing namespace std;\nint main(){\n\tcout<<\"Size of char : \"<<sizeof(char)<<endl;\n\tcout<<\"Size of int : \"<<sizeof(int)<<endl;\n\tcout <<\"Size of short int : \"<<sizeof(shortint)<<endl;\n\tcout<<\"Size of long int : \"<<sizeof(longint)<<endl;\n\tcout <<\"Size of float : \"<<sizeof(float)<<endl;\n\tcout <<\"Size of double : \"<<sizeof(double)<<endl;\n\tcout <<\"Size of wchar_t : \"<<sizeof(wchar_t)<<endl;\n}";
	k = k + s + "They are used to define type of variables and contents used. Data types define the way you use storage in the programs you write. Data types can be built in or abstract. Built in Data Types. These are the data types which are predefined and are wired directly into the compiler. eg: int, char etc. User defined or Abstract data types. These are the type, that user creates as a class. In C++ these are classes where as in C it was implemented by structures.";
	// N 13
	c = c + s + "int i, j, k;\nchar c, ch;\nfloat f, salary;\ndouble d;";
	k = k + s + "Here, type must be a valid C++ data type including char, w_char, int, float, double, bool or any user-defined object, etc., and variable_list may consist of one or more identifier names separated by commas. Some valid declarations are shown here:";
	// N 14
	c = c + s + "externint d =3, f =5; // declaration of d and f\nint d = 3, f = 5; // definition and initializing d and f\nbyte z = 22; // definition and initializes z\nchar x = 'x'; // the variable x has the value 'x'";
	k = k + s + "Variables can be initialized (assigned an initial value) in their declaration. The initializer consists of an (=)equal sign followed by a constant expression";
	// N 15
	c = c + s + "int i;// declared but not initialised\nchar c;\nint i, j, k;// Multiple declaration";
	k = k + s + "Variable must be declared before they are used. Usually it is preferred to declare them at the starting of the program, but in C++ they can be declared in the middle of program too, but must be done before using them.";
	// N 16
	c = c + s + "int i; // declaration\ni = 10; // initialization";
	k = k + s + "Initialization means assigning value to an already declared variable,";
	// N 17
	c = c + s + "int i = 10;\n//initialization and declaration in same step\nint i = 10, j = 11;";
	k = k + s + "Initialization and declaration can be done in one single step also";
	// N 18
	c = c + s + "int i, j;\ni = 10;\nj = 20;\nint j = i + j;\n//compile time error, cannot redeclare a variable in same scope";
	k = k + s + "If a variable is declared and not initialized by default it will hold a garbage value. Also, if a variable is once declared and if try to declare it again, we will get a compile time error.";
	// N 19
	c = c + s + "#include <iostream>\nusing namespace std;\nint x; // Global variable declared\nint main(){\n\tx = 10; // Initialized once\n\tcout <<\"first value of x = \"<< x;\n\tx = 20; // Initialized again\n\tcout <<\"Initialized again with value = \"<< x;\n}";
	k = k + s + "Global variables are those, which ar once declared and can be used throughout the lifetime of the program by any class or any function. They must be declared outside the main() function.";
	// N 20	
	c = c + s + "#include <iostream>\nusing namespace std;\nint main(){\n\tint i = 10;\n\tif(i < 20){ // if condition scope starts\n\t\tint n = 100; // Local variable declared and initialized\n\t} // if condition scope ends\ncout << n; // Compile time error, n not available here\n}";
	k = k + s + "Local variables are the variables which exist only between the curly braces, in which its declared. Outside that they are unavailable and leads to compile time error.";
	// N 21
	c = c + s + "#include <iostream>\nusing namespace std;\nint main(){\n\tfinal int i = 10;\n\tstatic int y = 20;\n}";
	k = k + s + "Some special types of variable. There are also some special keywords, to impart unique characteristics to the variables in the program.";
	// N 22
	c = c + s + "85 // decimal\n0213 // octal\n0x4b // hexadecimal\n30 // int\n30u // unsigned int\n30l // long\n30ul // unsigned long";
	k = k + s + "An integer literal can be a decimal, octal, or hexadecimal constant. A prefix specifies the base or radix: 0x or 0X for hexadecimal, 0 for octal, and nothing for decimal.";
	// N 23
	c = c + s + "#include<iostream>\nusing namespace std;\nint main()\n{\ncout <<\"Hello\\tWorld\\n\\n\";\n}";
	k = k + s + "Character literals are enclosed in single quotes. If the literal begins with L (uppercase only), it is a wide character literal (e.g., L'x') and should be stored in wchar_t type of variable.";
	// N 24
	c = c + s + "#include<iostream>\nusing namespace std;\n#define LENGTH 10\n#define WIDTH 5\nint main(){\n\tint area;\n\tarea = LENGTH * WIDTH;\n\tcout <<area;\n}";
	k = k + s + "String literals are enclosed in double quotes. A string contains characters that are similar to character literals: plain characters, escape sequences, and universal characters.";
	// N 25
	c = c + s + "#include<iostream>\nusing namespace std;\nint main(){\n\tint area;\n\tconst int LENGTH 10\n\tconst int WIDTH 5;\n\tarea = LENGTH * WIDTH;\n\tcout <<area;\n}";
	k = k + s + "The const Keyword. You can use const prefix to declare constants with a specific type.";
	// N 26
	c = c + s + "#include<iostream>\nusing namespace std;\nvoid test();\nint main(){\n\tintvar = 5; // local variable to main()\n\ttest();\n\tvar1 = 9; // illegal: var1 not visible inside main()\n}\nvoid test(){\n\tint var1; // local variable to test()\n\tvar1 = 6;\n\tcout<< var; // illegal: var not visible inside test()\n}";
	k = k + s + "A variable defined inside a function(defined inside function body between braces) is a local variable. Local variables are created when the function containing local variable is called and destroyed when that function returns. Local variables can only be accessed from inside a function in which it exists.";
	// N 27
	c = c + s + "#include<iostream>\nusing namespace std;\nint c =12;\nvoid test();\nint main(){\n\t++c;\n\tcout<<c<< endl; //Output: 13\n\ttest();\n\treturn 0;\n}\nvoid test(){\n\t++c;\n\tcout<< c; //Output: 14\n}";
	k = k + s + "If a variable is defined outside any function, then that variable is called a global variable. Any part of program after global variable declaration can access global variable.";
	// N 28
	c = c + s + "int main(){\n\tstatic float a;\n\t// something\n}";
	k = k + s + "Keyword static is used for specifying static variable.";
	// N 29
	c = c + s + "";
	k = k + s + "";
	// N 30
	c = c + s + "";
	k = k + s + "";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("C++ language");
});
