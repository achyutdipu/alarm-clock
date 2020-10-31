var timer = document.getElementById('timer');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');
var startstop = document.getElementById('startstop');

var currentTime;
var alarmTime;
var activeColumn = false;
var sound = new Audio("alarm.mp3");
sound.loop = true;

function showTime() {
    var now = new Date();
    currentTime = now.toLocaleTimeString();
    timer.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();