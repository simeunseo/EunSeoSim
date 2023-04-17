import ITEM_LIST from "./data/item_data.js";

//checkbox의 id를 카테고리명으로 변환하기 위한 객체
const CATEGORY_NAME = {
  "check-all": "전체",
  "check-veg": "채소",
  "check-mush": "버섯",
  "check-tofu": "두부",
  "check-etc": "기타",
};

/*
nav 체크박스 필터링
*/

let curItemList = []; //화면에 보여줄 아이템 리스트를 저장하는 변수

const checkBox = document.getElementsByClassName("main__nav__checkbox"); //checkbox에 해당하는 HTMLCollection
const checkBoxList = [...checkBox]; //HTMLCollection to Array
checkBoxList.forEach((item) => {
  //checkbox의 변화를 감지
  item.addEventListener("change", () => {
    curItemList = handleCheckBox(
      item.checked, //감지된 변화가 체크인가, 체크 해제인가
      CATEGORY_NAME[item.id], //변화가 감지된 checkBox의 카테고리명
      curItemList
    );
    listToCard(curItemList); //반환된 list를 Card 노드로 만들어 화면에 보여준다.
  });
});

//체크박스 체크와 해제(isChecked)에 따라 해당하는 카테고리(categoryName)에 속하는 아이템 목록을 list에 추가하거나 삭제하는 함수
function handleCheckBox(isChecked, categoryName, list) {
  if (categoryName === "전체") {
    isChecked //전체 카테고리 선택 시
      ? ITEM_LIST.forEach((item) => {
          //list에 ITEM_LIST의 모든 항목을 넣음
          list.push(item);
          list = Array.from(new Set(list));
        })
      : checkBoxList.forEach((item) => {
          //전체 카테고리 선택 해제 시
          item.checked || //체크박스 목록에서 체크가 안된것은 list에서 제거
            (list = removeByCategoryName(list, CATEGORY_NAME[item.id]));
        });
  } else {
    isChecked //전체가 아닌 다른 카테고리 선택 시
      ? ITEM_LIST.forEach((item) => {
          item.category === categoryName && //해당 카테고리에 속하는 item들을 list에 넣음
            (list.push(item), (list = Array.from(new Set(list))));
        })
      : //카테고리 선택 해제 시, 'check-all' 체크박스가 선택이 안되어있는 상태라면
        !checkBoxList.filter((item) => item.id === "check-all")[0].checked && //해당 카테고리에 속하는 item들을 list에서 제거
        (list = removeByCategoryName(list, categoryName));
  }
  return list;
}

//list에서 카테고리명이 categoryName인 아이템을 제거하는 함수
function removeByCategoryName(list, categoryName) {
  list = list.filter((item) => item.category != categoryName);
  return list;
}

/*
필터링된 데이터 기반으로 화면에 보여주기
*/
const cardsSection = document.getElementById("cards"); //card들이 들어갈 부모노드
const cardTemplate = document.getElementById("cards__template"); //card 템플릿

//아이템 목록을 탐색하면서 아이템 하나씩 템플릿을 복사하여 card 노드로 만드는 함수
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
