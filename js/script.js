(function () {
  'use srtict';
  var openLink = document.querySelector(".open-form-button");
  var findForm = document.querySelector(".find-hotel-form");

  if(openLink) {
    openLink.addEventListener("click", function(evt) {
      evt.preventDefault();
      findForm.classList.toggle("find-hotel-form-close");
    });
  }  
})();
