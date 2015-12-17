$(function(){
	// Introduction word
	var w = "{} Memorize Java code and Being best to coding in Java! {}";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "public class Hello\n{\n\tpublic static void main(String[] args)\n\t{\n\t\tSystem.out.println(\"Hello World\");\n\t}\n}";
	k = k + s + "Java Program Structure";
	// N 2
	c = c + s + "public class student{\n\tString name;\n\tint reg;\n\tString branch;\n\n\tvoid ca(){\n\t}\n\tvoid mte(){\n\t}\n\tvoid ete(){\n\t}\n}";
	k = k + s + "Classes in Java. A class is a blue print from which individual objects are created.";
	// N 3
	c = c + s + "public class collage{\n\tpublic collage(){}\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t}\n}";
	k = k + s + "Constructors. When discussing about classes, one of the most important sub topic would be constructors. Every class has a constructor. If we do not explicitly write a constructor for a class the Java compiler builds a default constructor for that class.";
	// N 4
	c = c + s + "public class collage{\n\tpublic collage(String name){\n\t\t// This constructor has one parameter, name.\n\t\tSystem.out.println(\"Collage Name is :\" + name );\n\t}\n\tpublic static void main(String []args){\n\t\t// Following statement would create an object mycollage\n\t\tcollage mycollage = new collage(\"FAST\");\n\t}\n}";
	k = k + s + "Creating an Object. As mentioned previously, a class provides the blueprints for objects. So basically an object is created from a class. In Java, the new key word is used to create new objects.";
	// N 5
	c = c + s + "/* First create an object */\nObjectReference = new Constructor();\n\n/* Now call a variable as follows */\nObjectReference.variableName;\n\n/* Now you can call a class method as follows */\nObjectReference.MethodName();";
	k = k + s + "Accessing Instance Variables and Methods. Instance variables and methods are accessed via created objects. To access an instance variable the fully qualified path should be as follows:";
	// N 6
	c = c + s + "import java.io.*;";
	k = k + s + "Import statements. In Java if a fully qualified name, which includes the package and the class name, is given then the compiler can easily locate the source code or classes. Import statement is a way of giving the proper location for the compiler to find that particular class.";
	// N 7
	c = c + s + "byte a = 68;\n\tchar a = 'A'";
	k = k + s + "Java Literals: A literal is a source code representation of a fixed value. They are represented directly in the code without any computation.";
	// N 8
	c = c + s + "int decimal = 100;\n\tint octal = 0144;\n\tint hexa = 0x64;";
	k = k + s + "Prefix 0 is used to indicate octal and prefix 0x indicates hexadecimal when using these number systems for literals.";
	// N 9
	c = c + s + "int a, b, c;// Declares three ints, a, b, and c.\nint a = 10, b = 10;// Example of initialization\nbyte B = 22;// initializes a byte type variable B.\ndouble pi = 3.14159;// declares and assigns a value of PI.\nchar a = 'a';// the char variable a is initialized with value 'a'";
	k = k + s + "A variable provides us with named storage that our programs can manipulate. Each variable in Java has a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.";
	// N 10
	c = c + s + "public class Test{\n\tpublic void custAge(){\n\t\tint age = 0;\n\t\tage = age + 17;\n\t\tSystem.out.println(\"Customer age is : \" + age);\n\t}\n\tpublic static void main(String args[]){\n\t\tTest test = new Test();\n\t\ttest.custAge();\n\t}\n}";
	k = k + s + "Local variables are declared in methods, constructors, or blocks. Local variables are created when the method, constructor or block is entered and the variable will be destroyed once it exits the method, constructor or block.";
	// N 11
	c = c + s + "import java.io.*;\npublic class Employee{\n\t// salary variable is a private static variable\n\tprivate static double salary;\n\t// DEPARTMENT is a constant\n\tpublic static final String DEPARTMENT = \"Development\";\n\t\tpublic static void main(String args[]){\n\t\t\tsalary = 1000;\n\t\t\tSystem.out.println(DEPARTMENT+\" salary:\"+salary);\n\t}\n}";
	k = k + s + "Class/static variables. Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block. There would only be one copy of each class variable per class, regardless of how many objects are created from it. Static variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final and static. Constant variables never change from their initial value.";
	// N 12
	c = c + s + "public class Test{\n\tpublic static void main(String args[]){\n\t\tint a , b;\n\t\ta = 10;\n\t\tb = (a == 1) ? 20: 30;\n\t\tSystem.out.println(\"Value of b is : \" + b );\n\n\t\tb = (a == 10) ? 20: 30;\n\t\tSystem.out.println(\"Value of b is : \" + b );\n\t}\n}";
	k = k + s + "Conditional operator is also known as the ternary operator. This operator consists of three operands and is used to evaluate Boolean expressions. The goal of the operator is to decide which value should be assigned to the variable. The operator is written as:";
	// N 13
	c = c + s + "public class Test{\n\tpublic static void main(String args[]){\n\t\tString name = \"Sachin\";\n\n\t\t// following will return true since name is type of String\n\t\tboolean result = name instanceof String;\n\t\tSystem.out.println(result);\n\t}\n}";
	k = k + s + "Instance of Operator. This operator is used only for object reference variables. The operator checks whether the object is of a particular type(class type or interface type).";
	// N 14
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\tfor(int x = 10; x < 20; x = x+1){\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\t}\n\t}\n}";
	k = k + s + "The for Loop. A for loop is a repetition control structure that allows you to efficiently write a loop that needs to execute a specific number of times.";
	// N 15
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]) {\n\t\tint x = 10;\n\n\t\twhile( x < 20 ) {\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\tx++;\n\t\t}\n\t}\n}";
	k = k + s + "The while Loop. A while loop is a control structure that allows you to repeat a task a certain number of times.";
	// N 16
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 10;\n\n\t\tdo{\n\t\t\tSystem.out.println(\"value of x : \" + x );\n\t\t\tx++;\n\t\t}while( x < 20 );\n\t}\n}";
	k = k + s + "The do...while Loop. A do...while loop is similar to a while loop, except that a do...while loop is guaranteed to execute at least one time.";
	// N 17
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 10;\n\n\t\tif( x < 20 ){\n\t\t\tSystem.out.print(\"This is if statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if Statement. An if statement consists of a Boolean expression followed by one or more statements.";
	// N 18
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tif( x < 20 ){\n\t\t\tSystem.out.print(\"This is if statement\");\n\t\t}else{\n\t\t\tSystem.out.print(\"This is else statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if...else Statement. An if statement can be followed by an optional else statement, which executes when the Boolean expression is false.";
	// N 19
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tif( x == 10 ){\n\t\t\tSystem.out.print(\"Value of X is 10\");\n\t\t}\n\t\telse if( x == 30 ){\n\t\t\tSystem.out.print(\"Value of X is 30\");\n\t\t}\n\t\telse{\n\t\t\tSystem.out.print(\"This is else statement\");\n\t\t}\n\t}\n}";
	k = k + s + "The if...else if...else Statement. An if statement can be followed by an optional else if...else statement, which is very useful to test various conditions using single ";
	// N 20
	c = c + s + "public class Test {\n\n\tpublic static void main(String args[]){\n\t\tint x = 30;\n\t\tint y = 10;\n\t\tif( x == 30 ){\n\t\t\tif( y == 10 ){\n\t\t\t\tSystem.out.print(\"X = 30 and Y = 10\");\n\t\t\t}\n\t\t}\n\t}\n}";
	k = k + s + "Nested if...else Statement. It is always legal to nest if-else statements which means you can use one if or else if statement inside another if or else if statement.";
	// N 21
	c = c + s + "public class Test {\n\tpublic static void main(String args[]){\n\t\tchar grade = 'A';\n\t\tswitch(grade){\n\t\t\tcase 'A' :\n\t\t\t\tSystem.out.println(\"Excellent!\");\n\t\t\t\tbreak;\n\t\t\tcase 'C' :\n\t\t\t\tSystem.out.println(\"Well done\");\n\t\t\t\tbreak;\n\t\tdefault :\n\t\t\t\tSystem.out.println(\"Invalid grade\");\n\t\t}\n\t\tSystem.out.println(\"Your grade is \" + grade);\n\t}\n}";
	k = k + s + "A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each case.";
	// N 22
	c = c + s + "// Here following primitive char 'a'\n// is boxed into the Character object ch\nCharacter ch = 'a';\n// Here primitive 'x' is boxed for method test\n// return is unboxed to char 'c'\nchar c = test('x');";
	k = k + s + "Normally, when we work with characters, we use primitive data types char. The Java compiler will also create a Character object for you under some circumstances. For example, if you pass a primitive char into a method that expects an object, the compiler automatically converts the char to a Character for you. This feature is called auto boxing or unboxing, if the conversion goes the other way.";
	// N 23
	c = c + s + "char = 'my char';";
	k = k + s + "Normally, when we work with characters, we use primitive data types char.";
	// N 24
	c = c + s + "String greeting = \"Hello world!\";";
	k = k + s + "Creating Strings. Whenever it encounters a string literal in your code, the compiler creates a String object with its value in this case, \"Hello world!\".";
	// N 25
	c = c + s + "public class strDemo{\n\n\tpublic static void main(String args[]){\n\t\tchar[] hello_array = {'h', 'e', 'l', 'l', 'o', '.'};\n\t\tString hello_string = new String(hello_array);\n\t\tSystem.out.println(hello_string);\n\t}\n}";
	k = k + s + "As with any other object, you can create String objects by using the new keyword and a constructor. The String class has eleven constructors that allow you to provide the initial value of the string using different sources, such as an array of characters.	";
	// N 26
	c = c + s + "public class StringDemo {\n\n\tpublic static void main(String args[]) {\n\t\tString palindrome = \"Welcome to Java Tutorial\";\n\t\tint len = palindrome.length();\n\t\tSystem.out.println\"String Length is : \" + len);\n\t}\n}";
	k = k + s + "String Length. Methods used to obtain information about an object are known as accessor methods. One accessor method that you can use with strings is the length() method, which returns the number of characters contained in the string object.";
	// N 27
	c = c + s + "char string1 = 'Hello';\nchar string2 = ' World!';\nstring1.concat(string2);";
	k = k + s + "Concatenating Strings. The String class includes a method for concatenating two strings";
	// N 28
	c = c + s + "\"My name is \".concat(\"Steve wozniak\");";
	k = k + s + "Concatenating Strings. The String class includes a method for concatenating two strings";
	// N 29
	c = c + s + "\"Hello\" + \" world\" + \"!\";";
	k = k + s + "Strings are more commonly concatenated with the + operator";
	// N 30
	c = c + s + "public class StringDemo {\n\n\tpublic static void main(String args[]) {\n\t\tString string1 = \"to Java \";\n\t\tSystem.out.println(\"Welcome\" + string1 + \"Tutorial\");\n\t}\n}";
	k = k + s + "Strings are more commonly concatenated with the + operator";
	// N 31
	c = c + s + "public class TestArray {\n\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Print all the array elements\n\t\tfor (int i = 0; i < myList.length; i++) {\n\t\t\tSystem.out.println(myList[i] + \" \");\n\t\t}\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 32
	c = c + s + "public class TestArray {\n\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Summing all elements\n\t\tdouble total = 0;\n\t\tfor (int i = 0; i < myList.length; i++) {\n\t\t\ttotal + = myList[i];\n\t\t}\n\t\tSystem.out.println(\"Total is \" + total);\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 33
	c = c + s + "public class TestArray {\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\t\t// Finding the largest element\n\t\tdouble max = myList[0];\n\t\tfor (int i = 1; i < myList.length; i++) {\n\t\t\tif (myList[i] > max) max = myList[i];\n\t\t}\n\t\tSystem.out.println(\"Max is \" + max);\n\t}\n}";
	k = k + s + "Processing Arrays. When processing array elements, we often use either for loop or foreach loop because all of the elements in an array are of the same type and the size of the array is known.";
	// N 34
	c = c + s + "public class TestArray {\n\tpublic static void main(String[] args) {\n\t\tdouble[] myList = {1.9, 2.9, 3.4, 3.5};\n\n\t\t// Print all the array elements\n\t\tfor (double element: myList) {\n\t\t\tSystem.out.println(element);\n\t\t}\n\t}\n}";
	k = k + s + "The foreach Loops. JDK 1.5 introduced a new for loop known as foreach loop or enhanced for loop, which enables you to traverse the complete array sequentially without using an index variable.";
	// N 35
	c = c + s + "public static void printArray(int[] array) {\n\tfor (int i = 0; i < array.length; i++) {\n\t\tSystem.out.print(array[i] + \" \");\n\t}\n}";
	k = k + s + "Passing Arrays to Methods. Just as you can pass primitive type values to methods, you can also pass arrays to methods. For example, the method displays the elements in an int array:";
	// N 36
	c = c + s + "public static int[] reverse(int[] list) {\n\tint[] result = new int[list.length];\n\n\tfor (int i = 0, j = result.length - 1; i < list.length; i++, j--)\n\t{\n\t\tresult[j] = list[i];\n\t}\n\treturn result;\n}";
	k = k + s + "Returning an Array from a Method. A method may also return an array. For example, the method shown returns an array that is the reversal of another array:";
	// N 37
	c = c + s + "class Parent{\n\tpublic void p1(){\n\t\tSystem.out.println(\"Parent method\");\n\t}\n}\npublic class Child extends Parent {\n\tpublic void c1(){\n\t\tSystem.out.println(\"Child method\");\n\t}\n\tpublic static void main(String[] args){\n\t\tChild cobj = new Child();\n\t\tcobj.c1(); //method of Child class\n\t\tcobj.p1(); //method of Parent class\n\t}\n}";
	k = k + s + "Inheritance is one of the key features of Object Oriented Programming. Inheritance provided mechanism that allowed a class to inherit property of another class. When a Class extends another class it inherits all non-private members including fields and methods.";
	// N 38
	c = c + s + "class Vehicle{\n\tString vehicleType;\n}\npublic class Car extends Vehicle {\n\tString modelType;\n\tpublic void showDetail(){\n\t\tvehicleType = \"Car\"; //accessing Vehicle class member\n\t\tmodelType = \"sports\";\n\t\tSystem.out.println(modelType+\" \"+vehicleType);\n\t}\n\tpublic static void main(String[] args){\n\t\tCar car =new Car();\n\t\tcar.showDetail();\n\t}\n}";
	k = k + s + "Inheritance is one of the key features of Object Oriented Programming. Inheritance provided mechanism that allowed a class to inherit property of another class. When a Class extends another class it inherits all non-private members including fields and methods";
	// N 39
	c = c + s + "class Parent{\n\tString name;\n}\npublic class Child extends Parent {\n\tString name;\n\tpublic void details(){\n\t\tsuper.name = \"Parent\"; //refers to parent class member\n\t\tname = \"Child\";\n\t\tSystem.out.println(super.name+\" and \"+name);\n\t}\n\tpublic static void main(String[] args){\n\t\tChild cobj = new Child();\n\t\tcobj.details();\n\t}\n}";
	k = k + s + "super keyword. In Java, super keyword is used to refer to immediate parent class of a class. In other words super keyword is used by a subclass whenever it need to refer to its immediate super class.";
	// N 40
	c = c + s + "interface emp\n{ \n\tint emp_id = 1212;\n\tvoid id_show();\n}";
	k = k + s + "Interface is a pure abstract class. They are syntactically similar to classes, but you cannot create instance of an Interface and their methods are declared without any body. Interface is used to achieve complete abstraction in Java. When you create an interface it defines what a class can do without saying anything about how the class will do it.";
	// N 41
	c = c + s + "interface NewsPaper{\n\tnews();\n}\n\ninterface Magazine extends NewsPaper{\n\tcolorful();\n}";
	k = k + s + "Interface extends other Interface. Classes implements interfaces, but an interface extends other interface.";
	// N 42
	c = c + s + "class Facility{\n\tpublic void Student(){\n\t\tSystem.out.println(\"Hello\");\n\t}\n}\n\nclass Collage extends Facility{\n\tpublic void Student() //Student() method overriden by Collage\n\t\tSystem.out.println(\"Hello World !\");\n\t}\n}";
	k = k + s + "When a method in a sub class has same name and type signature as a method in its super class, then the method is known as overridden method. Method overriding is also referred to as runtime polymorphism. The key benefit of overriding is the abitility to define method that's specific to a particular subclass type.";
	// N 43
	c = c + s + "// Abstract Class\nabstract class PQR{\n\tabstract void display(); // Abstract Method\n\tabstract int sum();\n}\nclass ABC extends PQR{\n\tpublic void display(){\n\t\tSystem.out.println(\"Welcome to Abstract Tutorial\");\n\t}\n\tpublic int sum(){\n\t\tint a = 10;\n\t\tint b = 20;\n\t\treturn a + b;\n\t}\n}";
	k = k + s + "What is Abstract method in Java? A method that is declare as abstract and does not have implementation is known as abstract method. If you define abstract method than class must be abstract.";
	// N 44
	c = c + s + "package firstpack;\npublic class Test{\n\tpublic static void main(String args[]){\n\t\tSystem.out.println(\"Testing package\");\n\t}\n}";
	k = k + s + "Creating a package. Creating a package in java is quite easy. Simply include a package command followed by name of the package as the first statement in java source file.";
	// N 45
	c = c + s + "class Test extends java.util.Date{\n\t//statements\n}";
	k = k + s + "import keyword is used to import built-in and user defined packages into your java source files. If a class wants to use another class in the same package, the package name does not need to be used. Classes in to the same package use without any import statement.";
	// N 46
	c = c + s + "import java.util.Date;\n\nclass Test extends Date{\n\t//statements\n}";
	k = k + s + "import the class you want to use";
	// N 47
	c = c + s + "import java.util.*;\n\nclass Test extends Date{\n\t//statements\n}";
	k = k + s + "import all the classes from the particular package";
	// N 48
	c = c + s + "import static java.lang.Math.sqrt;\n//importing static method sqrt of Math class";
	k = k + s + "The first form of static import statement, import only a single static member of a class";
	// N 49
	c = c + s + "import static java.lang.Math.*;\n//importing all static member of Math class";
	k = k + s + "The form of static import statement,imports all the static member of a class";
	// N 50
	c = c + s + "public class Test{\n\tpublic static void main(String[] args){\n\t\tSystem.out.println(Math.sqrt(144));\n\t}\n}";
	k = k + s + "The form of static import statement,imports all the static member of a class";
	// N 51
	c = c + s + "import static java.lang.Math.*;\n\npublic class Test{\n\tpublic static void main(String[] args){\n\t\tSystem.out.println(sqrt(144));\n\t}\n}";
	k = k + s + "The form of static import statement,imports all the static member of a class";
	// N 52
	c = c + s + "class MainThread{\n\tpublic static void main(String[] args){\n\t\tThread f = Thread.currentThread();\n\t\tt.setName(\"MainThread\");\n\t\tSystem.out.println(\"Name of thread is \" + f);\n\t}\n}";
	k = k + s + "The main thread. Even if you don't create any thread in your program, a thread called main thread is still created. Although the main thread is automatically created, you can control it by obtaining a reference to it by calling currentThread() method. Two important things to know about main thread are, 1-It is the thread from which other threads will be produced. 2-main thread must be always the last thread to finish execution.";
	// N 53
	c = c + s + "class mythread implements Runnable{\n\tpublic void run(){\n\t\tSystem.out.println(\"thread is running...\");\n\t}\n\tpublic static void main(String args[]){\n\t\tmythread m1 = new mythread();\n\t\tThread t1 = new Thread(m1);\n\t\tt1.start();\n\t}\n}";
	k = k + s + "Implementing the Runnable Interface. The easiest way to create a thread is to create a class that implements the runnable interface. After implementing runnable interface , the class needs to implement the run() method, which is of form,";
	// N 54
	c = c + s + "class MyThread extends Thread{\n\tpublic void run(){\n\t\tSystem.out.println(\"Concurrent thread started running..\");\n\t}\n}\nclass MyThreadDemo{\n\tpublic static void main( String args[] ){\n\t\tMyThread fl = new MyThread();\n\t\tfl.start();\n\t}\n}";
	k = k + s + "Extending Thread class. This is another way to create a thread by a new class that extends Thread class and create an instance of that class. The extending class must override run() method which is the entry point of new thread.";
	// N 55
	c = c + s + "synchronized (object){\n\t//statement to be synchronized\n}";
	k = k + s + "At times when more than one thread try to access a shared resource, we need to ensure that resource will be used by only one thread at a time. The process by which this is achieved is called synchronization.";
	// N 56
	c = c + s + "int a = 50 / 0; //ArithmeticException";
	k = k + s + "Scenario where ArithmeticException occurs. If we divide any number by zero, there occurs an ArithmeticException.";
	// N 57
	c = c + s + "String s = null;\nSystem.out.println(s.length()); //NullPointerException";
	k = k + s + "Scenario where NullPointerException occurs. If we have null value in any variable, performing any operation by the variable occurs an NullPointerException.";
	// N 58
	c = c + s + "String s = \"abc\";\nint i = Integer.parseInt(s); //NumberFormatException";
	k = k + s + "Scenario where NumberFormatException occurs. The wrong formatting of any value, may occur NumberFormatException. Suppose I have a string variable that have characters, converting this variable into digit will occur NumberFormatException.";
	// N 59
	c = c + s + "int a[] = new int[5];\na[10] = 50; //ArrayIndexOutOfBoundsException";
	k = k + s + "Scenario where ArrayIndexOutOfBoundsException occurs. If you are inserting any value in the wrong index, it would result ArrayIndexOutOfBoundsException";
	// N 60
	c = c + s + "try{\n\t//code that may throw exception\n} catch(Exception_class_Name ref){}";
	k = k + s + "Java try block is used to enclose the code that might throw an exception. It must be used within the method. Java try block must be followed by either catch or finally block. Syntax of java try-catch";
	// N 61
	c = c + s + "try{\n\t//code that may throw exception\n} finally{} ";
	k = k + s + "Java try block is used to enclose the code that might throw an exception. It must be used within the method. Java try block must be followed by either catch or finally block. Syntax of try-finally block";
	// N 62
	c = c + s + "public class NewMain {\n\tpublic static void main(String[] args) {\n\t\ttry{\n\t\t\tint a = 10 / 0; //Exception\n\t\t}\n\t\tcatch(ArithmeticException e){\n\t\t\tSystem.out.println(e);\n\t\t\tSystem.out.println(\"rest of the code...\");\n\t\t}\n\t}\n}";
	k = k + s + "Java catch block. Java catch block is used to handle the Exception. It must be used after the try block only. You can use multiple catch block with a single try.";
	// N 63
	c = c + s + "try{\n//statement\n\ttry{\n\t\t//statement\n\t}\n\tcatch(Exception e){\n\t\t//statement\n\t}\n}\ncatch(Exception e){\n//statement\n}";
	k = k + s + "The try block within a try block is known as nested try block in java.";
	// N 64
	c = c + s + "class finally_block{\n\tpublic static void main(String[] args){\n\t\tint a[] = new int[3];\n\t\ttry{\n\t\tSystem.out.println(\"Access invalid element\" + a[5]);\n\t/* the above statement will throw ArrayIndexOutOfBoundException */\n\t\t}\n\t\tfinally{\n\t\t\tSystem.out.println(\"finally is always executed.\");\n\t\t}\n\t}\n}";
	k = k + s + "Why use java finally. Finally block in java can be used to put \"cleanup\" code such as closing a file, closing connection etc.";
	// N 65
	c = c + s + "public class NewMain{\n\tstatic void validate(int age){\n\t\tif(age < 18){\n\t\t\tthrow new ArithmeticException(\"not valid\");\n\t\t}\n\t\telse{\n\t\t\tSystem.out.println(\"welcome to vote\");\n\t\t}\n\t}\n\tpublic static void main(String args[]){\n\t\tvalidate(14);\n\t}\n}";
	k = k + s + "throw keyword is used to throw an exception explicitly. Only object of Throwable class or its sub classes can be thrown. Program execution stops on encountering throw statement, and the closest catch statement is checked for matching type of exception.";
	// N 66
	c = c + s + "import java.awt.*;\nimport java.applet.*;\npublic class DisplayNumericalValues extends Applet{\n\tpublic void paint(Graphics g){\n\t\tint val1 = 10;\n\t\tint val2 = 20;\n\t\tint sum = val1 + val2;\n\t\tString str_sum = \"Sum = \" + String.valueOf(sum);\n\t\tg.drawString(str_sum,100,200)\n\t}\n}";
	k = k + s + "In applets, we can display numerical values by first converting them into strings and then using the drawstring() method of Graphics class we can do this easily by calling the valueOf() Method of String class.";
	// N 67
	c = c + s + "import java.util.Date;\npublic class DateDemo {\n\tpublic static void main(String args[]) {\n\t\t// Instantiate a Date object\n\t\tDate date = new Date();\n\t\t// display time and date using toString()\n\t\tSystem.out.println(date.toString());\n\t}\n}";
	k = k + s + "Getting Current Date & Time. This is very easy to get current date and time in Java. You can use a simple Date object with toString() method to print current date and time";
	// N 68
	c = c + s + "import java.util.Date;\npublic class DateDemo {\n\tpublic static void main(String args[]) {\n\t\t// Instantiate a Date object\n\t\tDate date = new Date();\n\t\t// display time and date using toString()\n\t\tString str = String.format(\"Current Date/Time : %tc\", date );\n\t\tSystem.out.printf(str);\n\t}\n}";
	k = k + s + "Date and time formatting can be done very easily using printf method. You use a two-letter format, starting with t";
	// N 69
	c = c + s + "import java.util.*;\npublic class SleepDemo {\n\tpublic static void main(String args[]) {\n\t\ttry {\n\t\t\tSystem.out.println(new Date());\n\t\t\tThread.sleep(5*60*10);\n\t\t\tSystem.out.println(new Date();\n\t} catch (Exception e) {\n\t\tSystem.out.println(\"Got an exception!\");\n\t\t}\n\t}\n}";
	k = k + s + "Sleeping for a While: You can sleep for any period of time from one millisecond up to the lifetime of your computer. For example, this program would sleep for 10 seconds:";
	// N 70
	c = c + s + "import java.util.regex.Matcher;\nimport java.util.regex.Pattern;\npublic class RegexMatches{\n\tprivate static final String REGEX = \"\\bcat\\b\";\n\tprivate static final String INPUT = \"cat cat cat cattie cat\";\n\tpublic static void main( String args[] ){\n\t\tPattern p = Pattern.compile(REGEX);\n\t\tatcher m = p.matcher(INPUT); // get a matcher object\n\t}\n}";
	k = k + s + "A regular expression is a special sequence of characters that helps you match or find other strings or sets of strings, using a specialized syntax held in a pattern. They can be used to search, edit, or manipulate text and data.";
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Java");
});
