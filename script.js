let startTime = 0;
let elapsed = 0;
let timer = null;

function format(ms) {
  const h = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const m = String(Math.floor(ms / 60000) % 60).padStart(2, "0");
  const s = String(Math.floor(ms / 1000) % 60).padStart(2, "0");
  const msr = String(ms % 1000).padStart(3, "0");
  return `${h}:${m}:${s}.${msr}`;
}

function update() {
  elapsed = Date.now() - startTime;
  time.innerText = format(elapsed);
}

function start() {
  if (timer) return;
  startTime = Date.now() - elapsed;
  timer = setInterval(update, 10);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  elapsed = 0;
  time.innerText = format(0);
  laps.innerHTML = "";
}

function lap() {
  if (!timer) return;
  const li = document.createElement("li");
  li.innerText = format(elapsed);
  laps.appendChild(li);
}
