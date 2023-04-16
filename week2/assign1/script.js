import ITEM_LIST from "./data/item_data.js";

const cardsSection = document.getElementById("cards");
const cardTemplate = document.getElementById("cards__template");

let content = cardTemplate.cloneNode(true);
let newHtml = content.innerHTML;
newHtml = newHtml
  .replace("{item_name}", "청경채")
  .replace("{tags}", `<small>푸릇푸릇</small>\n<small>신선</small>`)
  .replace("{img_alt}", "청경채")
  .replace(
    "{img_src}",
    "https://img-cf.kurly.com/shop/data/goods/1619680685239l0.jpg"
  );

content.innerHTML = newHtml;
cardsSection.appendChild(content.content);
