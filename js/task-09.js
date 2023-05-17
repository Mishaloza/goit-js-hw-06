function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

const Btn = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");
const bodyEl = document.querySelector("body");

Btn.addEventListener("click", () => {
  spanEL.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
});
