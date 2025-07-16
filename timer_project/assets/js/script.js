let hours = 0;
let minutes = 0;
let seconds = 0;

let stopWatchTimer = null;

function updateDisplay() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('display-stop-watch').innerText = `${h}:${m}:${s}`;
}

function start() {

    if (stopWatchTimer !== null) return;

    stopWatchTimer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);
}

function test() {
    setInterval(() => {
        console.log("Test function is running every second");
    }, 500);
}

function stop() {
    clearInterval(stopWatchTimer);
    stopWatchTimer = null;
}

function reset() {
    stop();

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();
}

//////////////////////////////////////////////////////////////////////////

let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;

let inputTimer = null;
let timer = null;

function updateDisplayTimer() {
    let h = timerHours < 10 ? '0' + timerHours : timerHours;
    let m = timerMinutes < 10 ? '0' + timerMinutes : timerMinutes;
    let s = timerSeconds < 10 ? '0' + timerSeconds : timerSeconds;
    document.getElementById('display-timer').innerText = `${h}:${m}:${s}`;
}

function startTimer() {
    if (timer !== null) return;

    // Get input seconds and convert to numbers
    let totalSeconds = 0;
    if (timerSeconds <= 0) {
        inputTimer = document.getElementById('input-seconds').value;
        totalSeconds = parseInt(inputTimer, 10);
        timerHours = Math.floor(totalSeconds / 3600);
        timerMinutes = Math.floor((totalSeconds % 3600) / 60);
        timerSeconds = totalSeconds % 60;
    }
    console.log("Timer started with input: " + inputTimer);

    timer = setInterval(() => {
        // Decrement timer
        if (timerSeconds > 0) {
            timerSeconds--;
        } else if (timerMinutes > 0) {
            timerMinutes--;
            timerSeconds = 59;
        } else if (timerHours > 0) {
            timerHours--;
            timerMinutes = 59;
            timerSeconds = 59;
        } else {
            stopTimer();
        }
        updateDisplayTimer();
    }, 1000);
}

function stopTimer() {
    console.log("Timer stopped");
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    console.log("Timer reset");

    stopTimer();

    timerSeconds = 0;
    timerMinutes = 0;
    timerHours = 0;

    updateDisplayTimer();
}
