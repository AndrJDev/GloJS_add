"use strict";
// lesson04_add

const processTheLine = function (str) {
	let result;	
	if (typeof str != "string") {
		return "Это не строка";
	}else {
		result = str.trim();		
		if (result.length > 30) {			
			result = result.substring(0,30) + "...";
		}
		return result;
	}   
}

console.log(processTheLine(" 123456789123456789123456789123 456789 "));
