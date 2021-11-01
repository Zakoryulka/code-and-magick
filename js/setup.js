'use strict';

document.querySelector('.setup').classList.remove('hidden');

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
    fragmentWithWizards.appendChild(wizardElement);
  }
  return fragmentWithWizards;
};

setupSimilarList.appendChild(createFragmentWithWizards());
document.querySelector('.setup-similar').classList.remove('hidden');

