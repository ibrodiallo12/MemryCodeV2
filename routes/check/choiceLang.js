
function choiceLang(choiceLang) {
    // do validation on choiceLang here

	// THE GET FOR MAKE CHOICE LANGUAGE
	if(choiceLang == 'HTML'){
		lang = 'HTML'; 
		mode = 'xml'; 

	}
	else if(choiceLang == 'CSS'){
		lang = 'CSS'; 
		mode = 'css'; 

	}
	else if(choiceLang == 'PHP'){
		lang = 'PHP'; 
		mode = 'clike'; 

	}
	else if(choiceLang == 'JavaScript'){
		lang = 'JavaScript'; 
		mode = 'javascript'; 

	}
	else if(choiceLang == 'Python'){
		lang = 'Python'; 
		mode = 'python'; 

	}
	else if(choiceLang == 'SQL'){
		lang = 'SQL'; 
		mode = 'sql'; 

	}
	else if(choiceLang == 'Java'){
		lang = 'Java'; 
		mode = 'clike'; 

	}
	else if(choiceLang == 'C-plus'){
		lang = 'C-plus'; 
		mode = 'clike'; 

	}
	else if(choiceLang == 'C'){
		lang = 'C'; 
		mode = 'clike'; 

	}
	else if(choiceLang == 'Shell'){
		lang = 'Shell'; 
		mode = 'shell'; 
		
	}
	else{
		lang = 'HTML'; 
		mode = 'xml';
	}
	//Return an Object content Lang and mode
    return {language : lang, modeUsed : mode};
    
};


module.exports.choiceLang = choiceLang;