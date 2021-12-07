'use strict';

//Изменение цвета мантии персонажа по нажатию.

(function() {
  const setup = document.querySelector('.setup');
  const setupWizard = document.querySelector('.setup-wizard');
  const wizardCoat = setupWizard.querySelector('.wizard-coat');
  const inputCoatColor = setup.querySelector('[name="coat-color"]');
  const fill = 'fill';
  const background = 'background';


  //функция для изменения цвета:
  const changeColarElement = function(element, typeOfStyle, color, input) {
    element.style.cssText = `${typeOfStyle}: ${color}`;
    // input.style.value = color;
    // input.style.cssText = `value="${color}"`;
    input.value = color;

  };

  wizardCoat.addEventListener('click', function() {
    changeColarElement(wizardCoat, fill, window.util.isGetRandElement(window.constants.coatColors), inputCoatColor);
  });

  //4. Изменение цвета глаз персонажа по нажатию.
  const wizardEyes = setupWizard.querySelector('.wizard-eyes');
  const inputEyesColor = setup.querySelector('[name="eyes-color"]');

  wizardEyes.addEventListener('click', function() {
    changeColarElement(wizardEyes, fill, window.util.isGetRandElement(window.constants.eyesColors), inputEyesColor);
  });

  //5. Изменение цвета фаерболов по нажатию.
  const setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
  const inputFireballColor = setup.querySelector('[name="fireball-color"]');


  setupFireballWrap.addEventListener('click', function() {
    changeColarElement(setupFireballWrap, background, window.util.isGetRandElement(window.constants.fireballColors), inputFireballColor);
  });

})();
