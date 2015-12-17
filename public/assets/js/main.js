$(function(){
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////....................NOW LET'S BEGING............................/////////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
		
		// the separator for the array with function split
		var separator = $("#separator").text();
		var lang = $("#lang").text();
		var splitingLang = lang.split(separator);	
		var myArray = splitingLang;
		
		// The KNOW fhe array with function split
		var know = $("#know").text();
		var splitingKnow = know.split(separator);
		var myArrayKnow = splitingKnow;
		
		// print the language programming for more in the search google
		var choiceLang = $("#choiceLang").text();
		//alert(choiceLang);
		
		var maxNumber = myArray.length;
		// FUNCTION RANDOM
		function rand(maxNumber, min){
				return Math.floor(Math.random() * maxNumber);
		}
		// FUNCTION if BROWSER HAVE AN ERROR
		function browserError(c){
			// if the browser have an error
			if(!c){
				// FUNCTION RANDOM
				randNumber = rand(maxNumber, 0);
				// CODE IN #CODE PRINTER
				Codingcode = myArray[randNumber];
				if(!c){
					// FUNCTION RANDOM
					randNumber = rand(maxNumber, 0);
					// CODE IN #CODE PRINTER
					Codingcode = myArray[randNumber];
					if(!c){
						// FUNCTION RANDOM
						randNumber = rand(maxNumber, 0);
						// CODE IN #CODE PRINTER
						Codingcode = myArray[randNumber];
					}
				}
			}
	    }
		// END FUNCTION if BROWSER HAVE AN ERROR
		
		randNumber = rand(maxNumber, 0);
		//alert(myArray[randNumber]);
		//alert(rand(maxNumber, 0));
		
		// CODE IN #CODE PRINTER
		var Codingcode = myArray[randNumber];
		
		//call the function browserError
		browserError(Codingcode);
		
		// TEXT IN #CODE PRINTER
		editorCode.setValue(Codingcode);
		
		// MAXIMUM OF SECOND FOR CODE
		var maxSecond = Math.ceil(Codingcode.length / 7);
		$("#maxSecond").text(maxSecond);
		
		// CODE IN #KNOW PRINTER
		var textKnow = myArrayKnow[randNumber];
		// TEXT IN #KNOW PRINTER
		$("#knowPrinter").text(textKnow);
		
		// SIGN LINK HREF #DETAILS
		$('#details').attr('href',"http://www.google.com/?q=" + textKnow + " in " + choiceLang);
		
		// CHANGE LANGUAGE
		$("#language").click(function(){
			var valOptionLanguage = $("#language").val();
		 	$(location).attr('href', 'keyboarding/:' + valOptionLanguage);
		});

	
		// ON CHANGE EDITOR GET INPUT AND CHECK
		editorCoding.on('change', function(){
			tap = editorCoding.getValue();
			//alert(tap);
			var T = tap.length;
			indexTap = T - 1;
			var ValTap = tap.charAt(indexTap);
			indexCode = T - 1;
			var codeTap = Codingcode.charAt(indexCode);
			//alert(ValTap);
			if(codeTap == ValTap)
			{
				// IF USER DO IT!!
				if(Codingcode == tap){
					setTimeout(function(){
						editorCoding.setValue("");
						$("#error").text("0");
						$("#TsecLine").text("0");
						editorCode.setValue("");
						$("#error").text("0");
						$("#TsecLine").text("R");
						//BEGING THE REPEAT
						// FUNCTION RANDOM
						randNumber = rand(maxNumber, 0);
						// CODE IN #CODE PRINTER
						Codingcode = myArray[randNumber];
						//call the function browserError
						browserError(Codingcode);
						// TEXT IN #CODE PRINTER
						editorCode.setValue(Codingcode);
						// MAXIMUM OF SECOND FOR CODE
						var maxSecond = Math.ceil(Codingcode.length / 7);
						$("#maxSecond").text(maxSecond);
						// CODE IN #KNOW PRINTER
						textKnow = myArrayKnow[randNumber];
						// TEXT IN #KNOW PRINTER
						$("#knowPrinter").text(textKnow);
						// SIGN LINK HREF #DETAILS
						$('#details').attr('href',"http://www.google.com/?q=" + textKnow + " in " + choiceLang);
						// BEGIN WITHOUT red border
						$(".errorCoding").css("border","2px solid white");
						// END OF THE REPEAT
					}, 2000);
				}
			}
		});
		
		// if AN ERROR
		editorCoding.on('keypress',(function(){
			tap = editorCoding.getValue();
			//alert(tap);
			var T = tap.length;
			indexTap = T - 1;
			ValTap = tap.charAt(indexTap);
			indexCode = T - 1;
			var codeTap = Codingcode.charAt(indexCode);
			
			if(ValTap != codeTap){
				var alrdyError = $("#error").text();
				var error = parseInt(alrdyError) + 1;
				$("#error").text(error);
				
				// IF an error var errr to true
				var errr = true;
			}
			// border red to textarea
			if(errr == true){
				$(".errorCoding").css("border","2px solid red");
			}
			else{//normal style for textarea
				$(".errorCoding").css("border","2px solid white");
			}
		}));
		
		// USER WANT THE NEXT CODE
		$("#next").click(function(){
			setTimeout(function(){
				editorCoding.setValue("");
				$("#error").text("0");
				$("#TsecLine").text("R");
				editorCode.setValue("");
				//BEGING THE REPEAT
				// FUNCTION RANDOM
				randNumber = rand(maxNumber, 0);
				// CODE IN #CODE PRINTER
				Codingcode = myArray[randNumber];
				//call the function browserError
				browserError(Codingcode);
				// TEXT IN #CODE PRINTER
				editorCode.setValue(Codingcode);
				// MAXIMUM OF SECOND FOR CODE
				var maxSecond = Math.ceil(Codingcode.length / 7);
				$("#maxSecond").text(maxSecond);
				// CODE IN #KNOW PRINTER
				textKnow = myArrayKnow[randNumber];
				// TEXT IN #KNOW PRINTER
				$("#knowPrinter").text(textKnow);
				// SIGN LINK HREF #DETAILS
				$('#details').attr('href',"http://www.google.com/?q=" + textKnow + " in " + choiceLang);
				// BEGIN WITHOUT red border
				$(".errorCoding").css("border","2px solid white");
				// END OF THE REPEAT
			}, 2300);
		});
		
		// ON CHANGE EDITOR COUNTER SECOND
		editorCoding.on('change',(function(){
			//second increment
			var alrdyTsecLine = $("#TsecLine").text();
			var alrdyTsecLine = parseInt(alrdyTsecLine) + 1;
			TimeTo = setTimeout(function(){
				if($("#TsecLine").text() == "R"){
					$("#TsecLine").text("0");
					clearTimeout(TimeTo);
				}else{
					if(typeof alrdyTsecLine == "number"){
						$("#TsecLine").text(alrdyTsecLine);
					}
				}
			}, 2000);
		}));
		// RESET THE COUNTER SECOND IN A SECOND
		setInterval(function(){
			if($("#TsecLine").text() == "R"){
				$("#TsecLine").text("0");
			}
		}, 1000);
		
////{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}////
///{/////////////////////////////////.................IT IS DONE.. THANK...............................///////////////}///
//{//////////////////////////////////////////////////////////////////////////////////////////////////////////////////}//
});
