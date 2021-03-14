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
