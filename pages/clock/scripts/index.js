let clock = document.querySelector(".clock");
let digital = document.querySelector(".digital-clock");

function updateClock() {
  let now = new Date();

  clock.style.setProperty(
    "--hour",
    now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
  );
  clock.style.setProperty("--minute", now.getMinutes() + now.getSeconds() / 60);
  clock.style.setProperty("--second", now.getSeconds());

  digital.textContent = now.toLocaleTimeString();

  setTimeout(updateClock, 500);
}

function setNumbers() {
  let numbers = clock.querySelector(".text");
  let bticks = clock.querySelector(".bticks");

  const li = document.createElement("li");

  for (let i = 1; i <= 12; i++) {
    let number = li.cloneNode();
    number.style.setProperty("--unit", i);
    numbers.appendChild(number);
    bticks.appendChild(number.cloneNode());
  }

  let ticks = clock.querySelector(".ticks");

  for (let i = 1; i <= 60; i++) {
    let number = li.cloneNode();
    number.style.setProperty("--unit", i);
    ticks.appendChild(number);
  }
}

setNumbers();

updateClock();
