import ITEM_LIST from "./data/item_data.js";

const cardsSection = document.getElementById("cards"); //card들이 들어갈 부모노드
const cardTemplate = document.getElementById("cards__template"); //card 템플릿

/*
nav 체크박스 필터링
*/
const DSP_CAT_NAME = {
  //DISPLAY_CATEGORY_NAME의 약어
  "check-all": "전체",
  "check-veg": "채소",
  "check-mush": "버섯",
  "check-tofu": "두부",
  "check-etc": "기타",
};

let dspItemList = [];

const checkBox = document.getElementsByClassName("main__nav__checkbox"); //checkbox에 해당하는 HTMLCollection
const checkBoxList = [...checkBox]; //HTMLCollection to Array
checkBoxList.map((checkBoxItem, idx) => {
  //checkbox의 변화를 감지
  checkBoxItem.addEventListener("change", () => {
    if (checkBoxItem.checked) {
      ITEM_LIST.forEach((item) => {
        if (item.category === DSP_CAT_NAME[checkBoxItem.id]) {
          dspItemList.push(item);
          dspItemList = Array.from(new Set(dspItemList));
        }
      });
    } else {
      ITEM_LIST.forEach((item) => {
        if (item.category === DSP_CAT_NAME[checkBoxItem.id]) {
          dspItemList.splice(
            dspItemList.findIndex((i) => i.category === item.category),
            1
          );
        }
      });
    }
    listToCard(dspItemList);
  });
});

/*
필터링된 데이터 기반으로 화면에 보여주기
*/

//ITEM_LIST를 탐색하면서 아이템 하나씩 템플릿을 복사하여 card 노드로 만든다.
function listToCard(list) {
  cardsSection.replaceChildren();
  list.map((item, idx) => {
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
}
