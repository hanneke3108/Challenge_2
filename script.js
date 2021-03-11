// Chart 1: own barChart
var speed = 3800;
var speedMax = 4500;
var percentage = speed/speedMax * 100;

document.getElementById('speed').innerHTML = speed;
document.getElementById('balk').style.width = percentage+'%';

document.getElementById('gas').onclick = function(){
    speed += 50;
    percentage = speed/speedMax * 100;
    if(speed > 4500){
        speed = 4500;
    }
    document.getElementById('speed').innerHTML = speed;
    document.getElementById('balk').style.width = percentage+'%';
};


// Chart 2: js lineChart, source: https://www.youtube.com/watch?v=t8TgLqTzo5o
var chart1 = document.getElementById("lineChart");

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontFamily = 'D-DIN';
Chart.defaults.global.legend.reverse = true;

var lineChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ["March", "April", "May", "June", "July", "Aug", "Sept", "Oct"],
        datasets: [
            {
                label: "During this flight",
                fill: false,
                lineTension: 0.3,
                borderColor: "rgba(63, 215, 215, 1)",
                pointHoverBackgroundColor: "rgb(75, 192, 192)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 2000, 2500, 2000, 3000, 3500, 3800],
            }, 
            {
                label: "Previous flight",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 1)",
                pointHoverBackgroundColor: "rgb(255, 255, 255)",
                pointHoverBorderColor: "rgb(0, 0, 0)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [1500, 1500, 1800, 2500, 2500, 3000, 3500],
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


//Chart 4: js barChart, source: https://www.youtube.com/watch?v=B5rCrmXK5Y0
var chart2 = document.getElementById("barChart");

Chart.defaults.global.legend.reverse = false;

var barChart = new Chart(chart2, {
    type: 'horizontalBar',
    data: {
        labels: ["Oxygen", "Hydrogen"],
        datasets: [
            {
                label: "Current",
                fill: false,
                lineTension: 0.3,
                borderColor: "rgba(63, 215, 215, 1)",
                backgroundColor: "rgba(63, 215, 215, 1)",
                data: [10, 15],
            },
            {
                label: "Need",
                fill: false,
                lineTension: 0.3,
                borderColor: "rgba(255, 255, 255, 1)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                data: [7, 2],
            }
            
        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: false,
            }],
            yAxes: [{
                stacked: false,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});