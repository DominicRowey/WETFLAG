// Adapted from https://jsfiddle.net/pertrai1/r3su6b6n/

var h1 = document.getElementById('timer');
var start = document.getElementById('start');
var stop = document.getElementById('pause');
var reset = document.getElementById('restart');
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

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
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

// Start button 
start.onclick = timer;

//Stop button
stop.onclick = function() {
    clearTimeout(t);
}

// Clear button
reset.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}