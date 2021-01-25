"use strict"

const header = document.querySelector(".navigation");
const navButton = document.querySelector(".navigation__button-menu");
const menu = document.querySelector(".navigation__list");


header.classList.remove("navigation--nojs");
menu.classList.remove("navigation__list--nojs");

navButton.addEventListener("click", function() {
  if (header.classList.contains("navigation--close")) {
    header.classList.remove("navigation--close");
    menu.classList.remove("navigation__list--close");
    header.classList.add("navigation--opened");
  } else {
    header.classList.remove("navigation--opened");
    header.classList.add("navigation--close");
    menu.classList.add("navigation__list--close");
  }
});
