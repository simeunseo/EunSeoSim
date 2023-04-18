import TODO_DATA from "../common/todoData.js";

const COLOR_LIST = ["red", "green", "yellow", "blue"];

let todoData = []; //localStorage에 저장된 목록을 가져와 저장하는 배열
let todoCounting = 0; //미완료 할일의 수

window.onload = () => {
  localStorage.getItem("todo_data") === null &&
    localStorage.setItem("todo_data", JSON.stringify(TODO_DATA)); //localStorage 초기화
  todoData = JSON.parse(localStorage.getItem("todo_data")); //localStorage에 저장된 목록을 가져옴
  listToTodo(todoData);
  todoCount();
  checkDone();
};

//할일 클릭을 감지하여 처리하는 함수
function checkDone() {
  const doneBtn = document.getElementsByClassName("done-btn");
  const doneBtnList = [...doneBtn]; //HTMLCollection to Array

  doneBtnList.forEach((item) => {
    item.addEventListener("click", () => {
      let doneValue = item.attributes.done.value;
      doneValue === "true"
        ? ((item.attributes.done.value = "false"), todoCounting++)
        : ((item.attributes.done.value = "true"), todoCounting--);
      todoCount();
    });
  });
}

//미완료 할일의 수를 표시하는 함수
function todoCount() {
  const todayTodoCounting = document.getElementById("today__todoCounting");
  todayTodoCounting.innerText = todoCounting;
}

//list를 탐색하면서 요소를 하나씩 투두로 만드는 함수
function listToTodo(list) {
  const todoSection = document.getElementById("todo"); //투두리스트가 들어갈 부모노드
  const todoTemplate = document.getElementById("todo__template"); //todo(전체 박스) 템플릿
  todoSection.replaceChildren();
  list.forEach((item, idx) => {
    let todoListNewHtml = listToTodoList(item.list);

    let todoContent = todoTemplate.cloneNode(true); //템플릿 복사
    let todoNewHtml = todoContent.innerHTML; //템플릿 안의 html 복사

    todoNewHtml = todoNewHtml //복사한 html에서 필요한 부분을 item 내용에 맞게 변경
      .replace("{bg_color}", "bg-" + COLOR_LIST[idx % COLOR_LIST.length]) //COLOR_LIST에 있는 색 목록이 돌아가면서 나오도록 함!
      .replace("{category_name}", item.category)
      .replace("{todos}", todoListNewHtml);

    todoContent.innerHTML = todoNewHtml; //새롭게 바뀐 html을 템플릿에 적용
    todoSection.appendChild(todoContent.content); //부모노드 안에 넣기
  });
}

function listToTodoList(list) {
  const todoListTemplate = document.getElementById("todo__list__template"); //todo list(한 카테고리의 투두 목록들) 템플릿
  let finalHtml = "";
  list.forEach((item) => {
    item.done === false && todoCounting++;
    let todoListContent = todoListTemplate.cloneNode(true);
    let todoListNewHtml = todoListContent.innerHTML;
    todoListNewHtml = todoListNewHtml
      .replace("{done}", item.done)
      .replace("{todo_content}", item.content);
    finalHtml += todoListNewHtml;
  });

  return finalHtml;
}
