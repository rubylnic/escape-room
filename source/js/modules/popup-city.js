'use strict';
(function() {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    var btnOpen = document.querySelector('.main-nav__link--location');
    var btnClose = document.querySelector('.modal-city__button-close');
    var html = document.querySelector('html');
    var modal = document.querySelector('.modal-city');
    var overlay = modal.querySelector('.modal-city__overlay');
    var modalContainer = modal.querySelector('.modal-city__container');

    var closeModal = function() {
        modal.classList.add('modal-city--closed');
        html.style.overflow = 'auto';
    };
    var openModal = function(evt) {
        evt.preventDefault();
        modal.classList.remove('modal-city--closed');
        html.style.overflow = 'hidden';
    };
    var enterPressHandler = function(evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            openModal();
        }
    };
    var escPressHandler = function(evt) {
        if (evt.keyCode === ESC_KEYCODE) {
            closeModal();
        }
    };

    btnOpen.addEventListener('click', openModal);
    btnClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', function(evt) {
        evt.stopPropagation();
    });
    document.addEventListener('keydown', escPressHandler);
    btnOpen.addEventListener('keydown', enterPressHandler);

})();