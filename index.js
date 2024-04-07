let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

function getTodo(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");
  textEl.innerHTML = value;
  todo.appendChild(textEl);
  message.classList.toggle("success");
  message.textContent = "Item Added";

  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);