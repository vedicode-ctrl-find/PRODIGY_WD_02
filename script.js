let [hours, minutes, seconds] = [0, 0, 0];
    let display = document.getElementById('display');
    let laps = document.getElementById('laps');
    let interval = null;
    let running = false;

    function updateDisplay() {
      let h = hours.toString().padStart(2, '0');
      let m = minutes.toString().padStart(2, '0');
      let s = seconds.toString().padStart(2, '0');
      display.textContent = `${h}:${m}:${s}`;
    }

    function timer() {
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
    }

    function startStop() {
      if (!running) {
        interval = setInterval(timer, 1000);
        document.getElementById('startStopBtn').textContent = 'Stop';
      } else {
        clearInterval(interval);
        document.getElementById('startStopBtn').textContent = 'Start';
      }
      running = !running;
    }

    function reset() {
      clearInterval(interval);
      [hours, minutes, seconds] = [0, 0, 0];
      updateDisplay();
      document.getElementById('startStopBtn').textContent = 'Start';
      laps.innerHTML = '';
      running = false;
    }

    function lap() {
      if (running) {
        const li = document.createElement('li');
        li.textContent = display.textContent;
        laps.appendChild(li);
      }
    }
