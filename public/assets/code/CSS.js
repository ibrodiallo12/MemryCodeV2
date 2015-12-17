$(function(){
	//INTRODUCTION WORD
	var w = "Memorize keyboard and css propriety and make a page beautiful!";
	//The separator in the ARRAY
	var s = "¢";
	// code in the ARRAY
	var c;
	// know not affecte in same ARRAY to code
	var k;
	
	// N 1	
	c = "p {\n\tcolor: red;\n\ttext-align: center;\n}";
	k = "CSS Example. In the example all <p> elements will be center-aligned, with a red text color";
	// N 2
	c = c + s + "p {\n\tcolor: red;\n\t/* This is a single-line comment */\n\ttext-align: center;\n}";
	k = k + s + "CSS Comments. Comments are used to explain your code, and may help you when you edit the source code at a later date. Comments are ignored by browsers.";
	// N 3
	c = c + s + "#para1 {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The id Selector. The id selector uses the id attribute of an HTML element to select a specific element. An id should be unique within a page, so the id selector is used if you want to select a single, unique element. To select an element with a specific id, write a hash character, followed by the id of the element.";
	// N 4
	c = c + s + ".center {\n\ttext-align: center;\n\tcolor: red;\n}";
	k = k + s + "The class Selector. The class selector selects elements with a specific class attribute. To select elements with a specific class, write a period character, followed by the name of the class. In the example. all HTML elements with class=\"center\" will be center-aligned";
	// N 5
	c = c + s + "<head>\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">\n</head>";
	k = k + s + "External Style Sheet. An external style sheet is ideal when the style is applied to many pages. With an external style sheet, you can change the look of an entire Web site by changing just one file. Each page must include a link to the style sheet with the <link> tag. The <link> tag goes inside the head section";
	// N 6
	c = c + s + "body {\n\tbackground-color: lightblue;\n}\nh1 {\n\tcolor: navy;\n\tmargin-left: 20px;\n}";
	k = k + s + "External Style Sheet. An external style sheet can be written in any text editor. The file should not contain any html tags. The style sheet file must be saved with a .css extension. An example of a style sheet file called \"myStyle.css\", is shown below:";
	// N 7
	c = c + s + "<head>\n<style>\nbody {\n\tbackground-color: linen;\n}\nh1 {\n\tcolor: maroon;\n}\n</style>\n</head>";
	k = k + s + "Internal Style Sheet. An internal style sheet should be used when a single document has a unique style. You define internal styles in the head section of an HTML page, inside the <style> tag, like this:";
	// N 8
	c = c + s + "<h1 style=\"color:blue; margin-left:30px;\">This is a heading.</h1>";
	k = k + s + "Inline Styles. An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly! To use inline styles, add the style attribute to the relevant tag. The style attribute can contain any CSS property. The example shows how to change the color and the left margin of a h1 element:";
	// N 9
	c = c + s + "h1 {\n\tcolor: navy;\n\tmargin-left: 20px;\n}\n/* then */\nh1 {\n\tcolor: orange;\n}";
	k = k + s + "Multiple Style Sheets. If some properties have been set for the same selector in different style sheets, the values will be inherited from the more specific style sheet. For example, assume that an external style sheet has the following properties for the <h1> element";
	// N 10
	c = c + s + "body {\n\tbackground-color: #b0c4de;\n}";
	k = k + s + "Background Color. The background-color property specifies the background color of an element.The background color of a page is set like this example";
	// N 11
	c = c + s + "body {\n\tbackground-image: url(\"paper.gif\");\n}";
	k = k + s + "Background Image. The background-image property specifies an image to use as the background of an element. By default, the image is repeated so it covers the entire element. The background image for a page can be set like this example";
	// N 12
	c = c + s + "body {\n\tbackground-image: url(\"gradient_bg.png\");\n}";
	k = k + s + "Background Image - Repeat Horizontally or Vertically. By default, the background-image property repeats an image both horizontally and vertically. Some images should be repeated only horizontally or vertically, or they will look strange, like this example";
	// N 13
	c = c + s + "body {\n\tbackground-image: url(\"gradient_bg.png\");\n\tbackground-repeat: repeat-x;\n}";
	k = k + s + "Background Image - Repeat Horizontally or Vertically.If the image is repeated only horizontally (repeat-x), the background will look better";
	// N 14
	c = c + s + "body {\n\tbackground-image: url(\"img_tree.png\");\n\tbackground-repeat: no-repeat;\n}";
	k = k + s + "Background Image - Set position and no-repeat. Showing the image only once is specified by the background-repeat property";
	// N 15
	c = c + s + "body {\n\tbackground: #ffffff url(\"img_tree.png\") no-repeat right top;\n}";
	k = k + s + "Background - Shorthand property. To shorten the code, it is also possible to specify all the properties in one single property. This is called a shorthand property.";
	// N 16
	c = c + s + "h1 {\n\ttext-align: center;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 17
	c = c + s + "p.date {\n\ttext-align: right;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 18
	c = c + s + "p.main {\n\ttext-align: justify;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 19
	c = c + s + "p.main {\n\ttext-align: left;\n}";
	k = k + s + "Text Alignment. The text-align property is used to set the horizontal alignment of a text. Text can be centered, or aligned to the left or right, or justified.";
	// N 20
	c = c + s + "a {\n\ttext-decoration: none;\n} ";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. The text-decoration property is mostly used to remove underlines from links for design purposes";
	// N 21
	c = c + s + "h1 {\n\ttext-decoration: overline;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 22
	c = c + s + "h2 {\n\ttext-decoration: line-through;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 23
	c = c + s + "h3 {\n\ttext-decoration: underline;\n}";
	k = k + s + "Text Decoration. The text-decoration property is used to set or remove decorations from text. It can also be used to decorate text.";
	// N 24
	c = c + s + "p.uppercase {\n\ttext-transform: uppercase;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 25
	c = c + s + "p.lowercase {\n\ttext-transform: lowercase;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 26
	c = c + s + "p.capitalize {\n\ttext-transform: capitalize;\n}";
	k = k + s + "Text Transformation. The text-transform property is used to specify uppercase and lowercase letters in a text. It can be used to turn everything into uppercase or lowercase letters, or capitalize the first letter of each word.";
	// N 27
	c = c + s + "p {\n\ttext-indent: 50px;\n}";
	k = k + s + "Text Indentation. The text-indent property is used to specify the indentation of the first line of a text.";
	// N 28
	c = c + s + "p {\n\tfont-family: \"Times New Roman\", Times, serif;\n}";
	k = k + s + "Font Family. The font family of a text is set with the font-family property. The font-family property should hold several font names as a \"fallback\" system. If the browser does not support the first font, it tries the next font.";
	// N 29
	c = c + s + "p.normal {\n\tfont-style: normal;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 30
	c = c + s + "p.oblique {\n\tfont-style: oblique;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 31
	c = c + s + "p.italic {\n\tfont-style: italic;\n}";
	k = k + s + "Font Style. The font-style property is mostly used to specify italic text. This property has three values: normal - The text is shown normally. italic - The text is shown in italics. oblique - The text is \"leaning\" (oblique is very similar to italic, but less supported)";
	// N 32
	c = c + s + "p {\n\tfont-size: 14px;\n}";
	k = k + s + "Font Size. The font-size property sets the size of the text. Being able to manage the text size is important in web design. Set Font Size With Pixels;"
	// N 33
	c = c + s + "h1 {\n\tfont-size: 2.5em; /* 40px/16=2.5em */\n}";
	k = k + s + "Font Size. The font-size property sets the size of the text. Being able to manage the text size is important in web design. Set Font Size With Em.";
	// N 34
	c = c + s + "body {\n\tfont-size: 100%;\n}\nh1 {\n\tfont-size: 2.5em;\n}";
	k = k + s + "Font Size. Use a Combination of Percent and Em. The solution that works in all browsers, is to set a default font-size in percent for the <body> element:";
	// N 35
	c = c + s + "/* unvisited link */\na:link {\n\tcolor: #FF0000;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 36
	c = c + s + "/* visited link */\na:visited {\n\tcolor: #00FF00;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 37
	c = c + s + "/* mouse over link */\na:hover {\n\tcolor: #FF00FF;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 38
	c = c + s + "/* selected link */\na:active {\n\tcolor: #0000FF;\n}";
	k = k + s + "Styling Links. Links can be styled with any CSS property (e.g. color, font-family, background, etc.). In addition, links can be styled differently depending on what state they are in.";
	// N 39
	c = c + s + "ul.a {\n\tlist-style-type: circle;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 40
	c = c + s + "ul.b {\n\tlist-style-type: square;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 41
	c = c + s + "ol.c {\n\tlist-style-type: upper-roman;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 42
	c = c + s + "ol.d {\n\tlist-style-type: lower-alpha;\n}";
	k = k + s + "Different List Item Markers. The type of list item marker is specified with the list-style-type property";
	// N 43
	c = c + s + "ul {\n\tlist-style-image: url(\'sqpurple.gif\');\n}";
	k = k + s + "An Image as The List Item Marker. To specify an image as the list item marker, use the list-style-image property";
	// N 44
	c = c + s + "ul {\n\tlist-style-type: none;\n\tpadding: 0px;\n\tmargin: 0px;\n}";
	k = k + s + "Crossbrowser Solution. The example displays the image-marker equally in all browsers";
	// N 45
	c = c + s + "ul li {\n\tbackground-image: url(sqpurple.gif);\n\tbackground-repeat: no-repeat;\n\tbackground-position: 0px center;\n\tpadding-left: 15px;\n}";
	k = k + s + "Crossbrowser Solution. The example displays the image-marker equally in all browsers";
	// N 46
	c = c + s + "ul {\n\tlist-style: square inside url(\"sqpurple.gif\");\n}";
	k = k + s + "List - Shorthand property. The list-style property is a shorthand property. It is used to set all the list properties in one declaration";
	// N 47
	c = c + s + "table, th, td {\n\tborder: 1px solid black;\n}";
	k = k + s + "Table Borders. To specify table borders in CSS, use the border property. The example specifies a black border for <table>, <th>, and <td> elements";
	// N 48
	c = c + s + "table {\n\tborder-collapse: collapse;\n}";
	k = k + s + "Collapse Borders. The border-collapse property sets whether the table borders are collapsed into a single border or separated";
	// N 49
	c = c + s + "table, th, td {\n\tborder: 1px solid black;\n}";
	k = k + s + "Collapse Borders. The border-collapse property sets whether the table borders are collapsed into a single border or separated";
	// N 50
	c = c + s + "table {\n\twidth: 100%;\n}\nth {\n\theight: 50px;\n}";
	k = k + s + "Table Width and Height. Width and height of a table is defined by the width and height properties.The example sets the width of the table to 100%, and the height of the <th> elements to 50px";
	// N 51
	c = c + s + "th {\n\ttext-align: left;\n}";
	k = k + s + "Horizontal Text Alignment. The text-align property sets the horizontal alignment, like left, right, or center.";
	// N 52
	c = c + s + "td {\n\theight: 50px;\n\tvertical-align: bottom;\n}";
	k = k + s + "Vertical Text Alignment. The vertical-align property sets the vertical alignment, like top, bottom, or middle.";
	// N 53
	c = c + s + "td {\n\tpadding: 15px;\n}";
	k = k + s + "Table Padding. To control the space between the border and content in a table, use the padding property on <td> and <th> elements:";
	// N 54
	c = c + s + "table, td, th {\n\tborder: 1px solid green;\n}\nth {\n\tbackground-color: green;\n\tcolor: white;\n}";
	k = k + s + "Table Color. The example below specifies the color of the borders, and the text and background color of <th> elements:";
	// N 55
	c = c + s + "div {\n\twidth: 320px;\n\tpadding: 10px;\n\tborder: 5px solid gray;\n\tmargin: 0;\n}";
	k = k + s + "Width and Height of an Element. In order to set the width and height of an element correctly in all browsers, you need to know how the box model works.";
	// N 56
	c = c + s + "p.one {\n\tborder-style: solid;\n\tborder-width: 5px;\n}";
	k = k + s + "border-style values and Border Width. The border-width property is used to set the width of the border.";
	// N 57
	c = c + s + "p.two {\n\tborder-style: solid;\n\tborder-width: medium;\n}";
	k = k + s + "border-style values and Border Width. The border-width property is used to set the width of the border";
	// N 58
	c = c + s + "p.one {\n\tborder-style: solid;\n\tborder-color: red;\n}";
	k = k + s + "Border Color. The border-color property is used to set the color of the border.";
	// N 59
	c = c + s + "p.two {\n\tborder-style: solid;\n\tborder-color: #98bf21;\n}";
	k = k + s + "Border Color. The border-color property is used to set the color of the border.";
	// N 60
	c = c + s + "p {\n\tborder-top-style: dotted;\n\tborder-right-style: solid;\n\tborder-bottom-style: dotted;\n\tborder-left-style: solid;\n}";
	k = k + s + "Border - Individual sides. In CSS it is possible to specify different borders for different sides:";
	// N 61
	c = c + s + "p {\n\tborder: 5px solid red;\n}";
	k = k + s + "Border - Shorthand property. As you can see from the examples above, there are many properties to consider when dealing with borders.";
	// N 62
	c = c + s + "p {\n\tmargin-top: 100px;\n\tmargin-bottom: 100px;\n\tmargin-right: 150px;\n\tmargin-left: 50px;\n}";
	k = k + s + "Margin - Individual sides. In CSS, it is possible to specify different margins for different sides of an element";
	// N 63
	c = c + s + "p {\n\tmargin: 100px 50px;\n}";
	k = k + s + "Margin - Shorthand property. To shorten the code, it is possible to specify all the margin properties in one property. This is called a shorthand property.";
	// N 64
	c = c + s + "p {\n\tpadding-top: 25px;\n\tpadding-right: 50px;\n\tpadding-bottom: 25px;\n\tpadding-left: 50px;\n}";
	k = k + s + "Padding - Individual sides. In CSS, it is possible to specify different padding for different sides:";
	// N 65
	c = c + s + "p {\n\tpadding: 25px 50px;\n}";
	k = k + s + "Padding - Shorthand property. To shorten the code, it is possible to specify all the padding properties in one property. This is called a shorthand property.";
	// N 66
	c = c + s + "h1.hidden {\n\tvisibility: hidden;\n}";
	k = k + s + "Hiding an Element - display:none or visibility:hidden. Hiding an element can be done by setting the display property to \"none\" or the visibility property to \"hidden\".";
	// N 67
	c = c + s + "h1.hidden {\n\tdisplay: none;\n}";
	k = k + s + "Hiding an Element - display:none or visibility:hidden. Display:none hides an element, and it will not take up any space. The element will be hidden, and the page will be displayed as if the element is not there:";
	// N 68
	c = c + s + "li {\n\tdisplay: inline;\n}";
	k = k + s + "Changing How an Element is Displayed. Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow web standards. The example displays <li> elements as inline elements:";
	// N 69
	c = c + s + "span {\n\tdisplay: block;\n}";
	k = k + s + "Changing How an Element is Displayed. Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow web standards. The example displays <span> elements as block elements:";
	// N 70
	c = c + s + "p.pos_fixed {\n\tposition: fixed;\n\ttop: 30px;\n\tright: 5px;\n}";
	k = k + s + "Fixed Positioning. An element with a fixed position is positioned relative to the browser window, and will not move even if the window is scrolled";
	// N 71
	c = c + s + "h2.pos_left {\n\tposition: relative;\n\tleft: -20px;\n}";
	k = k + s + "Relative Positioning. A relative positioned element is positioned relative to its normal position";
	// N 72
	c = c + s + "h2.pos_right {\n\tposition: relative;\n\tleft: 20px;\n}";
	k = k + s + "Relative Positioning. A relative positioned element is positioned relative to its normal position";
	// N 73
	c = c + s + "h2.pos_top {\n\tposition: relative;\n\ttop: -50px;\n}";
	k = k + s + "Relative Positioning. The content of relatively positioned elements can be moved and overlap other elements, but the reserved space for the element is still preserved in the normal flow.";
	// N 74
	c = c + s + "h2 {\n\tposition: absolute;\n\tleft: 100px;\n\ttop: 150px;\n}";
	k = k + s + "Absolute Positioning. An absolute position element is positioned relative to the first parent element that has a position other than static. If no such element is found, the containing block is <html>";
	// N 75
	c = c + s + "img {\n\tposition: absolute;\n\tleft: 0px;\n\ttop: 0px;\n\tz-index: -1;\n}";
	k = k + s + "Overlapping Elements. When elements are positioned outside the normal flow, they can overlap other elements. The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).";
	// N 76
	c = c + s + "img {\n\tfloat: right;\n}";
	k = k + s + "How Elements Float. Elements are floated horizontally, this means that an element can only be floated left or right, not up or down. A floated element will move as far to the left or right as it can. Usually this means all the way to the left or right of the containing element.";
	// N 77
	c = c + s + ".thumbnail {\n\tfloat: left;\n\twidth: 110px;\n\theight: 90px;\n\tmargin: 5px;\n}";
	k = k + s + "Floating Elements Next to Each Other. If you place several floating elements after each other, they will float next to each other if there is room. Here we have made an image gallery using the float property:";
	// N 78
	c = c + s + ".text_line {\n\tclear: both;\n}";
	k = k + s + "Turning off Float - Using Clear. Elements after the floating element will flow around it. To avoid this, use the clear property. The clear property specifies which sides of an element other floating elements are not allowed.";
	// N 79
	c = c + s + ".center {\n\tmargin-left: auto;\n\tmargin-right: auto;\n\twidth: 70%;\n\tbackground-color: #b0e0e6;\n}";
	k = k + s + "Center Aligning Using the margin Property. Block elements can be center-aligned by setting the left and right margins to \"auto\".";
	// N 80
	c = c + s + ".right {\n\tposition: absolute;\n\tright: 0px;\n\twidth: 300px;\n\tbackground-color: #b0e0e6;\n}";
	k = k + s + "Left and Right Aligning Using the position Property. One method of aligning elements is to use absolute positioning:";
	// N 81
	c = c + s + ".right {\n\tfloat: right;\n\twidth: 300px;\n\tbackground-color: #b0e0e6;\n}";
	k = k + s + "Left and Right Aligning Using the float Property. One method of aligning elements is to use the float property:";
	// N 82
	c = c + s + "div p {\n\tbackground-color: yellow;\n}";
	k = k + s + "Descendant Selector. The descendant selector matches all element that are descendants of a specified element. The following example selects all <p> elements inside <div> elements";
	// N 83
	c = c + s + "div > p {\n\tbackground-color: yellow;\n}";
	k = k + s + "Child Selector. The child selector selects all elements that are the immediate children of a specified element. The following example selects all <p> elements that are immediate children of a <div> element:";
	// N 84
	c = c + s + "div + p {\n\tbackground-color: yellow;\n}";
	k = k + s + "Adjacent Sibling Selector. The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.Sibling elements must have the same parent element, and \"adjacent\" means \"immediately following\".";
	// N 85
	c = c + s + "div ~ p {\n\tbackground-color: yellow;\n}";
	k = k + s + "General Sibling Selector. The general sibling selector selects all elements that are siblings of a specified element. The example selects all <p> elements that are siblings of <div> elements";
	// N 86
	c = c + s + "a.highlight:hover {\n\tcolor: #ff0000;\n}";
	k = k + s + "Pseudo-classes and CSS Classes. Pseudo-classes can be combined with CSS classes";
	// N 87
	c = c + s + "p:first-child {\n\tcolor: blue;\n}";
	k = k + s + "Match the first <p> element. In the following example, the selector matches any <p> element that is the first child of any element";
	// N 88
	c = c + s + "p i:first-child {\n\tcolor: blue;\n}";
	k = k + s + "Match the first <i> element in all <p> elements. In the example, the selector matches the first <i> element in all <p> elements";
	// N 89
	c = c + s + "p:first-child i {\n\tcolor: blue;\n}";
	k = k + s + "Match all <i> elements in all first child <p> elements. In the example, the selector matches all <i> elements in <p> elements that are the first child of another element";
	// N 90
	c = c + s + "<head>\n<style>\n\tq:lang(no) {\n\t\tquotes: \"~\" \"~\";\n\t}\n</style>\n</head>\n<body>\n<p>Some text <q lang=\"no\">A quote in a paragraph</q> Some text.</p\n</body>";
	k = k + s + "CSS - The :lang Pseudo-class. The :lang pseudo-class allows you to define special rules for different languages.";
	// N 91
	c = c + s + "p::first-line {\n\tcolor: #ff0000;\n\tfont-variant: small-caps;\n}";
	k = k + s + "The ::first-line Pseudo-element. The ::first-line pseudo-element is used to add a special style to the first line of a text. The ::first-line pseudo-element can only be applied to block elements.";
	// N 92
	c = c + s + "p::first-letter {\n\tcolor: #ff0000;\n\tfont-size: xx-large;\n}";
	k = k + s + "The ::first-letter Pseudo-element. The ::first-letter pseudo-element is used to add a special style to the first letter of a text. The ::first-letter pseudo-element can only be applied to block elements.";
	// N 93
	c = c + s + "p.intro::first-letter {\n\tcolor: #ff0000;\n\tfont-size:200%;\n}";
	k = k + s + "Pseudo-elements and CSS Classes. Pseudo-elements can be combined with CSS classes";
	// N 94
	c = c + s + "p::first-letter {\n\tcolor: #ff0000;\n\tfont-size: xx-large;\n}\np::first-line {\n\tcolor: #0000ff;\n\tfont-variant: small-caps;\n}";
	k = k + s + "Multiple Pseudo-elements. Several pseudo-elements can also be combined. In the following example, the first letter of a paragraph will be red, in an xx-large font size. The rest of the first line will be blue, and in small-caps. The rest of the paragraph will be the default font size and color";
	// N 95
	c = c + s + "h1::before {\n\tcontent: url(smiley.gif);\n}";
	k = k + s + "CSS - The ::before Pseudo-element. The ::before pseudo-element can be used to insert some content before the content of an element. The example inserts an image before each <h1> element";
	// N 96
	c = c + s + "h1::after {\n\tcontent: url(smiley.gif);\n}";
	k = k + s + "CSS - The ::after Pseudo-element. The ::after pseudo-element can be used to insert some content after the content of an element. The example inserts an image after each <h1> element:";
	// N 97
	c = c + s + "::selection {\n\tcolor: red;\n\tbackground: yellow;\n}";
	k = k + s + "CSS - The ::selection Pseudo-element. The ::selection pseudo-element matches the portion of an element that is selected by a user. The CSS properties can be applied to ::selection: color, background, cursor, and outline. The example makes the selected text red on a yellow background:";
	// N 98
	c = c + s + "ul {\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding: 0;\n}";
	k = k + s + "Now let's remove the bullets and the margins and padding from the list";
	// N 99
	c = c + s + "a {\n\tdisplay: block;\n\twidth: 60px;\n}";
	k = k + s + "Vertical Navigation BarTo build a vertical navigation bar we only need to style the <a> elements, in addition to the code above";
	// N 100
	c = c + s + "li {\n\tdisplay: inline;\n}";
	k = k + s + "Inline List Items. One way to build a horizontal navigation bar is to specify the <li> elements as inline, in addition to the \"standard\" code above";
	// N 101
	c = c + s + "li {\n\tfloat: left;\n}\na {\n\tdisplay: block;\n\twidth: 60px;\n}";
	k = k + s + "Floating List Items. In the example above the links have different widths. For all the links to have an equal width, float the <li> elements and specify a width for the <a> elements";
	// N 102
	c = c + s + "img {\n\topacity: 0.4;\n\tfilter: alpha(opacity=40); /* For IE8 and earlier */\n}";
	k = k + s + "Creating a Transparent Image. The CSS3 property for transparency is opacity. First we will show you how to create a transparent image with CSS";
	// N 103
	c = c + s + "img {\n\topacity: 0.4;\n\tfilter: alpha(opacity=40); /* For IE8 and earlier */\n}\nimg:hover {\n\topacity: 1.0;\n\tfilter: alpha(opacity=100); /* For IE8 and earlier */\n}";
	k = k + s + "Image Transparency - Hover Effect. Mouse over the images:";
	// N 104
	c = c + s + "#home {\n\twidth: 46px;\n\theight: 44px;\n\tbackground: url(img_navsprites.gif) 0 0;\n}";
	k = k + s + "Image Sprites. An image sprite is a collection of images put into a single image. Image Sprites - Simple Example. Instead of using three separate images, we use this single image (\"img_navsprites.gif\"):";
	// N 105
	c = c + s + "#home a:hover {\n\tbackground: url('img_navsprites_hover.gif') 0 -45px;\n}\n#prev a:hover {\n\tbackground: url('img_navsprites_hover.gif') -47px -45px;\n}\n#next a:hover {\n\tbackground: url('img_navsprites_hover.gif') -91px -45px;\n}";
	k = k + s + "Image Sprites - Hover Effect. Now we want to add a hover effect to our navigation list.";
	// N 106
	c = c + s + "@media screen {\n\tp {\n\t\tfont-family: verdana,sans-serif;\n\t\tfont-size: 14px;\n\t}\n}\n@media print {\n\tp {\n\t\tfont-size: 20px;\n\t\tcolor: red;\n\t}\n}";
	k = k + s + "The @media Rule. The @media rule allows different style rules for different media in the same style sheet. The style in the example below tells the browser to display a 14 pixels Verdana font on the screen. But if the page is printed, it will be in a 20 pixels font, and in a red color:";
	// N 107
	c = c + s + "a[target] {\n\tbackground-color: yellow;\n}";
	k = k + s + "CSS [attribute] Selector. The [attribute] selector is used to select elements with a specified attribute. The following example selects all <a> elements with a target attribute";
	// N 108
	c = c + s + "a[target=\"_blank\"] {\n\tbackground-color: yellow;\n}";
	k = k + s + "CSS [attribute=value] Selector. The [attribute=value] selector is used to select elements with a specified attribute and value. The following example selects all <a> elements with a target=\"_blank\" attribute";
	// N 109
	c = c + s + "[title~=\"flower\"] {\n\tborder: 5px solid yellow;\n}";
	k = k + s + "CSS [attribute~=value] Selector. The [attribute~=value] selector is used to select elements with an attribute value containing a specified word. The following example selects all elements with a title attribute that contains a space-separated list of words, one of which is \"flower\"";
	// N 110
	c = c + s + "[class|=\"top\"] {\n\tbackground: blue;\n}";
	k = k + s + "CSS [attribute|=value] Selector. The [attribute|=value] selector is used to select elements with the specified attribute starting with the specified value. The following example selects all elements with a class attribute value that begins with \"top\"";
	// N 111
	c = c + s + "[class^=\"top\"] {\n\tbackground: red;\n}";
	k = k + s + "CSS [attribute^=value] Selector. The [attribute^=value] selector is used to select elements whose attribute value begins with a specified value. The following example selects all elements with a class attribute value that begins with \"top\". Note: The value does not have to be a whole word! ";
	// N 112
	c = c + s + "[class$=\"test\"] {\n\tbackground: chocolate;\n}";
	k = k + s + "CSS [attribute$=value] Selector. The [attribute$=value] selector is used to select elements whose attribute value ends with a specified value.The following example selects all elements with a class attribute value that ends with \"test\": Note: The value does not have to be a whole word!";
	// N 113
	c = c + s + "[class*=\"te\"] {\n\tbackground: yellow;\n}";
	k = k + s + "CSS [attribute*=value] Selector. The [attribute*=value] selector is used to select elements whose attribute value contains a specified value. The following example selects all elements with a class attribute value that contains \"te\". Note: The value does not have to be a whole word";
	// N 114
	c = c + s + "input[type=\"text\"] {\n\twidth: 150px;\n\tdisplay: block;\n\tmargin-bottom: 10px;\n\tbackground-color: yellow;\n}";
	k = k + s + "Styling Forms. The attribute selectors can be useful for styling forms without class or ID";
	// N 115
	c = c + s + "input[type=\"button\"] {\n\twidth: 120px;\n\tmargin-left: 35px;\n\tdisplay: block;\n}";
	k = k + s + "Styling Forms. The attribute selectors can be useful for styling forms without class or ID";
	// N 116
	c = c + s + "";
	k = k + s + "";
	// N 117
	c = c + s + "";
	k = k + s + "";
	// N 118
	c = c + s + "";
	k = k + s + "";
	// N 119
	c = c + s + "";
	k = k + s + "";
	// N 120
	c = c + s + "";
	k = k + s + "";
	
	
	
	//PRINT IN THE 
	$("#introWord").text(w);
	$("#lang").text(c);
	$("#know").text(k);
	$("#separator").text(s);
	$("#choiceLang").text("CSS");
});
