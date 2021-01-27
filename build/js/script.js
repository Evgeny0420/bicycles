"use strict"

const header = document.querySelector(".navigation");
const navButton = document.querySelector(".navigation__button-menu");
const menu = document.querySelector(".navigation__list");
const navLink = document.querySelectorAll(".navigation__item");

header.classList.remove("navigation--nojs");
menu.classList.remove("navigation__list--nojs");

const closeMenu = function () {
  header.classList.remove("navigation--opened");
  header.classList.add("navigation--close");
  menu.classList.add("navigation__list--close");
}

const openMenu = function () {
  header.classList.remove("navigation--close");
  menu.classList.remove("navigation__list--close");
  header.classList.add("navigation--opened");
}

navButton.addEventListener("click", function() {
  if (header.classList.contains("navigation--close")) {
    openMenu();
  } else {
    closeMenu();
  }
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function() {
    closeMenu();
  });
}
