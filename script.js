document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".burger-navigation").classList.toggle("open");
  disableScroll.on();
});

document
  .querySelector(".footer-box__link__support-box")
  .addEventListener("click", function () {
    this.classList.toggle("max-width");
    document
      .querySelector(".footer-box__link__support__arrow")
      .classList.toggle("arrow-open");
    document
      .querySelector(".footer-box__link__connection")
      .classList.toggle("link-hidden");
    document
      .querySelector(".footer-box__link__services")
      .classList.toggle("link-hidden");
    document.querySelector(".footer-box__link").classList.toggle("more-footer");
  });
document
  .querySelector(".footer-box__link__services-box")
  .addEventListener("click", function () {
    this.classList.toggle("max-width");
    document
      .querySelector(".footer-box__link__services__arrow")
      .classList.toggle("arrow-open");
    document
      .querySelector(".footer-box__link__connection")
      .classList.toggle("link-hidden");
    document
      .querySelector(".footer-box__link__support")
      .classList.toggle("link-hidden");
    document.querySelector(".footer-box__link").classList.toggle("more-footer");
  });
document
  .querySelector(".footer-box__link__connection-box")
  .addEventListener("click", function () {
    this.classList.toggle("max-width");
    document
      .querySelector(".footer-box__link__connection__arrow")
      .classList.toggle("arrow-open");
    document
      .querySelector(".footer-box__link__support")
      .classList.toggle("link-hidden");
    document
      .querySelector(".footer-box__link__services")
      .classList.toggle("link-hidden");
    document.querySelector(".footer-box__link").classList.toggle("more-footer");
  });

// const link = document.querySelectorAll("#connection");

// document
//   .querySelector(".footer-box__link__connection")
//   .addEventListener("click", (event) => {
//     this.classList.toggle("max-width");
//     link.forEach((elem) => {
//       document.querySelector(elem).classList.toggle("more");
//     });
//   });
document
  .querySelector(".questions__questions-box__question-answer__question")
  .addEventListener("click", function () {
    this.classList.toggle("question-open");
    document
      .querySelector(".questions__questions-box__question-answer__arrow")
      .classList.toggle("arrow-unlock");
    document
      .querySelector(".questions__questions-box__question-answer__response")
      .classList.toggle("response-open");
  });
