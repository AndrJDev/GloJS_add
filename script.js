"use strict";
// lesson06 add
// Загадывание случайного числа от 1 до 100

let requiredNumber
let tryQuantity;

const isThisA_Number = function (num) { 		
    return (!isNaN(parseFloat(num)) && isFinite(num));    
}

const startGame = function () { 		
    requiredNumber = Math.round( Math.random() * 100);
    tryQuantity = 10;    
}

const asking = function (message) {     
    
    let num = prompt(message);
    let finalQuestion;

    if (typeof num === 'string') {				
		num = parseFloat(num);
		if (isNaN(num)) {
            asking("Введите число!" );
		}else {
            if (tryQuantity == 0) {                        
                finalQuestion = confirm("Попытки закончились, хотите сыграть еще?");
                if (finalQuestion === true) {
                    startGame();
                    asking('Угадай число от 1 до 100');                    
                }else {
                    //Отмена
                    alert("Игра Окончена!" );			                    
                }	                                 
            }
            if (num > requiredNumber) {                        
                asking("Загаданное число меньше. Осталось попыток " + --tryQuantity + " Попробуйте еще");
            }
            if (num < requiredNumber) {                   
                asking("Загаданное число больше. Осталось попыток " + --tryQuantity + " Попробуйте еще");
            }  
            if (num === requiredNumber) {   
                //Конец игры                             
                finalQuestion = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
                if (finalQuestion === true) {
                    startGame();
                    asking('Угадай число от 1 до 100');                    
                }else {
                    //Отмена
                    alert("Игра Окончена!" );			                    
                }	 
            }  
        }            		
	}else {
		if (!isThisA_Number(num)) {
            //Отмена
            alert("Игра Окончена!" );			
		}else {
            startGame();
        }		
	}    
}

startGame();
asking('Угадай число от 1 до 100');
