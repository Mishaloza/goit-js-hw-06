const valueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);

let value = 0;

function decrement(click) {
  value -= 1;
  valueEl.textContent = value;
}

function increment(click) {
  value += 1;
  valueEl.textContent = value;
}
