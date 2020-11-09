'use strict';
(function () {
  var headings = document.querySelectorAll('.footer__upper-heading');
  var activeHeading;
  var links = document.querySelectorAll('.footer__upper-list');

  headings.forEach(function (element) {
    element.classList.add('footer__upper-heading--closed');
  });
  links.forEach(function (element) {
    element.classList.add('footer__upper-list--closed');
  });

  headings.forEach(function (element) {
    element.addEventListener('click', function () {
      element.classList.remove('footer__upper-heading--closed');
      element.nextElementSibling.classList.remove('footer__upper-list--closed');
      if (activeHeading) {
        activeHeading.classList.add('footer__upper-heading--closed');
        activeHeading.nextElementSibling.classList.add('footer__upper-list--closed');
      }
      activeHeading = (activeHeading === element) ? 0 : element;
    });
  });
})();
