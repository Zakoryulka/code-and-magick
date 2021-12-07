'use strict';

// Валидация ввода имени персонажа.
(function() {

const minNameLength = 2;
const maxNameLength = 25;
const userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function(evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity(`Имя персонажа должно быть не менее ${minNameLength}-х символов.`);
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity(`Имя персонажа должно быть не более ${maxNameLength}-ти символов.`);
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Поле обязательно для заполнения.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function(evt) {
  let target = evt.target;
  if (target.value.length < minNameLength) {
    target.setCustomValidity(`Имя персонажа должно состоять минимум из ${minNameLength}-х символов.`);
  } else {
    target.setCustomValidity('');
  }
});

})();
