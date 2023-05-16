const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onInputFn);

function onInputFn(inputEvent) {
  nameOutputEl.textContent = inputEvent.currentTarget.value;

  if (inputEvent.currentTarget.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
}
