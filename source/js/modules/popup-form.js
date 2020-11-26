'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.footer__link');
  var btnClose = document.querySelector('.modal-question__button-close');
  var html = document.querySelector('html');
  var modal = document.querySelector('.modal-question');
  var overlay = modal.querySelector('.modal-question__overlay');
  var modalContainer = modal.querySelector('.modal-question__container');
  var submit = document.querySelector('.modal-question__form-container button');
  var errorMessage = document.querySelector('.modal-question__error-message');
  var errorMessageCheckbox = document.querySelector('.modal-question__error-message-checkbox');

  var form = modal.querySelector('form');
  var name = modal.querySelector('[name=modal-name]');
  var email = modal.querySelector('[name=modal-email]');
  var comment = modal.querySelector('[name=modal-comment]');
  var checkbox = modal.querySelector('[name=modal-checkbox]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  var closeModal = function () {
    modal.classList.add('modal-question--closed');
    modal.classList.remove('modal--error');
  };
  var openModal = function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-question--closed');
    html.style.overflow = 'hidden';

    if (storage) {
      name.value = localStorage.getItem('name');;
      email.value = localStorage.getItem('email');;
      comment.value = localStorage.getItem('comment');;
    }

    name.focus();
  };
  var enterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openModal();
    }
  };
  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });
  document.addEventListener('keydown', escPressHandler);
  btnOpen.addEventListener('keydown', enterPressHandler);

  var errorHandler = function () {
    var validity = email.checkValidity();
    if (validity === true) {
      errorMessage.classList.add('modal-question__error-message--hidden');
    } else {
      errorMessage.classList.remove('modal-question__error-message--hidden')
    }
  }

  var errorCheckboxHandler = function (evt) {
    if (!checkbox.checked) {
      evt.preventDefault();
      errorMessageCheckbox.classList.remove('modal-question__error-message-checkbox--hidden');
    } else {
      errorMessageCheckbox.classList.add('modal-question__error-message-checkbox--hidden')
    }
  }

  submit.addEventListener('click', errorHandler);
  submit.addEventListener('click', errorCheckboxHandler);

  form.addEventListener('submit', function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      name.setCustomValidity('');
      email.setCustomValidity('');
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('comment', comment.value);
      }
    }
  });
})();
