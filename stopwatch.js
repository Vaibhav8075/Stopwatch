let [hrs, mins, seconds] = [0, 0, 0];
let display = document.getElementById("Display");
let timer = null;
let lapsContainer = document.getElementById("laps");
function updateDisplay() {
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mins < 10 ? "0" + mins : mins;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}
function watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hrs++;
    }
  }
  updateDisplay();
}
document.getElementById("startStop").addEventListener("click", () => {
  const btn = document.getElementById("startStop");
  if (timer === null) {
    timer = setInterval(watch, 1000);
    btn.innerText = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    btn.innerText = "Start";
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [hrs, mins, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("startStop").innerText = "Start";
  lapsContainer.innerHTML = "";
});
document.getElementById("lap").addEventListener("click", () => {
  if (timer === null) {
    return;
  }
  let lapTime = display.innerText;
  let li = document.createElement("li");
  li.innerText = lapTime;
  lapsContainer.appendChild(li);
});
