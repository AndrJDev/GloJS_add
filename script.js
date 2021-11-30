"use strict";

// 1)  Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
let result = 1;
let powNum;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
for (let number of num.toString().split('')) {
    result = result * number;
}
console.log(result);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
powNum = result ** 3;
console.log(powNum);

// 4) Вывести в консоль первые 2 цифры полученного числа
console.log("Первые две цифры " + powNum.toString().split('')[0] + " и "
    + powNum.toString().split('')[1]);
