'use strict';
(function () {
  var btn = document.querySelector('.main-header__menu-button');
  var bg = document.querySelector('.background-container');
  var nav = document.querySelector('.main-nav');
  var main = document.querySelector('.main');
  var footer = document.querySelector('.footer');

  var js = function () {
    bg.classList.remove('background-container--opened');
    nav.classList.add('main-nav--closed');
    btn.classList.add('main-header__menu-button--closed');
    footer.classList.add('footer--closed');
    main.classList.remove('main--closed');
  };
  js();

  var openCloseMenu = function (evt) {
    evt.preventDefault();
    bg.classList.toggle('background-container--opened');
    nav.classList.toggle('main-nav--closed');
    btn.classList.toggle('main-header__menu-button--closed');
    footer.classList.toggle('footer--closed');
    main.classList.toggle('main--closed');
  };
  btn.addEventListener('click', openCloseMenu);
})();
