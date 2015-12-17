$(function(){
	// Introduction word
	var w = "Memorize line-command, your keyboard being good in linux";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	// N 1
	c = c + s + "alias c='clear'";
	k = k + s + "Create an alias 'c' that will clear the screen";
	// N 2
	c = c + s + "alias ls='ls --classify\nls\nunalias ls";
	k = k + s + "Create an alias 'ls' that will change the default action of ls";
	// N 3
	c = c + s + "alias la='ls -lAXh --color=always' #Show all, sort by extension\nalias ls-al='ls -al' #fix typo missing space\nalias l=\"ls -l\"\nalias la=\"ls -la\"";
	k = k + s + "Create more aliases for ls";
	// N 4
	c = c + s + "alias ..='cd ..'\nalias ...='cd ../..'\nalias ....='cd ../../..'";
	k = k + s + "Use alias to cd into to sub-sub directories";
	// N 5
	c = c + s + "alias cd..='cd ..'";
	k = k + s + "Use alias to fix missing space typos";
	// N 6
	c = c + s + "alias .='echo $PWD'";
	k = k + s + "Display the working directory";
	// N 7
	c = c + s + "alias rm='rm -i'";
	k = k + s + "Prevent accidental deletions by making rm interactive";
	// N 8
	c = c + s + "alias canhaz='sudo apt-get install'";
	k = k + s + "Shorten apt-get installation commands";
	// N 9
	c = c + s + "alias fftr='/home/user/firefox/firefox http://memrycode.com'";
	k = k + s + "Run firefox and open a specific website";
	// N 10
	c = c + s + "apt-get update";
	k = k + s + "Sync the local software database with the repository database (build cache)";
	// N 11
	c = c + s + "apt-cache search gimp";
	k = k + s + "Search for a particular program (search the cache) in this case the gimp program";
	// N 12
	c = c + s + "apt-get install gimp";
	k = k + s + "If the above succeeds then the software is available and can be installed";
	// N 13
	c = c + s + "apt-get remove gimp";
	k = k + s + "To remove the software if you no longer need it";
	// N 14
	c = c + s + "apt-get upgrade";
	k = k + s + "Upgrade all the software on your system to the latest versions";
	// N 15
	c = c + s + "apt-get dist-upgrade";
	k = k + s + "Upgrading the whole linux distribution to a new version";
	// N 16
	c = c + s + "aspell check foo.txt";
	k = k + s + "Check the file foo.txt";
	// N 17
	c = c + s + "aspell check --sug-mode=bad-spellers -d en_US foo.txt";
	k = k + s + "Check the file foo.txt using the bad-spellers suggestion mode and the American English dictionary";
	// N 18
	c = c + s + "ls -l | awk '{print $5}'";
	k = k + s + "From an ls - l listing, return the fifth item ($5) from each line of the output";
	// N 19
	c = c + s + "awk '{print NR \"- \" $1 }' samplefile.txt";
	k = k + s + "Print the Row Number (NR), then a dash and space (\"- \") and then the first item ($1) from each line in samplefile.txt";
	// N 20
	c = c + s + "awk '{print $1, $(NF-2) }' samplefile.txt";
	k = k + s + "Print the first item ($1) and then the third last item $(NF-2) from each line in samplefile.txt";
	// N 21
	c = c + s + "awk 'NF > 0' data.txt";
	k = k + s + "Print every line that has at least one field. This is an easy way to delete blank lines from a file (or rather, to create a new file similar to the old file but from which the blank lines have been deleted)";
	// N 22
	c = c + s + "awk '{ if (length($0) > max) max = length($0) }\n\tEND { print max }' data";
	k = k + s + "Print the length of the longest input line";
	// N 23
	c = c + s + "awk 'BEGIN { for (i = 1; i <= 7; i++)\n\tprint int(101 * rand()) }'";
	k = k + s + "Print seven random numbers from zero to 100, inclusive";
	// N 24
	c = c + s + "ls -lg FILES | awk '{ x += $5 } ; END { print \"total bytes: \" x }'";
	k = k + s + "Print the total number of bytes used by FILES";
	// N 25
	c = c + s + "ls -l *.png | gawk '{sum += $5; n++;} END {print sum/n;}'";
	k = k + s + "Print the average file size of all .PNG files within a directory";
	// N 26
	c = c + s + "awk -F: '{ print $1 }' /etc/passwd | sort";
	k = k + s + "Print a sorted list of the login names of all users";
	// N 27
	c = c + s + "awk 'END { print NR }' data";
	k = k + s + "Count the lines in a file";
	// N 28
	c = c + s + "awk 'NR % 2 == 0' data";
	k = k + s + "Print the even numbered lines in the data file. If you were to use the expression 'NR % 2 == 1' instead, it would print the odd numbered lines.";
	// N 29
	c = c + s + "basename ~";
	k = k + s + "Get the name of the home folder";
	// N 30
	c = c + s + "result=$(basename \"$pathnamevar\")";
	k = k + s + "Extract the file name from the variable pathnamevar and store in the variable result using parameter expansion $( )";
	// N 31
	c = c + s + "#BatchRenameExt\nfor file in *.$1; do\nmv $file `basename $file $1`.$2\ndone\nBatchRenameExt htm html";
	k = k + s + "A script to rename file extensions";
	// N 32
	c = c + s + "bg %0";
	k = k + s + "Put the job with job id 0 in the background";
	// N 33
	c = c + s + "for myloop in 1 2 3 4 5\ndo\n\techo -n \"$myloop\"\n\tif [ \"$myloop\" -eq 3 ]\n\tthen\n\tbreak # This line will break out of the loop\n\tfi\ndone";
	k = k + s + "break. Exit from a for, while, until, or select loop";
	// N 34
	c = c + s + "bzip2 test.csv";
	k = k + s + "Compress the file test.csv and replace it with a compressed version named test.csv.bz2";
	// N 35
	c = c + s + "bzip2 test.csv > test.csv.bz2";
	k = k + s + "Compress the file test.csv, keep the uncompressed version and create the new file by redirecting standard out";
	// N 36
	c = c + s + "tar -cf music.tar miles.mp3 ben.mp3 howard.mp3\nbzip2 music.tar";
	k = k + s + "Combine a set of mp3 music files into one file with tar and then zip the result with bzip2	";
	// N 37
	c = c + s + "tar -cjf music.tar.bz2 miles.mp3 ben.mp3 howard.mp3";
	k = k + s + "The same as above but in one step by using the tar -j option";
	// N 38
	c = c + s + "cat myfile.txt";
	k = k + s + "Display a file";
	// N 39
	c = c + s + "cat File1.txt File2.txt > union.txt";
	k = k + s + "Concatenate two files";
	// N 40
	c = c + s + "sort -u File1.txt File2.txt > unique_union.txt";
	k = k + s + "If you need to combine two files but also eliminate duplicates, this can be done with sort unique";
	// N 41
	c = c + s + "my_variable=`cat File3.txt`";
	k = k + s + "Put the contents of a file into a variable";
	// N 42
	c = c + s + "cd /usr/local/sybase\npwd";
	k = k + s + "Move to the sybase folder";
	// N 43
	c = c + s + "cd /var/log\npwd";
	k = k + s + "Change to another folder";
	// N 44
	c = c + s + "cd -";
	k = k + s + "Quickly get back";
	// N 45
	c = c + s + "cd ..";
	k = k + s + "move up one folder";
	// N 46
	c = c + s + "cd #Back to your home folder";
	k = k + s + "cd (Back to your home folder)";
	// N 47
	c = c + s + "chgrp oracle /usr/database";
	k = k + s + "Make Oracle the owner of the database directory";
	// N 48
	c = c + s + "chmod a-x file";
	k = k + s + "Deny execute permission to everyone";
	// N 49
	c = c + s + "chmod a+r file";
	k = k + s + "Allow read permission to everyone";
	// N 50
	c = c + s + "chmod go+rw file";
	k = k + s + "Make a file readable and writable by the group and others";
	// N 51
	c = c + s + "chmod u+x myscript.sh";
	k = k + s + "Make a shell script executable by the user/owner";
	// N 52
	c = c + s + "sudo chkconfig --list | sort | less";
	k = k + s + "List all the startup services, and sort alphabetically";
	// N 53
	c = c + s + "tail -85 file.txt";
	k = k + s + "Extract the last 85 lines from a file";
	// N 54
	c = c + s + "head -50 file.txt | tail -10";
	k = k + s + "Extract lines 40-50 from a file, first using head to get the first 50 lines then tail to get the last 10";
	// N 55
	c = c + s + "tar -czvf MyArchive Source_file";
	k = k + s + "Create a tar and zip the file (using the create function)";
	// N 56
	c = c + s + "tar -xzvf MyArchive Source_file";
	k = k + s + "Extract the zip file created above";
	// N 57
	c = c + s + "tar --create --gzip --verbose --file=MyArchive Source_file";
	k = k + s + "Create a tar and zip the file (using the create function)";
	// N 58
	c = c + s + "tar --extract --gunzip --verbose --file=MyArchive Source_file";
	k = k + s + "Extract the zip file created above";
	// N 59
	c = c + s + "tar czvf my_backup.$(date +%Y%m%d-%H%M%S).tgz /users/simon";
	k = k + s + "Create a tar in zip format with the file named as todays date/time";
	// N 60
	c = c + s + "whoami";
	k = k + s + "Print the current user id and name.";
	// N 61
	c = c + s + "echo $SHELL";
	k = k + s + "If you would like to know which shell you are using you may use a command called echo to display a system variable stating your current shell. echo is a command which is used to display messages.";
	// N 62
	c = c + s + "pwd";
	k = k + s + "The first command we are going to learn is pwd which stands for Present Working Directory. (You'll find that a lof of commands in linux are named as an abbreviation of a word or words describing them. This makes it easier to remember them.) The command does just that. It tells you what your current or present working directory is. ";
	// N 63
	c = c + s + "ls";
	k = k + s + "It's one thing to know where we are. Next we'll want to know what is there. The command for this task is ls. It's short for list.";
	// N 64
	c = c + s + "ls -l";
	k = k + s + "We ran ls with a single command line option ( -l ) which indicates we are going to do a long listing. A long listing has the following:-First character indicates whether it is a normal file ( - ) or directory ( d ) -Next 9 characters are permissions for the file or directory (we'll learn more about them in section 6). -The next file is the number of blocks (don't worry too much about this). -The next field is the owner of the file or directory (ryan in this case). -The next field is the group the file or directory belongs to (users in this case). -Following this is the file size. -Next up is the file modification time. -Finally we have the actual name of the file or directory.";
	// N 65
	c = c + s + "ls /etc";
	k = k + s + "We ran ls with a command line argument ( /etc ). When we do this it tells ls not to list our current directory but instead to list that directories contents.";
	// N 66
	c = c + s + "ls -l /etc";
	k = k + s + "We ran ls with both a command line option and argument. As such it did a long listing of the directory /etc. Lines 12 and 18 just indicate that I have cut out some of the commands normal output for brevities sake. When you run the commands you will see a longer listing of files and directories.";
	// N 67
	c = c + s + "ls Documents";
	k = k + s + "We ran ls providing it with a relative path. Documents is a directory in our current location. This command could produce different results depending on where we are. If we had another user on the system, bob, and we ran the command when in their home directory then we would list the contents of their Documents directory instead";
	// N 68
	c = c + s + "ls ../../";
	k = k + s + "We ran ls with a command line argument ( ../../ ). When we do this it tells ls not to list our current directory but instead to list that directories contents";
	// N 69
	c = c + s + "cd 'Holiday Photos'";
	k = k + s + "Quotes. The first approach involves using quotes around the entire item. You may use either single or double quotes (later on we will see that there is a subtle difference between the two but for now that difference is not a problem). Anything inside quotes is considered a single item.";
	// N 70
	c = c + s + "cd Holiday\ Photos";
	k = k + s + "Escape Characters. Another method is to use what is called an escape character, which is a backslash ( \ ). What the backslash does is escape (or nullify) the special meaning of the next character.";
	// N 71
	c = c + s + "ls -a Documents";
	k = k + s + " We may modify it by including the command line option -a so that it does show hidden files and directories.";
	// N 72
	c = c + s + "file test.txt";
	k = k + s + "obtain information about what type of file a file or directory is.";
	// N 73
	c = c + s + "man ls";
	k = k + s + "The manual pages are a set of pages that explain every command available on your system including what they do, the specifics of how you run them and what command line arguments they accept.";
	// N 74
	c = c + s + "ls -a";
	k = k + s + "A lot of being proficient at Linux is knowing which command line options we should use to modify the behaviour of our commands to suit out needs. A lot of these have both a long hand and short hand version. eg. Above you will notice that to list all directory entries (including hidden files) we can use the option -a or --all (remember from last section what files and directories beginning with a . ";
	// N 75
	c = c + s + "ls --all";
	k = k + s + "A lot of being proficient at Linux is knowing which command line options we should use to modify the behaviour of our commands to suit out needs. A lot of these have both a long hand and short hand version. eg. Above you will notice that to list all directory entries (including hidden files) we can use the option -a or --all (remember from last section what files and directories beginning with a . ";
	// N 76
	c = c + s + "ls -alh";
	k = k + s + "A lot of being proficient at Linux is knowing which command line options we should use to modify the behaviour of our commands to suit out needs. A lot of these have both a long hand and short hand version. eg. Above you will notice that to list all directory entries (including hidden files) we can use the option -a or --all (remember from last section what files and directories beginning with a . ";
	// N 77
	c = c + s + "mkdir linuxtutorialwork";
	k = k + s + "Creating a directory is pretty easy. The command we are after is mkdir which is short for Make Directory.";
	// N 78
	c = c + s + "mkdir /home/ryan/foo";
	k = k + s + "Creating a directory is pretty easy. The command we are after is mkdir which is short for Make Directory.";
	// N 79
	c = c + s + "mkdir ~/linuxtutorialwork/dir2";
	k = k + s + "Creating a directory is pretty easy. The command we are after is mkdir which is short for Make Directory.";
	// N 80
	c = c + s + "mkdir -pv linuxtutorialwork/foo/bar";
	k = k + s + "The first one is -p which tells mkdir to make parent directories as needed (demonstration of what that actually means below). The second one is -v which makes mkdir tell us what it is doing (as you saw in the example above, it normally does not)";
	// N 81
	c = c + s + "rmdir linuxtutorialwork/foo/bar";
	k = k + s + "Creating a directory is pretty easy. Removing or deleting a directory is easy too. One thing to note, however, is that there is no undo when it comes to the command line on Linux (Linux GUI desktop environments typically do provide an undo feature but the command line does not). Just be careful with what you do. The command to remove a directory is rmdir, short for remove directory.";
	// N 82
	c = c + s + "touch example1";
	k = k + s + "A lot of commands that involve manipulating data within a file have the nice feature that they will create a file automatically if we refer to it and it does not exist. In fact we can make use of this very characteristic to create blank files using the command touch.";
	// N 83
	c = c + s + "cp example1 barney";
	k = k + s + "There are many reasons why we may want to make a duplicate of a file or directory. Often before changing something, we may wish to create a duplicate so that if something goes wrong we can easily revert back to the original. The command we use for this is cp which stands for copy.";
	// N 84
	c = c + s + "cp example2 ../../backups";
	k = k + s + "There are many reasons why we may want to make a duplicate of a file or directory. Often before changing something, we may wish to create a duplicate so that if something goes wrong we can easily revert back to the original. The command we use for this is cp which stands for copy.";
	// N 85
	c = c + s + "mv foo2 backups/foo3";
	k = k + s + "To move a file we use the command mv which is short for move. It operates in a similar way to cp. One slight advantage is that we can move directories without having to provide the -r option.";
	// N 86
	c = c + s + "mv linuxtutorialwork/testdir /home/ryan/linuxtutorialwork/fred";
	k = k + s + "Now just as above with the command touch, we can use the basic behaviour of the command mv in a creative way to achieve a slighly different outcome. Normally mv will be used to move a file or directory into a new directory. As we saw on line 4 above, we may provide a new name for the file or directory and as part of the move it will also rename it. Now if we specify the destination to be the same directory as the source, but with a different name, then we have effectively used mv to rename a file or directory.";
	// N 87
	c = c + s + "rm example1";
	k = k + s + "As with rmdir, removing a file is an action that may not be undone so be careful. The command to remove or delete a file is rm which stands for remove.";
	// N 88
	c = c + s + "rm -r backups";
	k = k + s + "When rm is run with the -r option it allows us to remove directories and all files and directories contained within.";
	// N 89
	c = c + s + "mkdir test/";
	k = k + s + "Make Directory - ie. Create a directory.";
	// N 90
	c = c + s + "rmdir dir/";
	k = k + s + "Remove Directory - ie. Delete a directory.";
	// N 91
	c = c + s + "touch test.txt";
	k = k + s + "Create a blank file";
	// N 92
	c = c + s + "rm test.txt";
	k = k + s + "Remove - ie. Delete a file.";
	// N 93
	c = c + s + "ls /home/ryan/linuxtutorialwork/*.txt";
	k = k + s + "Every file with an extension of txt at the end. In this example we have used an absolute path. Wildcards work just the same if the path is absolute or relative.";
	// N 94
	c = c + s + "ls ?i*";
	k = k + s + "Now let's introduce the ? operator. In this example we are looking for each file whose second letter is i. As you can see, the pattern can be built up using several wildcards.";
	// N 95
	c = c + s + "ls *.???";
	k = k + s + "How about every file with a three letter extension. Note that video.mpeg is not matched as the path name must match the given pattern exactly.";
	// N 96
	c = c + s + "ls [sv]*";
	k = k + s + "The range operator ( [ ] ). Unlike the previous 2 wildcards which specified any character, the range operator allows you to limit to a subset of characters. In this example we are looking for every file whose name either begins with a s or v";
	// N 97
	c = c + s + "ls *[0-9]";
	k = k + s + "With ranges we may also include a set by using a hyphen.";
	// N 98
	c = c + s + "ls [^a-k]*";
	k = k + s + "We may also reverse a range using the caret ( ^ ) which means look for any character which is not one of the following.";
	// N 99
	c = c + s + "file /home/user/*";
	k = k + s + "Find the file type of every file in a directory.";
	// N 100
	c = c + s + "mv public_html/*.??g public_html/images/";
	k = k + s + "Move all files of type either jpg or png (image files) into another directory.";
	// N 101
	c = c + s + "ls -lh /home/*/.bash_history";
	k = k + s + "Find out the size and modification time of the .bash_history file in every users home directory. (.bash_history is a file in a typical users home directory that keeps a history of commands the user has entered on the command line";
	
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("Linux");
});
