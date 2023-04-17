const form = document.getElementById("add-card-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const hashTags = e.target.hashtag.value.replace(/ /g, "").split(",");
  const category = e.target.category.value;
});
