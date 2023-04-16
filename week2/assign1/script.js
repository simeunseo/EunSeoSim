import ITEM_LIST from "./data/item_data.js";

const cardsSection = document.getElementById("cards");
const cardTemplate = document.getElementById("cards__template");

ITEM_LIST.map((item, idx) => {
  let tags = ``;
  item.tags.map((tag, idx) => {
    tags += `<small>` + tag + `</small>\n`;
  });

  let content = cardTemplate.cloneNode(true);
  let newHtml = content.innerHTML;
  newHtml = newHtml
    .replace("{item_name}", item.name)
    .replace("{tags}", tags)
    .replace("{img_alt}", item.name)
    .replace("{img_src}", item.img);

  content.innerHTML = newHtml;
  cardsSection.appendChild(content.content);
});
