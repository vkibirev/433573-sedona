var openLink = document.querySelector(".open-form-button");
var findForm = document.querySelector(".find-hotel-form");

findForm.classList.add("find-hotel-form-close");

openLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  findForm.classList.toggle("find-hotel-form-close");
});
