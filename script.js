"use strict";

//Ветвления
let lang = 'ru';
// let lang = 'en';
let arr;

if (lang === 'ru') {
  arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
} else if (lang == 'en') {   
  arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
console.log(arr);

switch (lang) {
	case 'ru':
		arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
console.log(arr);

let arr2 = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr2[lang]);

//Несколько тернарных операторов
let namePerson = "Артем";

let result = (namePerson === "Артем") ? "директор" : (namePerson === "Александр") ? "преподаватель" : "студент";
console.log(result);
