function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnElement = document.querySelector(".change-color");
btnElement.addEventListener("click", (btnEvent) => {
  const currentColor = document.querySelector(".color");
  currentColor.textContent = getRandomHexColor();
  const bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = currentColor.textContent;
});
