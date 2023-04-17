import ITEM_LIST from "./data/item_data.js";

const cardsSection = document.getElementById("cards"); //card들이 들어갈 부모노드
const cardTemplate = document.getElementById("cards__template"); //card 템플릿

//ITEM_LIST를 탐색하면서 아이템 하나씩 템플릿을 복사하여 노드로 만든다.
ITEM_LIST.map((item, idx) => {
  //tag들 또한 리스트이므로 그 안에서 map을 돌린다.
  let tags = ``;
  item.tags.map((tag, idx) => {
    tags += `<small>` + tag + `</small>\n`;
  });

  let content = cardTemplate.cloneNode(true); //템플릿 복사
  let newHtml = content.innerHTML; //템플릿 안의 html 복사
  newHtml = newHtml //복사한 html에서 필요한 부분을 item 내용에 맞게 변경
    .replace("{item_name}", item.name)
    .replace("{tags}", tags)
    .replace("{img_alt}", item.name)
    .replace("{img_src}", item.img);

  content.innerHTML = newHtml; //새롭게 바뀐 html을 템플릿에 적용
  cardsSection.appendChild(content.content); //부모노드 안에 넣기
});
