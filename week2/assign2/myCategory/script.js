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
let categoryList = [];

window.onload = () => {
  localStorage.getItem("todo_data") === null &&
    localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); //localStorage 초기화
  todoData = JSON.parse(localStorage.getItem("todo_data")); //localStorage에 저장된 목록을 가져옴
  extractCategoryName(todoData);
  makeCategories(todoData);
};

function extractCategoryName(list) {
  list.forEach((item) => {
    categoryList.push(item.category);
  });
}

function makeCategories(list) {
  const section = document.getElementById("order-change__section");
  const categoriesTemplate = document.getElementById("categories__template");

  section.replaceChildren();
  list.forEach((item) => {
    let content = categoriesTemplate.cloneNode(true);
    let newHtml = content.innerHTML;

    newHtml = newHtml
      .replace("{bg_color}", "bg-" + item.color)
      .replace(/{category_name}/gi, item.category);

    content.innerHTML = newHtml;
    section.appendChild(content.content);

    const categoryItem = document.getElementById(item.category);
    resolveDragDrop(categoryItem, section);
  });
}

function resolveDragDrop(item, parent) {
  item.ondragstart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };
  item.ondragover = (e) => {
    e.preventDefault();
  };
  item.ondrop = (e) => {
    const id = e.dataTransfer.getData("id");
    const draggedItem = document.getElementById(id);
    let dropZone = e.target;
    dropZone.tagName === "H2" && (dropZone = dropZone.parentElement);

    parent.insertBefore(draggedItem, dropZone);

    e.dataTransfer.clearData();
  };
}
