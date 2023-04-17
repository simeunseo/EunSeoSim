const imageInput = document.getElementById("image");
const imageThumbNail = document.getElementById("image-thumbnail");
imageInput.addEventListener("input", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageThumbNail.src = reader.result;
  });
  reader.readAsDataURL(imageInput.files[0]);
});

const form = document.getElementById("add-card-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const hashTags = e.target.hashtag.value.replace(/ /g, "").split(",");
  const category = e.target.category.value;
  console.log(e.target.image.value);
});
