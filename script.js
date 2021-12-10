"use strict";

let el0 = document.getElementById('current_date_time_first-format')
let el = document.getElementById('current_date_time_block');

// функция добавления ведущих нулей     
function zero_first_format(value) {
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

// функция возвращает день недели по номеру
function getWeekDay(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];  
    return days[date.getDay()];
}

// функция месяц по номеру
function getMonth(date) {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 
        'августа', 'сентября', 'октября', 'ноября', 'декабря'];  
    return months[date.getMonth()];
}

// функция месяц по номеру
function getHoursString(date) {    
    if (((date >= 3) && (date <= 4)) || ((date >= 22) && (date <= 24))) {
        return "часа";
    }else if ((date >= 5) && (date <= 20)) {
        return "часов";    
    }else {
        return "час";
    }    
}

// функция для первого формата
function date_time_full(variant) {
    let current_datetime = new Date();

    let dayOfWeek = getWeekDay(current_datetime);
    let day = current_datetime.getDate();
    let month = getMonth(current_datetime);
    let year = current_datetime.getFullYear();
    let hours = current_datetime.getHours();
    let hoursString = getHoursString(hours);
    let minutes = current_datetime.getMinutes();
    let seconds = current_datetime.getSeconds();
    
    return "Сегодня " + dayOfWeek +", " + day + " " + month + " " +
        year +" года, " +
        hours + " " + hoursString + " " + 
        minutes +" минут " +
        seconds +" секунды";
};

// функция для второго формата
function date_time(variant) {
    let current_datetime = new Date();
    let day = zero_first_format(current_datetime.getDate());
    let month = zero_first_format(current_datetime.getMonth()+1);
    let year = current_datetime.getFullYear();
    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());
    let seconds = zero_first_format(current_datetime.getSeconds());
    
    return day+"."+month+"."+year+" - "+hours+":"+minutes+":"+seconds;    
};    

setInterval(function() {
    el0.innerHTML = date_time_full();
    el.innerHTML = date_time();
}, 1000);
