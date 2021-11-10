'use strict';


const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',  'Нионго', 'Ирвинг'];
const coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
                  'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
                  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
let wizards = [];
const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
let fragmentWithWizards = document.createDocumentFragment();
let setupSimilarList = document.querySelector('.setup-similar-list');

//выбор рандомного элемента из массива
const getRandElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

//функция создания массива с магами:
const createWizardsList = function() {
  for (let i = 0; i < 4; i++) {
    let wizard = {
      name: getRandElement(names),
      surname: getRandElement(surnames),
      coatColor: getRandElement(coatColors),
      eyesColor: getRandElement(eyesColors)
    };
    wizards[i] = wizard;
  }
  return wizards;
};

//функция создания фрагмента с магами:
let createFragmentWithWizards = function() {
  for (let i = 0; i < 4; i++) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    createWizardsList();
    wizardElement.querySelector('.setup-similar-label').textContent = `${wizards[i].name} ${wizards[i].surname}`;
    wizardElement.querySelector('.wizard-coat').style.cssText = `fill: ${wizards[i].coatColor}`;
    wizardElement.querySelector('.wizard-eyes').style.cssText = `fill: ${wizards[i].eyesColor}`;
    fragmentWithWizards.append(wizardElement);
  }
  return fragmentWithWizards;
};

setupSimilarList.append(createFragmentWithWizards());
document.querySelector('.setup-similar').classList.remove('hidden');


//Урок 4

// 1. Открытие/закрытие окна настройки персонажа:

const escButton = 'Escape';
const enterButton = 'Enter';

const setup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = setup.querySelector('.setup-close');
const userNameInput = setup.querySelector('.setup-user-name');

//метод закрытия попапа при нажимании esc:
const onPopupEscPress = function(evt) {
  //если фокус стоит на поле ввода имени, то esc не закрывает попап:
  if (userNameInput === document.activeElement) {
    return evt;
  } else if (evt.key === escButton) {
    closePopup();
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
  if (evt.key === enterButton) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.key === enterButton) {
    closePopup();
  }
});

//2. Валидация ввода имени персонажа.

const minNameLength = 2;
const maxNameLength = 25;

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

//3. Изменение цвета мантии персонажа по нажатию.
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
  changeColarElement(wizardCoat, fill, getRandElement(coatColors), inputCoatColor);
});

//4. Изменение цвета глаз персонажа по нажатию.
const wizardEyes = setupWizard.querySelector('.wizard-eyes');
const inputEyesColor = setup.querySelector('[name="eyes-color"]');

wizardEyes.addEventListener('click', function() {
  changeColarElement(wizardEyes, fill, getRandElement(eyesColors), inputEyesColor);
});

//5. Изменение цвета фаерболов по нажатию.
const setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
const inputFireballColor = setup.querySelector('[name="fireball-color"]');
const fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

setupFireballWrap.addEventListener('click', function() {
  changeColarElement(setupFireballWrap, background, getRandElement(fireballColors), inputFireballColor);
});
