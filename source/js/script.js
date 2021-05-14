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
  if (sldElem) {
    sldElem.classList.remove('new-goods__list--nojs');
    var sldPagination = document.querySelector('.new-goods__pagination');
    var flkty = new Flickity(sldElem, {
      // options
      contain: true,
      groupCells: true,
      arrowShape: 'M100,50.5H0 M0,50.5L18.9,66 M0,50.5L18.9,35'
    });
    var slideHandle = function () {
      var text = (flkty.selectedIndex + 1) + ' of ' + flkty.slides.length;
      if (sldPagination) {
        sldPagination.innerHTML = text;
      }
    };
    slideHandle();
    flkty.on('select', slideHandle);
  }

  var gSldMain = document.querySelector('.good__slider-list-main');
  var gSldNav = document.querySelector('.good__slider-list-nav');
  if (gSldMain) {
    gSldMain.classList.remove('good__slider-list-main--nojs');
    if (gSldNav) {
      gSldNav.classList.remove('good__slider-list-nav--nojs');
    }
    var gSldMaiPagination = document.querySelector('.good__slider-main-pagination');
    var gSldMainFlickity = new Flickity(gSldMain, {
      'prevNextButtons': false,
      'contain': true,
      'pageDots': false
    });
    var gSldMainSelectHandle = function () {
      var text = (gSldMainFlickity.selectedIndex + 1) + ' of ' + gSldMainFlickity.slides.length;
      if (gSldMaiPagination) {
        gSldMaiPagination.innerHTML = text;
      }
    };
    gSldMainSelectHandle();
    gSldMainFlickity.on('select', gSldMainSelectHandle);
  }

  var toggleFaq = document.querySelectorAll('.faq__item');
  toggleFaq.forEach(function (el, idx) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      toggleFaq.forEach(function (el2, idx2) {
        if (idx === idx2) {
          el2.classList.toggle('faq__item--open');
        } else {
          el2.classList.remove('faq__item--open');
        }
      });
    });

    el.classList.remove('faq__item--open');
  });

  var tabs = document.querySelectorAll('.good__tab-header-link');
  tabs.forEach(function (el, idx) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      tabs.forEach(function (el2) {
        el2.classList.remove('good__tab-header-link--selected');
      });

      document.querySelectorAll('.good__tab').forEach(function (el3) {
        if (el.dataset.tab === el3.id) {
          el3.classList.remove('good__tab--hidden');
        } else {
          el3.classList.add('good__tab--hidden');
        }
      });

      el.classList.add('good__tab-header-link--selected');
    });

    if (idx === tabs.length - 1) {
      el.click();
    }
  });

  var buttonFilter = document.querySelector('.catalog__filter-button');
  var filter = document.querySelector('.filter');
  var filterButtonClose = document.querySelector('.filter__button-close');
  if (buttonFilter && filter && filterButtonClose) {

    filter.classList.remove('filter--nojs');
    buttonFilter.classList.remove('catalog__filter-button--nojs');
    buttonFilter.addEventListener('click', function (e) {
      e.preventDefault();

      filter.classList.toggle('filter--open');
      document.body.style.overflowY = 'hidden';
    });

    filterButtonClose.addEventListener('click', function (e) {
      e.preventDefault();

      filter.classList.toggle('filter--open');
    });

    filter.classList.remove('filter--open');
  }

  var toggleFilter = document.querySelectorAll('.filter__item-header');

  toggleFilter.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      el.parentElement.classList.toggle('filter__item--open');
    });

    el.parentElement.classList.remove('filter__item--open');
  });

  var modal = document.querySelector('.modal');
  var modalClose = document.querySelector('.modal__close');
  var form = modal.querySelector('form');
  var emailInput = form.querySelector('[name=\'email\']');

  if (modal && form) {
    var closeModal = function () {
      modal.classList.remove('modal--open');
      document.body.style.overflowY = '';
    };

    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        closeModal();
      }
    });

    document.querySelectorAll('.page-header__login, .main-nav__login').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('modal--open');
        emailInput.focus();
        document.body.style.overflowY = 'hidden';
      });
    });


    modal.addEventListener('click', function (e) {
      if (!e.target.closest('.modal__form')) {
        closeModal();
      }
    });


    modalClose.addEventListener('click', closeModal);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      localStorage.setItem('form-email', form.email.value);

      form.reset();
      closeModal();
    });
  }


  var modalCart = document.querySelector('.modal-cart');
  var modalCartClose = document.querySelector('.modal-cart__close');
  var modalCartWrap = modal.querySelector('form');

  if (modalCart && modalCartWrap) {
    var closeModalCart = function () {
      modalCart.classList.remove('modal-cart--open');
      document.body.style.overflowY = '';
    };

    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        closeModalCart();
      }
    });

    document.querySelectorAll('.good__cart').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        modalCart.classList.add('modal-cart--open');
        document.body.style.overflowY = 'hidden';
      });
    });

    modalCart.addEventListener('click', function (e) {
      if (!e.target.closest('.modal-cart__wrap')) {
        closeModalCart();
      }
    });


    modalCartClose.addEventListener('click', closeModalCart);
  }


})();
