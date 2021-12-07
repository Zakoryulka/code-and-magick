'use strict';

//отрисовка фрагмента с магами:
(function() {
  const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',  'Нионго', 'Ирвинг'];
  let wizards = [];
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  let fragmentWithWizards = document.createDocumentFragment();
  let setupSimilarList = document.querySelector('.setup-similar-list');

  //метод создания массива с магами:
  const createWizardsList = function() {
    for (let i = 0; i < 4; i++) {
      let wizard = {
        name: window.util.isGetRandElement(names),
        surname: window.util.isGetRandElement(surnames),
        coatColor: window.util.isGetRandElement(window.constants.coatColors),
        eyesColor: window.util.isGetRandElement(window.constants.eyesColors)
      };
      wizards[i] = wizard;
    }
    return wizards;
  };

  //метод создания фрагмента с магами:
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
})();


