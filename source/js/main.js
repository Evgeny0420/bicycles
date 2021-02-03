'use strict';

(function () {
  if (document.getElementsByClassName('page-body')) {
    var body = document.querySelector('.page-body');
  }
  var header = document.querySelector('.navigation');
  var navButton = document.querySelector('.navigation__button-menu');
  var menu = document.querySelector('.navigation__list');
  var navLink = document.querySelectorAll('.navigation__item');

  header.classList.remove('navigation--nojs');
  menu.classList.remove('navigation__list--nojs');

  var closeMenu = function () {
    header.classList.remove('navigation--opened');
    header.classList.add('navigation--close');
    menu.classList.add('navigation__list--close');
    body.classList.remove('page-body--open-menu');
  };

  var openMenu = function () {
    header.classList.remove('navigation--close');
    menu.classList.remove('navigation__list--close');
    header.classList.add('navigation--opened');
    body.classList.add('page-body--open-menu');
  };

  navButton.addEventListener('click', function () {
    if (header.classList.contains('navigation--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
      closeMenu();
    });
  }
})();
