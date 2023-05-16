const controlerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${controlerEl.value}px`;

function fontChange() {
  return (textEl.style.fontSize = `${controlerEl.value}px`);
}

controlerEl.addEventListener("input", fontChange);
