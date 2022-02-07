"use strict";
const main = document.querySelector("main");
const button = document.querySelector("#btn");
const header = document.querySelector("#background-header");
// body.style.backgroundColor = "blue";

const hexElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hexString = "#";

button.addEventListener("click", () => {
  hexString = "#";
  for (let i = 0; i < 6; i++) {
    let rand = Math.trunc(Math.random() * 15);
    hexString += hexElements[rand];
  }
  console.log(hexString);
  main.style.background = hexString;
  header.style.color = "white";
});
