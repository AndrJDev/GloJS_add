"use strict";
// lesson07 add
// Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)

function insert_days() {
  let template = document.querySelectorAll(".day-of-week");  
  let today = (6 + new Date().getDay()) % 7;
  let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

  template[today].classList.add("bold");  
  
  days.forEach((day, i) => {
    if (i == 5 || i == 6) {
        template[i].classList.add("italic");
    } 
    template[i].textContent = days[i];
  });
}

insert_days();