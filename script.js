"use strict";
// lesson05 - add 
// task01

let enteredNum;

const isThisA_Number = function (num) { 	
	console.log("Попало в isThisA_Number(): ", + num + " - тип: " + typeof num);           
    return (!isNaN(parseFloat(num)) && isFinite(num));    
}

const processInput = function (message) { 	
	let num = 0;	
	num = prompt(message, "123"); 
	console.log("typeof num: " + typeof num);
	if (typeof num === 'string') {				
		num = parseFloat(num);
		if (isNaN(num)) {
			num = processInput('Вы ввели не число. Попробуйте еще раз');
		}		
	}else {
		if (!isThisA_Number(num)) {
			num = processInput('Ввод числа обязателен. Попробуйте еще раз');
		}		
	}
	return num;
}

const asking = function () {     
    enteredNum = processInput('Введите число');
	console.log("В переменную записалось: ", + enteredNum + " - тип: " + typeof enteredNum);               
}

asking();
