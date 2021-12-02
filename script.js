"use strict";
// lesson05 task2

//Массив 
let arr = ['62252', '99018', '15058', '49303', '98616', '29999', '12155']
console.log(arr);

for (let i = 0; i < arr.length; i++ ) {    
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }           
}

//Простые числа
function isPrime(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

for(let i = 0; i < 100; i++){
    if(isPrime(i)) {
        console.log(i+ " - Делители этого числа:  1 и " + i);
    }
}