var today = new Date();

//First grid-area: time
var seconds = today.getSeconds();
    if (seconds < 10){
        seconds = '0' + seconds;
}

var minutes = today.getMinutes();
    if (minutes < 10){
        minutes = '0' + minutes;
}

document.getElementById('time').innerHTML = today.getHours() + ':' + minutes + ':' + seconds



//Second grid-area: date
var days = today.getDate();
    if (days < 10){
        days = '0' + days;
}

var months = today.getMonth();
    if (months < 10){
        months = '0' + (months+1);
}

document.getElementById('date').innerHTML = days + ' / ' + months + ' / ' + today.getFullYear()



//Third grid-area: day
var weekDays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

var daysOfTheWeek = weekDays[today.getDay()];

document.getElementById('day').innerHTML = daysOfTheWeek;





//First grid-area: time (source: https://www.phphulp.nl/php/forum/topic/javascript-klok-5-uur/25247/)
var tijd, u, m, s;
var p;
function init () {
    p = document.getElementById ('time');
    set_time ();
}
function voorloopnul (getal) {
    if (getal < 10) return ('0' + getal);
    return getal;
}
function set_time () {
    tijd = new Date ();
    u = tijd.getHours ();
    if (u < 0) u += 24;
    u = voorloopnul (u);
    m = voorloopnul (tijd.getMinutes ());
    s = voorloopnul (tijd.getSeconds ());
    p.innerHTML = u + ':' + m + ':' + s;
    var id = setTimeout ('set_time ()', 1000);
}
window.onload = init;





//var seconds = 0;
//var stopwatchHandle = false;
//
//function count(){
//    seconds++;
//    document.getElementById('time').innerHTML = seconds;
//}
//
//document.getElementById('start').onclick = function(){
//    if (stopwatchHandle == false){
//        count();
//        stopwatchHandle = setInterval(count, 1000);
//    }
//};






//var seconds = 0;
//var stopwatchHandle = false;
//
//function count(){
//	seconds++;
//	console.log(seconds);
//    document.getElementById('time').innerHTML = seconds;
//}

//document.getElementById('tick').onclick = function(){
//    count();
//};

//count();
//count();

//document.getElementById('start').onclick = function(){
//    if (stopwatchHandle == false){
//        count();
//        stopwatchHandle = setInterval(count, 1000);
//    }
//};
//
//document.getElementById('stop').onclick = function(){
//    clearInterval(stopwatchHandle);
//    stopwatchHandle = false;
//};

//resetknop
