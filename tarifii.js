const filterBox = document.querySelectorAll(".tariff__box__cart");

document.querySelector(".filt").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;
  let filerClass = event.target.dataset["f"];

  filterBox.forEach((elem) => {
    elem.classList.remove("hide");
    if (!elem.classList.contains(filerClass) && filerClass !== "all") {
      elem.classList.add("hide");
    }
  });
});

let previousButton = document.querySelector(".selected");

function changeColor(li) {
  if (previousButton !== null) {
    previousButton.classList.remove("selected");
  }

  li.classList.add("selected");
  previousButton = li;
}
