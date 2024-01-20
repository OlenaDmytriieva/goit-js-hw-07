const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");
inputElement.addEventListener("input", (inputEvent) => {
  if (inputEvent.currentTarget.value.trim() !== "") {
    outputElement.textContent = inputEvent.currentTarget.value.trim();
  }
});
