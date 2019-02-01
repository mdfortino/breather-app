let timerObj = document.getElementById('timer'),
start = document.getElementById('start'),
stop = document.getElementById('stop'),
clear = document.getElementById('clear'),
seconds = 0, minutes = 0, hours = 0,
t;

// fx to run each second
function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

// setup running timer display
timerObj.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();
}

// runs the add fx every second
function timer() {
t = setTimeout(add, 1000);
}

// runs the timer when start btn clicked
start.onclick = timer

// stops the timer when stop btn clicked
stop.onclick = function() {
clearTimeout(t);
}

// clears the timer when clear btn clicked
clear.onclick = function() {
timerObj.textContent = "00:00:00";
seconds = 0; minutes = 0; hours = 0;
clearTimeout(t);
}