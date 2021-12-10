'use strict';

// 1. Открытие/закрытие окна настройки персонажа:
(function () {

  const setup = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = setup.querySelector('.setup-close');
  const userNameInput = setup.querySelector('.setup-user-name');
  const form = setup.querySelector('.setup-wizard-form');

  //метод закрытия попапа при нажимании esc:
  const onPopupEscPress = function(evt) {
    //если фокус стоит на поле ввода имени, то esc не закрывает попап:
    if (userNameInput === document.activeElement) {
      return evt;
    } else {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  //метод открытия попапа:
  const openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  const closePopup = function() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function() {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  //отправляем данные формы по нажатию на кнопку:
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      setup.classList.add('hidden');
    });
    evt.preventDefault();
  });
})();
