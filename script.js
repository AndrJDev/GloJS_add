"use strict";

//Ветвления
let lang = 'ru';
const arrRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arrEng = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

if (lang === 'ru') {  
  console.log(arrRu);
} else if (lang == 'en') {   
	console.log(arrEng);
}

switch (lang) {
	case 'ru':		
		console.log(arrRu);
	break;
	case 'en':
		console.log(arrEng);
	break;
}

let arr2 = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr2[lang]);

//Несколько тернарных операторов
let namePerson = "Артем";

let result = (namePerson === "Артем") ? "директор" : (namePerson === "Александр") ? "преподаватель" : "студент";
console.log(result);
