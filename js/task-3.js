"use strict";
const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");
inputElement.addEventListener("input", (inputEvent) => {
  const trimmedInput = inputEvent.currentTarget.value.trim();
  outputElement.textContent = trimmedInput !== "" ? trimmedInput : "Анонім";
});
