let timerDisplay = document.getElementById("Timer");
let startButton = document.getElementById("Start");
let stopButton = document.getElementById("Stop");
let resetButton = document.getElementById("Reset");
let shortBreakButton = document.getElementById("Shortbreak");
let longBreakButton = document.getElementById("Longbreak");

let defaultTime = 25 * 60; 
let timeLeft = defaultTime;
let timer = null;
function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}
function startTimer() {
    if (timer === null) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}
function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetTimer() {
    stopTimer();
    timeLeft = defaultTime;
    updateDisplay();
}

function shortBreak() {
    stopTimer();
    timeLeft = 5 * 60;
    updateDisplay();
}

function longBreak() {
    stopTimer();
    timeLeft = 15 * 60;
    updateDisplay();
}


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
shortBreakButton.addEventListener("click", shortBreak);
longBreakButton.addEventListener("click", longBreak);
updateDisplay();
