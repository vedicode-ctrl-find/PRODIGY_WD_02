let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let lapBtn = document.getElementById("lap");
let resetBtn = document.getElementById("reset");
let lapsContainer = document.getElementById("laps");
let interval = null;
let running = false;

function updateDisplay() {
  let h = hours.toString().padStart(2, "0");
  let m = minutes.toString().padStart(2, "0");
  let s = seconds.toString().padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (!running) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    startBtn.textContent = "Stop";
    running = true;
  } else {
    clearInterval(interval);
    startBtn.textContent = "Start";
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(interval);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  lapsContainer.innerHTML = "";
  startBtn.textContent = "Start";
  running = false;
}

function recordLap() {
  if (running) {
    let lapTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    let li = document.createElement("li");
    li.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
    lapsContainer.appendChild(li);
  }
}

startBtn.addEventListener("click", startStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", recordLap);
