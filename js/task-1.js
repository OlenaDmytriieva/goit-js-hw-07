"use strict";
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const title = category.querySelector("h2");
  const list = category.querySelectorAll("li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${list.length}`);
});
