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

  var sldElem = document.querySelector('.new-goods__list');
  var sldPagination = document.querySelector('.new-goods__pagination');
  var flkty = new Flickity(sldElem, {
    // options
    contain: true,
    groupCells: true
  });
  var slideHandle = function () {
    var text = (flkty.selectedIndex + 1) + ' of ' + flkty.slides.length;
    sldPagination.innerHTML = text;
  };
  slideHandle();
  flkty.on('select', slideHandle);


  var toggleFooter = document.querySelectorAll('.faq__item');
  toggleFooter.forEach(function (el, idx) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      toggleFooter.forEach(function (el2, idx2) {
        if (idx === idx2) {
          el2.classList.toggle('faq__item--open');
        } else {
          el2.classList.remove('faq__item--open');
        }
      });
    });

    el.classList.remove('faq__item--open');
  });


})();
