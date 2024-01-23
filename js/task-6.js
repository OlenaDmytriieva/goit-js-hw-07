function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const destroyElements = () => {
  const boxesToDestroy = document.querySelectorAll(".box");
  inputEl.value = "";
  boxesToDestroy.forEach((box) => box.remove());
};

destroyBtnEl.addEventListener("click", () => {
  destroyElements();
});

inputEl.addEventListener("click", () => {
  destroyElements();
});

createBtnEl.addEventListener("click", () => {
  const boxesArr = [];
  let boxWidth = 30;
  let boxHeight = 30;
  if (+inputEl.value.trim() >= 1 && +inputEl.value.trim() <= 100) {
    for (let i = 1; i <= +inputEl.value.trim(); i++) {
      const boxItem = document.createElement("div");
      boxItem.setAttribute(
        "style",
        `width: ${boxWidth}px; height: ${boxHeight}px`
      );
      boxItem.classList.add("box");
      boxItem.style.backgroundColor = getRandomHexColor();
      boxesArr.push(boxItem);
      boxHeight += 10;
      boxWidth += 10;
    }
  }
  boxesEl.append(...boxesArr);
  // inputEl.value = "";
});
