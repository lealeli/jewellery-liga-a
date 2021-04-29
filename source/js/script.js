'use strict';

/* global Flickity */
(function () {
  var button = document.querySelector('.page-header__toggle');
  var menu = document.querySelector('.page-header__wrapper');
  var subMenu = document.querySelector('.main-nav');

  function clickMenu() {
    button.classList.toggle('page-header__toggle--open');
    subMenu.classList.toggle('main-nav--open');
  }

  if (button && subMenu && menu) {
    button.classList.remove('page-header__toggle--nojs');
    subMenu.classList.remove('main-nav--nojs');
    menu.classList.remove('page-header__wrapper--nojs');
    button.addEventListener('click', clickMenu);
  }

  var elem = document.querySelector('.qwe');
  var flkty = new Flickity(elem, {
    // options
    contain: true,
    groupCells: true
  });
  console.log(flkty);


})();
