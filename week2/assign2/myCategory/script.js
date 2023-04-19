/*
document.getElementById("draggable-1").ondragstart = onDragStart;

function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  event.currentTarget.style.backgroundColor = "yellow";
}

document.getElementById("example-dropzone").ondragover = onDragOver;
document.getElementById("example-dropzone").ondrop = onDrop;
function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event.dataTransfer.clearData();
}
*/

import TODO_DATA from "../common/todoData.js";

let todoData = [];
window.onload = () => {
  localStorage.getItem("todo_data") === null &&
    localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); //localStorage 초기화
  todoData = JSON.parse(localStorage.getItem("todo_data")); //localStorage에 저장된 목록을 가져옴
  makeCategories(todoData);
};

function makeCategories(list) {
  const section = document.getElementById("order-change__section");
  const categoriesTemplate = document.getElementById("categories__template");

  section.replaceChildren();
  list.forEach((item) => {
    let content = categoriesTemplate.cloneNode(true);
    let newHtml = content.innerHTML;

    newHtml = newHtml
      .replace("{bg_color}", "bg-" + item.color)
      .replace("{category_name}", item.category);

    content.innerHTML = newHtml;
    section.appendChild(content.content);
  });
}
