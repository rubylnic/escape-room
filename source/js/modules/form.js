'use strict';
(function() {
    var section = document.querySelector('.questions');
    if (section) {
        var form = section.querySelector('form');
        var name = section.querySelector('[name=name]');
        var tel = section.querySelector('[name=tel]');
        var comment = section.querySelector('[name=comment]');
        var checkbox = section.querySelector('[name=checkbox]');

        var isStorageSupport = true;
        var storage = '';

        try {
            storage = localStorage.getItem('login');
        } catch (err) {
            isStorageSupport = false;
        }

        if (storage) {
            name.value = storage;
            tel.value = storage;
            comment.value = storage;
        }

        form.addEventListener('submit', function(evt) {
            if (!name.value || !tel.value || !checkbox.checked) {
                evt.preventDefault();
                checkbox.setCustomValidity('Согласны на обработку персональных данных?');
            } else {
                if (isStorageSupport) {
                    localStorage.setItem('name', name.value);
                    localStorage.setItem('tel', tel.value);
                    localStorage.setItem('comment', comment.value);
                }
            }
        });
    }
})();