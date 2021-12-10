'use strict';

//отрисовка фрагмента с магами:
(function() {
  // const names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // const surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая',  'Нионго', 'Ирвинг'];
  // let wizards = [];
  // let fragmentWithWizards = document.createDocumentFragment();
  const similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  const setupSimilarList = document.querySelector('.setup-similar-list');
  const amountOfWizards = 4;

  // //метод создания массива с магами:
  // const createWizardsList = function() {
  //   for (let i = 0; i < 4; i++) {
  //     let wizard = {
  //       name: window.util.isGetRandElement(names),
  //       surname: window.util.isGetRandElement(surnames),
  //       coatColor: window.util.isGetRandElement(window.constants.coatColors),
  //       eyesColor: window.util.isGetRandElement(window.constants.eyesColors)
  //     };
  //     wizards[i] = wizard;
  //   }
  //   return wizards;
  // };

  // //метод создания фрагмента с магами:
  // let createFragmentWithWizards = function() {
  //   for (let i = 0; i < 4; i++) {
  //     let wizardElement = similarWizardTemplate.cloneNode(true);
  //     createWizardsList();
  //     wizardElement.querySelector('.setup-similar-label').textContent = `${wizards[i].name} ${wizards[i].surname}`;
  //     wizardElement.querySelector('.wizard-coat').style.cssText = `fill: ${wizards[i].coatColor}`;
  //     wizardElement.querySelector('.wizard-eyes').style.cssText = `fill: ${wizards[i].eyesColor}`;
  //     fragmentWithWizards.append(wizardElement);
  //   }
  //   return fragmentWithWizards;
  // };

  // setupSimilarList.append(createFragmentWithWizards());
  // document.querySelector('.setup-similar').classList.remove('hidden');


  //Реализация - берем данные с сервера:
  //метод создания 1 мага:
  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.cssText = `fill: ${wizard.colorCoat}`;
    wizardElement.querySelector('.wizard-eyes').style.cssText = `fill: ${wizard.colorEyes}`;
    return wizardElement;
  };


  //коллбэки для обработки ошибок:
  //в случае успешной загрузки:
  const onLoadHandler = function (wizards) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < amountOfWizards; i++) {
      fragment.append(renderWizard(wizards[i]));
    }

    setupSimilarList.append(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  //в случае ошибки:
  const onErrorHandler = function (errorMessage) {
    let node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(onLoadHandler, onErrorHandler);


})();


