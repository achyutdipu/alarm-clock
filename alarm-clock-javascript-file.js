var timer = document.getElementById('timer');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var ampm = document.getElementById('ampm');
var startstop = document.getElementById('startstop');

var currentTime;
var alarmTime;
var activeColumn = false;
var sound = new Audio('alarm.mp3')