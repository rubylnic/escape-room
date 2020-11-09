'use strict';
(function () {
  var phoneMask = IMask(
    document.getElementById('questions-tel'), {
      mask: '+{7}(000)000-00-00'
    });
})()
