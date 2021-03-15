var today = new Date();



//First grid-area: time
var today, hours, minutes, seconds, dots;

function init() {
    dots = document.getElementById('time');
    letTheClockWork();
}

function addZero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

function letTheClockWork() {
    today = new Date();
    if (hours < 0) {
        hours += 24;
    }
    hours = addZero(today.getHours());
    minutes = addZero(today.getMinutes());
    seconds = addZero(today.getSeconds());
    dots.innerHTML = hours + ':' + minutes + ':' + seconds;
    var id = setTimeout('letTheClockWork()', 1000);
}



//Second grid-area: date
var days = today.getDate();
    if (days < 10) {
        days = '0' + days;
}

var months = today.getMonth();
    if (months < 10) {
        months = '0' + (months+1);
}

document.getElementById('date').innerHTML = days + '/' + months + '/' + today.getFullYear()



//Third grid-area: day
var weekDays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

var daysOfTheWeek = weekDays[today.getDay()];

document.getElementById('day').innerHTML = daysOfTheWeek;



//Time of the day
function changeBg(color) {
    if (hours >= 9) {
        document.getElementsByClassName('bg')[3].style.backgroundColor = '#28608D';
    } if else (hours <= 9) {
        document.getElementsByClassName('bg')[3].style.backgroundColor = '#05102B';
    } else {
        document.getElementsByClassName('bg')[3].style.backgroundColor = '#3FD7D7';
    }
    return color;
}

window.onload = init(), changeBg();