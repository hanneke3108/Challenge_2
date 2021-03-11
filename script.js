//var today = new Date();
//
//var seconds = today.getSeconds();
//if (seconds < 10){
//    seconds = '0' + seconds;
//}
//
//var minutes = today.getMinutes();
//if (minutes < 10){
//    minutes = '0' + minutes;
//}
//
//document.getElementById('clock').innerHTML = today.getHours() + ':' + minutes + ':' + seconds






//var seconds = 0;
//var stopwatchHandle = false;
//
//function count(){
//    seconds++;
//    document.getElementById('clock').innerHTML = seconds;
//}
//
//document.getElementById('start').onclick = function(){
//    if (stopwatchHandle == false){
//        count();
//        stopwatchHandle = setInterval(count, 1000);
//    }
//};






var seconds = 0;
var stopwatchHandle = false;

function count(){
	seconds++;
	console.log(seconds);
    document.getElementById('clock').innerHTML = seconds;
}

//document.getElementById('tick').onclick = function(){
//    count();
//};

//count();
//count();

document.getElementById('start').onclick = function(){
    if (stopwatchHandle == false){
        count();
        stopwatchHandle = setInterval(count, 1000);
    }
};

document.getElementById('stop').onclick = function(){
    clearInterval(stopwatchHandle);
    stopwatchHandle = false;
};

//resetknop
