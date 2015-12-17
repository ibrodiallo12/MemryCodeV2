$(function(){
	// Introduction word
	var w = "Easily and Quickly memorize HTML tag and your keyboard like a GEEK....";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	
	// N 1	
	c = "<title>This is a title</title>";
	k = "Title of the page in HTML";
	// N 2
	c = c + s + "<img src=\"image.jpg\" />";
	k = k + s + "Print an Image .jpg in a page";
	// N 3
	c = c + s + "<!DOCTYPE html>\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>Title</title>\n\t</head>\n\t<body>\n\t</body>\n</html>";
	k = k + s + "Structuring basic html tag";
	// N 4
	c = c + s + "<p>Hello!<br />Welcome to my website.</p>";
	k = k + s + "Paragraph with a Line Break";
	// N 5
	c = c + s + "<meta charset=\"utf-8\" />";
	k = k + s + "Specify the character encoding for the HTML document";
	// N 6
	c = c + s + "<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>\n<h4>This is heading 4</h4>\n<h5>This is heading 5</h5>\n<h6>This is heading 6</h6>";
	k = k + s + "The six different HTML headings";
	// N 7
	c = c + s + "<em>Emphazing text</em>";
	k = k + s + "Format text with a em tag in HTML";
	// N 8
	c = c + s + "<p>This is my first test.<br /> So <em>make allowances</em></p>";
	k = k + s + "Paragraph with emphazing and Line Brand";
	// N 9
	c = c + s + "<p>This is my first test so <strong>make allowances</strong></p>";
	k = k + s + "Pharagraph with a strongly emphazing";
	// N 10
	c = c + s + "<strong>Strongly emphazing</strong>";
	k = k + s + "Strongly emphazing in HTML";
	// N 11
	c = c + s + "<body>\n\t<h1>Very important title</h1>\n\t<h2>Important title</h2>\n\t<h3>Somewhat less important title (sub-title)</h3>\n\t<h4>Not very important title</h4>\n\t<h5>Not important title</h5>\n\t<h6>Title that is really not important at all</h6>\n</body>";
	k = k + s + "The six different HTML headings in body";
	// N 12
	c = c + s + "<h1>Very important title</h1>";
	k = k + s + "Heading 1 (Very important title) in HTML";
	// N 13
	c = c + s + "<h2>Important title</h2>";
	k = k + s + "Heading 2 in HTML (Important title)";
	// N 14
	c = c + s + "<h3>Somewhat less important title</h3>";
	k = k + s + "Heading 3 (Somewhat less important title a sub-title)";
	// N 15
	c = c + s + "<h4>Not very important title</h4>";
	k = k + s + "Heading 4 (Not very important title in HTML)";
	// N 16
	c = c + s + "<h5>Not important title</h5>";
	k = k + s + "Heading 5 (Not important title in HTML)";
	// N 17
	c = c + s + "<h6>Title that is really not important at all</h6>";
	k = k + s + "Heading 6 (Title that is really not important at all)";
	// N 18
	c = c + s + "<body>Content of my page</body>";
	k = k + s + "A body tag in HTML";
	// N 19
	c = c + s + "<!-- A comment -->";
	k = k + s + "A simple comment in HTML";
	// N 20
	c = c + s + "<img src=\"image.png\" />";
	k = k + s + "Print an Image .png in a page";
	// N 21
	c = c + s + "<img src=\"image.gif\" />";
	k = k + s + "Print an Image .gif in a page";
	// N 22
	c = c + s + "<link rel=\"stylesheet\" href=\"style.css\" />";
	k = k + s + "Call a stylesheet in HTML";
	// N 23
	c = c + s + "<p>This is my first test so <mark>make allowances</mark></p>";
	k = k + s + "Marking text with mark tag in HTML";
	// N 24
	c = c + s + "<ul>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ul>";
	k = k + s + "An unordered HTML list";
	// N 25
	c = c + s + "<ol>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ol>";
	k = k + s + "An ordered HTML lists";
	// N 26
	c = c + s + "<ol start=\"50\">\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ol>";
	k = k + s + "An ordered HTML lists start at number 50";
	// N 27
	c = c + s + "<a href=\"url\">link text</a>";
	k = k + s + "A hyperlink is an element a text or an image that you can click on and jump to another document.";
	// N 28
	c = c + s + "<a href=\"http://www.w3schools.com/html/\">Visit a HTML tutorial</a>";
	k = k + s + "The link text is the visible part (Visit the W3schools HTML tutorial).";
	// N 29
	c = c + s + "<a href=\"text.html\">My test page</a>";
	k = k + s + "A local link (link to the same web site) is specified with a relative URL (without http://www....).";
	// N 30
	c = c + s + "<a href=\"http://www.openclassrooms.com/\" target=\"_blank\">OC</a>";
	k = k + s + "The target attribute specifies where to open the linked document.";
	// N 31
	c = c + s + "<a href=\"test.html\">\n\t<img src=\"smiley.gif\" alt=\"Go now!\">\n</a>";
	k = k + s + "It is common to use images as links";
	// N 32
	c = c + s + "<a id=\"tips\">Useful Tips Section</a>";
	k = k + s + "Add an id attribute to a <a> element";
	// N 33
	c = c + s + "<p><b>This text is bold</b>.</p>";
	k = k + s + "The HTML <b> element defines bold text without any extra importance.";
	// N 34
	c = c + s + "<p><i>This text is italic</i>.</p>";
	k = k + s + "The HTML <i> element defines italic text without any extra importance.";
	// N 35
	c = c + s + "<h2>HTML <small>Small</small> Formatting</h2>";
	k = k + s + "The HTML <small> element defines small text";
	// N 36
	c = c + s + "<p>My favorite color is <del>blue</del> red.</p>";
	k = k + s + "The HTML <del> element defines deleted (removed) of text.";
	// N 37
	c = c + s + "<p>My favorite <ins>color</ins> is red.</p>";
	k = k + s + "The HTML <ins> element defines inserted (added) text.";
	// N 38
	c = c + s + "<p>This is <sub>subscripted</sub> text.</p>";
	k = k + s + "The HTML <sub> element defines subscripted text.";
	// N 39
	c = c + s + "<p>This is <sup>superscripted</sup> text.</p>";
	k = k + s + "The HTML <sup> element defines superscripted text.";
	// N 40
	c = c + s + "<p>WWF's goal is to:\n<q>Build a future where people live in harmony</q></p>";
	k = k + s + "The HTML <q> element defines a short quotation.";
	// N 41
	c = c + s + "<p>Here is a quote from WWF's website:</p>\n<blockquote cite=\"http://www.worldwildlife.org/who/index.html\">\nFor 50 years WWF has been protecting the future of nature.\nThe world's leading conservation organization\nWWF works in 100 countries and is supported by\n1.2 million members in the United States and\nclose to 5 million globally.\n</blockquote>";
	k = k + s + "The HTML <blockquote> element defines a quoted section.";
	// N 42
	c = c + s + "<p>The <abbr title=\"World Health Organization\">WHO</abbr>\nWas founded in 1948.</p>";
	k = k + s + "The HTML <abbr> element defines an abbreviation or an acronym.";
	// N 43
	c = c + s + "<p>The <dfn title=\"World Health Organization\">WHO</dfn>\nWas founded in 1948.</p";
	k = k + s + "The HTML <dfn> element defines the definition of a term or an abbreviation.";
	// N 44
	c = c + s + "<address>Written by Jon Doe.<br>\nVisit us at:<br>\nExample.com<br>\nBox 564 Disneyland<br>\nUSA\n</address>";
	k = k + s + "The HTML <address> element defines contact information (author/owner) of a document or article.";
	// N 45
	c = c + s + "<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>";
	k = k + s + "The HTML <cite> element defines the title of a work.";
	// N 46
	c = c + s + "<bdo dir=\"rtl\">This text will be written from right to left</bdo>";
	k = k + s + "The HTML <bdo> element defines bi-directional override.";
	// N 47
	c = c + s + "<code>\n\talert(\"Hello world\");\n</code>";
	k = k + s + "The HTML <code> element defines programming code sample:";
	// N 48
	c = c + s + "<!--[if IE 8]>\n\t.... some HTML here ....\n<![endif]-->";
	k = k + s + "You might stumble upon conditional comments in HTML";
	// N 49
	c = c + s + "<style>\n\tbody{background-color:lightgray}\n\th1{color:blue}\n\tp{color:green}\n</style>";
	k = k + s + "Internal - using a <style> element in the HTML <head> section";
	// N 50
	c = c + s + "<h1 style=\"color:blue\">This is a Blue Heading</h1>";
	k = k + s + "Inline styling is useful for applying a unique style to a single HTML element";
	// N 51
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<td>Jill</td>\n\t\t<td>Smith</td>\n\t\t<td>50</td>\n\t</tr>\n\t<tr>\n\t\t<td>Eve</td>\n\t\t<td>Jackson</td>\n\t\t<td>94</td>\n\t</tr>\n</table>";
	k = k + s + "Defining HTML Tables";
	// N 52
	c = c + s + "<table border=\"1\" style=\"width:100%\">\n\t<tr>\n\t\t<td>Jill</td>\n\t\t<td>Smith</td>\n\t\t<td>50</td>\n\t</tr>\n\t<tr>\n\t\t<td>Eve</td>\n\t\t<td>Jackson</td>\n\t\t<td>94</td>\n\t</tr>\n</table>";
	k = k + s + "An HTML Table with a Border Attribute. If you do not specify a border for the table. The will be displayed without borders.";
	// N 53
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<th>Name</th>\n\t\t<th colspan=\"2\">Telephone</th>\n\t</tr>\n\t<tr>\n\t\t<td>Bill Gates</td>\n\t\t<td>555 77 854</td>\n\t\t<td>555 77 855</td>\n\t</tr>\n</table>";
	k = k + s + "Table Cells that Span Many Columns. To make a cell span more than one column use the colspan attribute";
	// N 54
	c = c + s + "<table style=\"width:100%\">\n\t<tr>\n\t\t<th>Name:</th>\n\t\t<td>Bill Gates</td>\n\t</tr>\n\t<tr>\n\t\t<th rowspan=\"2\">Telephone:</th>\n\t\t<td>555 77 854</td>\n\t</tr>\n\t<tr>\n\t\t<td>555 77 855</td>\n\t</tr>\n</table>";
	k = k + s + "Table Cells that Span Many Rows. To make a cell span more than one row use the rowspan attribute";
	// N 55
	c = c + s + "<iframe src=\"URL\"></iframe>";
	k = k + s + "The syntax for adding an iframe";
	// N 56
	c = c + s + "<iframe src=\"demo_iframe.htm\" width=\"200\" height=\"200\"></iframe>";
	k = k + s + "Iframe - Set Height and Width. Use the height and width attributes to specify the size.";
	// N 57
	c = c + s + "<iframe src=\"demo_iframe.html\" frameborder=\"0\"></iframe>";
	k = k + s + "Iframe - Remove the Border. The frameborder attribute specifies whether or not to display a border around the iframe.";
	// N 58
	c = c + s + "<iframe src=\"demo_iframe.html\" name=\"iframe_a\"></iframe>\n<p>\n\t<a href=\"http://www.w3schools.com\" target=\"iframe_a\">W3S</a>\n</p>";
	k = k + s + "Use iframe as a Target for a Link. An iframe can be used as the target frame for a link.The target attribute of the link must refer to the name attribute of the iframe";
	// N 59
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"Hello World!\";\n</script>";
	k = k + s + "The HTML <script> Tag. The <script> tag is used to define a client-side script such as a JavaScript. The <script> element either contains scripting statements or it points to an external script file through the src attribute.";
	// N 60
	c = c + s + "<script>\n\tdocument.getElementById(\"demo\").innerHTML = \"Hello World!\";\n</script>\n<noscript>Your browser does not support JavaScript!</noscript>";
	k = k + s + "The HTML <noscript> Tag. The <noscript> tag is used to provide an alternate content for users that have disabled scripts in their browser or have a browser that doesn't support client-side scripting.";
	// N 61
	c = c + s + "<!DOCTYPE html>\n\t<head>\n\t\t<link rel=\"stylesheet\" href=\"mystyle.css\">\n\t\t<title>Page Title</title>\n\t</head>";
	k = k + s + "The HTML <head> Element. The <head> element is a container for meta data (data about data).";
	// N 62
	c = c + s + "<meta name=\"keywords\" content=\"HTML CSS XML XHTML JavaScript\">";
	k = k + s + "The HTML <meta> Element. The <meta> element is used to specify page description keywords author and other metadata.";
	// N 63
	c = c + s + "<meta name=\"description\" content=\"Tutorials on HTML and CSS\"/>";
	k = k + s + "Define a description of your web page";
	// N 64
	c = c + s + "<meta name=\"author\" content=\"Hege Refsnes\">";
	k = k + s + "Define the author of a page";
	// N 65
	c = c + s + "<base href=\"http://www.w3schools.com/images/\" target=\"_blank\">";
	k = k + s + "The HTML <base> Element. The <base> element specifies the base URL and base target for all relative URLs in a page";
	// N 66
	c = c + s + "< &lt; &#60;\n> &gt; &#62;\n& &amp; &#38;";
	k = k + s + "HTML Entities. Some characters are reserved in HTML. If you use the less than (<) or greater than (>) signs in your text. The browser might mix them with tags.";
	// N 67
	c = c + s + "<form>\n\t<!--form elements-->\n</form>";
	k = k + s + "The <form> Element HTML forms are used to collect user input. The <form> element defines an HTML form";
	// N 68
	c = c + s + "<form>\n\tFirst name:<br>\n\t<input type=\"text\" name=\"firstname\">\n<br>\n\tLast name:<br>\n\t<input type=\"text\" name=\"lastname\">\n</form>";
	k = k + s + "Text Input <input type=\"text\"> defines a one-line input field for text input";
	// N 69
	c = c + s + "<form>\n\t<input type=\"radio\" name=\"race\" value=\"human\" checked>Human\n<br>\n\t<input type=\"radio\" name=\"race\" value=\"animal\">Animal\n</form>";
	k = k + s + "<input type=\"radio\"> defines a radio button. Radio buttons let a user select ONE of a limited number of choices:";
	// N 70
	c = c + s + "<form action=\"action_page.php\">\n\tFirst name:<br>\n<input type=\"text\" name=\"firstname\" value=\"Mickey\">\n<br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>";
	k = k + s + "The Submit Button <input type=\"submit\"> defines a button for submitting a form to a form-handler.The form-handler is typically a server page with a script for processing input data.";
	// N 71
	c = c + s + "<form action=\"action_page.php\" method=\"GET\">\n<!--OR-->\n<form action=\"action_page.php\" method=\"POST\">";
	k = k + s + "The Method Attribute. The method attribute specifies the HTTP method (GET or POST) to be used when submitting the forms.";
	// N 72
	c = c + s + "<form action=\"action_page.php\">\n\t<fieldset>\n\t\t<legend>Personal information:</legend>\n\t\tFirst name:<br>\n\t\t<input type=\"text\" name=\"firstname\" value=\"Mickey\">\n\t\t<br>\n\t\tLast name:<br>\n\t\t<input type=\"text\" name=\"lastname\" value=\"Mouse\">\n\t\t<br><br>\n\t\t<input type=\"submit\" value=\"Submit\">\n\t</fieldset>\n</form>";
	k = k + s + "Grouping Form Data with <fieldset>. The <fieldset> element groups related data in a form. The <legend> element defines a caption for the <fieldset> element.";
	// N 73
	c = c + s + "<form action=\"action_page.php\" method=\"GET\" target=\"_blank\"\naccept-charset=\"UTF-8\"\nenctype=\"application/x-www-form-urlencoded\"\n autocomplete=\"off\" novalidate>\n\t.\n\tform elements\n\t.\n</form>";
	k = k + s + "HTML Form Attributes. An HTML <form> element, with all possible attributes set, will look like this example";
	// N 74
	c = c + s + "<select name=\"cars\">\n\t<option value=\"volvo\">Volvo</option>\n\t<option value=\"saab\">Saab</option>\n\t<option value=\"fiat\">Fiat</option>\n\t<option value=\"audi\">Audi</option>\n</select>";
	k = k + s + "The <select> Element (Drop-Down List). The <select> element defines a drop-down list.";
	// N 75
	c = c + s + "<option value=\"fiat\" selected>Fiat</option>";
	k = k + s + "The <option> elements defines the options to select. The list will normally show the first item as selected.You can add a selected attribute to define a predefined option.";
	// N 76
	c = c + s + "<textarea name=\"message\" rows=\"10\" cols=\"30\">\n\tThe cat was playing in the garden.\n</textarea>";
	k = k + s + "The <textarea> Element. The <textarea> element defines a multi-line input field (a text area)";
	// N 77
	c = c + s + "<button type=\"button\" onclick=\"alert('Hello World')\">Click</button>";
	k = k + s + "The <button> Element. The <button> element defines a a clickable button";
	// N 78
	c = c + s + "<form action=\"action_page.php\">\n<input list=\"browsers\">\n<datalist id=\"browsers\">\n\t<option value=\"Internet Explorer\">\n\t<option value=\"Firefox\">\n\t<option value=\"Chrome\">\n\t<option value=\"Opera\">\n\t<option value=\"Safari\">\n</datalist>\n</form>";
	k = k + s + "HTML5 <datalist> Element. The <datalist> element specifies a list of pre-defined options for an <input> element. Users will see a drop-down list of pre-defined options as they input data. The list attribute of the <input> element, must refer to the id attribute of the <datalist> element.";
	// N 79
	c = c + s + "<form action=\"action_page.php\">\n\tUsername: <input type=\"text\" name=\"user\">\n\tEncryption: <keygen name=\"security\">\n\t<input type=\"submit\">\n</form>";
	k = k + s + "HTML5 <keygen> Element. The purpose of the <keygen> element is to provide a secure way to authenticate users. The <keygen> element specifies a key-pair generator field in a form. When the form is submitted, two keys are generated, one private and one public.";
	// N 80
	c = c + s + "<form action=\"action_page.php\"\noninput=\"x.value=parseInt(a.value)+parseInt(b.value)\">\n\t0\n\t<input type=\"range\"  id=\"a\" name=\"a\" value=\"50\">\n\t100 +\n\t<input type=\"number\" id=\"b\" name=\"b\" value=\"50\">\n\t=\n\t<output name=\"x\" for=\"a b\"></output>\n\t<br><br>\n\t<input type=\"submit\">\n</form>";
	k = k + s + "HTML5 <output> Element. The <output> element represents the result of a calculation (like one performed by a script).";
	// N 81
	c = c + s + "<p>This is some text in a paragraph.</p>";
	k = k + s + "HTML <p> Tag.  The <p> tag defines a paragraph. Browsers automatically add some space (margin) before and after each <p> element. The margins can be modified with CSS (with the margin properties).";
	// N 82
	c = c + s + "<object data=\"horse.wav\">\n\t<param name=\"autoplay\" value=\"true\">\n</object>";
	k = k + s + "HTML <param> Tag.  The <param> tag is used to define parameters for plugins embedded with an <object> element. Tip: HTML 5 also includes two new elements for playing audio or video: The <audio> and <video> tags.";
	// N 83
	c = c + s + "param {\n\tdisplay: none;\n}";
	k = k + s + "HTML <param> Tag. Default CSS Settings, Most browsers will display the <param> element with the following default values";
	// N 84
	c = c + s + "<pre>\nText in a pre element\nis displayed in a fixed-width\nfont, and it preserves\nboth paces and\nline breaks\n</pre>";
	k = k + s + "HTML <pre> Tag.  The <pre> tag defines preformatted text. Text in a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.";
	// N 85
	c = c + s + "pre {\n\tdisplay: block;\n\tfont-family: monospace;\n\twhite-space: pre;\n\tmargin: 1em 0;\n}";
	k = k + s + "HTML <pre> Tag. Default CSS Settings. Most browsers will display the <pre> element with the following default value";
	// N 86
	c = c + s + "<progress value=\"22\" max=\"100\"></progress>";
	k = k + s + "HTML <progress> Tag. The <progress> tag represents the progress of a task.";
	// N 87
	c = c + s + "<p>WWF's goal is to:\n<q>Build a future where people live in harmony with nature.</q>\nWe hope they succeed.</p>";
	k = k + s + "HTML <q> Tag.  The <q> tag defines a short quotation. Browsers normally insert quotation marks around the quotation.";
	// N 88
	c = c + s + "<p><s>My car is blue.</s></p>\n<p>My new car is silver.</p>";
	k = k + s + " The <s> tag specifies text that is no longer correct, accurate or relevant. The <s> tag should not be used to define replaced or deleted text, use the <del> tag to define replaced or deleted text.";
	// N 89
	c = c + s + "<samp>Sample output from a computer program</samp>";
	k = k + s + "HTML <samp> Tag.  The <samp> tag is a phrase tag. It defines sample output from a computer program. Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.";
	// N 90
	c = c + s + "<section>\n<h1>WWF</h1>\n<p>The World Wide Fund for Nature (WWF) is....</p>\n</section>";
	k = k + s + "HTML <section> Tag.  The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.";
	// N 91
	c = c + s + "<p>W3Schools.com - the world's largest web development site.</p>\n<p><small>Copyright 1999-2050 by Refsnes Data</small></p>";
	k = k + s + "HTML <small> Tag.  The <small> tag defines smaller text (and other side comments).";
	// N 92
	c = c + s + "<audio controls>\n\t<source src=\"horse.ogg\" type=\"audio/ogg\">\n\t<source src=\"horse.mp3\" type=\"audio/mpeg\">\n\tYour browser does not support the audio element.\n</audio>";
	k = k + s + "HTML <source> Tag.  The <source> tag is used to specify multiple media resources for media elements, such as <video> and <audio>. The <source> tag allows you to specify alternative video/audio files which the browser may choose from, based on its media type or codec support.";
	// N 93
	c = c + s + "<p>My mother has <span style=\"color:blue\">blue</span> eyes.</p>";
	k = k + s + "HTML <span> Tag.  The <span> tag is used to group inline-elements in a document. The <span> tag provides no visual change by itself. The <span> tag provides a way to add a hook to a part of a text or a part of a document.";
	// N 94
	c = c + s + "<p>Version 1 is <strike>not yet available</strike>now available</p>";
	k = k + s + "The <strike> tag is not supported in HTML5. Use the <del> or <s> tag instead. The <strike> tag defines strikethrough text.";
	// N 95
	c = c + s + "<strong>Strong text</strong>";
	k = k + s + "HTML <strong> Tag. The <strong> tag is a phrase tag. It defines important text. Tip: This tag is not deprecated, but it is possible to achieve richer effect with CSS.";
	// N 96
	c = c + s + "<details>\n\t<summary>Copyright 2014-2015.</summary>\n\t<p> - by MemryCode. All Rights Reserved.</p>\n</details>";
	k = k + s + "HTML <summary> Tag.  The <summary> tag defines a visible heading for the <details> element. The heading can be clicked to view/hide the details.";
	// N 97
	c = c + s + "<table>\n\t<tr>\n\t\t<th>Month</th>\n\t\t<th>Savings</th>\n\t</tr>\n\t<tr>\n\t\t<td>January</td>\n\t\t<td>$100</td>\n\t</tr>\n</table>";
	k = k + s + "HTML <th> Tag. The <th> tag defines a header cell in an HTML table. An HTML table has two kinds of cells:-Header cells - contains header information (created with the <th> element). -Standard cells - contains data (created with the <td> element)";
	// N 98
	c = c + s + "<head>\n\t<title>HTML Reference</title>\n</head>";
	k = k + s + "HTML <title> Tag.  The <title> tag is required in all HTML documents and it defines the title of the document. The <title> element:-defines a title in the browser toolbar -provides a title for the page when it is added to favorites -displays a title for the page in search-engine resul";
	// N 99
	c = c + s + "<video width=\"320\" height=\"240\" controls>\n\t<source src=\"forrest_gump.mp4\" type=\"video/mp4\">\n\t<source src=\"forrest_gump.ogg\" type=\"video/ogg\">\n\t<track src=\"subtitles_en.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n\t<track src=\"subtitles_no.vtt\" kind=\"subtitles\" srclang=\"no\" label=\"Norwegian\">\n</video>";
	k = k + s + "HTML <track> Tag. The <track> tag specifies text tracks for media elements (<audio> and <video>). This element is used to specify subtitles, caption files or other files containing text, that should be visible when the media is playing";
	// N 100
	c = c + s + "<p>This is a <u>parragraph</u>.</p>";
	k = k + s + "The <u> tag represents some text that should be stylistically different from normal text, such as misspelled words or proper nouns in Chinese.";
	// N 101
	c = c + s + "<var>Variable</var>";
	k = k + s + "The <var> tag is a phrase tag. It defines a variable.";
	// N 102
	c = c + s + "<video width=\"320\" height=\"240\" controls>\n\t<source src=\"movie.mp4\" type=\"video/mp4\">\n\t<source src=\"movie.ogg\" type=\"video/ogg\">\n\tYour browser does not support the video tag\n</video>";
	k = k + s + "The <video> tag specifies video, such as a movie clip or other video streams. Currently, there are 3 supported video formats for the <video> element: MP4, WebM, and Ogg";
	// N 103
	c = c + s + "<p>To learn AJAX, you must be familiar with\nthe XML<wbr>Http<wbr>Request Object.</p>";
	k = k + s + "The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.";
	// N 104
	c = c + s + "<!--This is a comment.\nComments are not displayed in the browser-->\n<p>This is a paragraph.</p>";
	k = k + s + "The comment tag is used to insert comments in the source code. Comments are not displayed in the browsers. You can use comments to explain your code, which can help you when you edit the source code at a later date. This is especially useful if you have a lot of code.";
	// N 105
	c = c + s + "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Title of the document</title>\n\t</head>\n\n\t<body>\n\t\tThe content of the document\n\t</body>\n\n</html>";
	k = k + s + "The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag. The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.";
	// N 106
	c = c + s + "Can I get this\n<acronym title=\"as soon as possible\">ASAP</acronym>?";
	k = k + s + "The <acronym> tag is not supported in HTML5. Use the <abbr> tag instead. The <acronym> tag defines an acronym.";
	// N 107
	c = c + s + "<applet code=\"Bubbles.class\" width=\"350\" height=\"350\">\n\tJava applet that draws animated bubbles.\n</applet>";
	k = k + s + "The <applet> tag is not supported in HTML5. Use the <object> tag instead. The <applet> tag defines an embedded applet.";
	// N 109
	c = c + s + "<img src=\"planets.gif\" width=\"145\" height=\"126\"\nalt=\"Planets\"usemap=\"#planetmap\">\n\n<map name=\"planetmap\">\n\t<area shape=\"rect\" coords=\"0,0,82,126\" href=\"sun.html\" alt=\"Sun\">\n\t<area shape=\"circle\" coords=\"90,58,3\" href=\"mercur.html\" alt=\"Mercury\">\n\t<area shape=\"circle\" coords=\"124,58,8\" href=\"venus.html\" alt=\"Venus\">\n</map>";
	k = k + s + "The <area> tag defines an area inside an image-map (an image-map is an image with clickable areas). The <area> element is always nested inside a <map> tag.";
	// N 110
	c = c + s + "<article>\n\t<h1>Google Chrome</h1>\n\t<p>Google Chrome is a free, open-source web browser\ndeveloped by Google, released in 2008.</p>\n</article>";
	k = k + s + "The <article> tag specifies independent, self-contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.";
	// N 111
	c = c + s + "<p>My family and I visited The Epcot center</p>\n\n<aside>\n\t<h4>Epcot Center</h4>\n\t<p>The EC is a theme park in Disney World, Florida.</p>\n</aside>";
	k = k + s + "The <aside> tag defines some content aside from the content it is placed in. The aside content should be related to the surrounding content.";
	// N 112
	c = c + s + "<footer>\n\t<p>Posted by: Hege Refsnes</p>\n\t<p>Contact: <a href=\"mailto:someone@example.com\">\n\tsomeone@example.com</a>.</p>\n</footer>";
	k = k + s + "The <footer> tag defines a footer for a document or section. A <footer> element should contain information about its containing element.";
	// N 113
	c = c + s + "<form action=\"demo_form.asp\" method=\"get\">\n\tFirst name: <input type=\"text\" name=\"fname\"><br>\n\tLast name: <input type=\"text\" name=\"lname\"><br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>";
	k = k + s + "The <form> tag is used to create an HTML form for user input. The <form> element can contain one or more of the following form elements";
	// N 114
	c = c + s + "<textarea rows=\"4\" cols=\"50\">\n\tAt MeMRyCoDe you will coding to the beat of your thinking!\n</textarea>";
	k = k + s + "The <textarea> tag defines a multi-line text input control. A text area can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).";
	// N 115
	c = c + s + "<button type=\"button\">Click Me!</button>";
	k = k + s + "The <button> tag defines a clickable button. Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.";
	// N 116
	c = c + s + "<select>\n\t<optgroup label=\"Swedish Cars\">\n\t\t<option value=\"volvo\">Volvo</option>\n\t\t<option value=\"saab\">Saab</option>\n\t</optgroup>\n\t<optgroup label=\"German Cars\">\n\t\t<option value=\"mercedes\">Mercedes</option>\n\t\t<option value=\"audi\">Audi</option>\n\t</optgroup>\n</select>";
	k = k + s + "The <optgroup> is used to group related options in a drop-down list. If you have a long list of options, groups of related options are easier to handle for a user.";
	// N 117
	c = c + s + "<form>\n\t<fieldset>\n\t\<legend>Personalia:</legend>\n\t\tName: <input type=\"text\"><br>\n\t\tEmail: <input type=\"text\"><br>\n\t\tDate of birth: <input type=\"text\">\n\t</fieldset>\n</form>";
	k = k + s + "The <fieldset> tag is used to group related elements in a form. The <fieldset> tag draws a box around the related elements.";
	// N 118
	c = c + s + "<figure>\n\t<img src=\"pulpit.jpg\" alt=\"Pulpit\" width=\"304\" height=\"228\">\n\t<figcaption>Fig1. - A view of the P.R in Norway.</figcaption>\n</figure>";
	k = k + s + "The <figcaption> tag defines a caption for a <figure> element. The <figcaption> element can be placed as the first or last child of the <figure> element.";
	// N 119
	c = c + s + "<figure>\n\t<img src=\"pulpit.jpg\" alt=\"Pulpit\" width=\"304\" height=\"228\">\n</figure>";
	k = k + s + "The <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. While the content of the <figure> element is related to the main flow, its position is independent of the main flow, and if removed it should not affect the flow of the document.";
	// N 120
	c = c + s + "<footer>\n\t<p>Posted by: MemryCode</p>\n\t<p>Contact information: <a href=\"mailto:someone@example.com\">\n\tsomeone@example.com</a>.</p>\n</footer>";
	k = k + s + "The <footer> tag defines a footer for a document or section. A <footer> element should contain information about its containing element.";
	// N 121
	c = c + s + "<article>\n\t<header>\n\t\t<h1>Most important heading here</h1>\n\t\t<h3>Less important heading here</h3>\n\t\t<p>Some additional information here</p>\n\t</header>\n\t<p>Building with HTML</p>\n</article>";
	k = k + s + "The <header> element represents a container for introductory content or a set of navigational links. A <header> element typically contains: one or more heading elements (<h1> - <h6> and <hgroup>) :logo or icon :authorship information";
	// N 122
	c = c + s + "<hgroup>\n\t<h1>Welcome to my WWF</h1>\n\t<h2>For a living planet</h2>\n</hgroup>\n<p>The rest of the content...</p>";
	k = k + s + "The <hgroup> tag is used to group heading elements. The <hgroup> element is used to group a set of <h1> to <h6> elements, when a heading has multiple levels (subheadings).";
	// N 123
	c = c + s + "<h1>HTML</h1>\n<p>HTML is a language for describing web pages</p>\n\n<hr>\n\n<h1>CSS</h1>\n<p>CSS defines how to display HTML elements</p>";
	k = k + s + "The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic). The <hr> element is used to separate content (or define a change) in an HTML page.";
	// N 124
	c = c + s + "<body>\n\t<img src=\"jix/w2t.png\" width=\"380\" height=\"70\" />\n\t<!--Image File-->\n</body>";
	k = k + s + "HTML <comment> tag is use for insert a comment in the source code. It's important to easy code readability and understand. You can also write specifiy information inside comments. In this case they will not be display on web document and not visible for the user.";
	// N 125
	c = c + s + "Click Here to open\n<a href=\"http://www.way2tutorial.com\" \n target=\"_blank\">Way2Tutorial Web Development Tutorials</a>";
	k = k + s + "HTML <a> tag defines an anchor link. An anchor to create or set link either internally or externally. A link is a connection from one Web resource to another. Another way link is primary concept to drive one page to another page into a web.";
	// N 126
	c = c + s + "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>Nested Elements Example</title>\n\t</head>\n\t<body>\n\t\t<h1>This is <i>italic</i> heading</h1>\n\t\t<p>This is <u>underlined</u> paragraph</p>\n\t</body>\n</html>";
	k = k + s + "HTML Tag vs. Element. An HTML element is defined by a starting tag. If the element contains other content, it ends with a closing tag. For example <p> is starting tag of a paragraph and </p> is closing tag of the same paragraph but <p>This is paragraph</p> is a paragraph element.";
	// N 127
	c = c + s + "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>The title Attribute Example</title>\n\t</head>\n\t<body>\n\t\t<h3 title=\"Hello HTML!\">Titled Heading Tag Example</h3>\n\t</body>\n</html>";
	k = k + s + "The title Attribute. The title attribute gives a suggested title for the element. They syntax for the title attribute is similar as explained for id attribute:";
	// N 128
	c = c + s + "<p class=\"className1 className2 className3\">My paragraph</p>";
	k = k + s + "The class attribute is used to associate an element with a style sheet, and specifies the class of element. You will learn more about the use of the class attribute when you will learn Cascading Style Sheet (CSS). So for now you can avoid it.";
	// N 129
	c = c + s + "<body>\n\t<p>The following word uses a <b>bold</b> typeface.</p>\n</body>";
	k = k + s + "Bold Text. Anything that appears within <b>...</b> element, is displayed in bold as shown below";
	// N 130
	c = c + s + "<body>\n\t<p>The following word uses a <i>italicized</i> typeface.</p>\n</body>";
	k = k + s + "Italic Text. Anything that appears within <i>...</i> element is displayed in italicized as shown below";
	
	
		
	//PRINT IN THE
	$("#introWord").text(w); 
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("HTML");
});
