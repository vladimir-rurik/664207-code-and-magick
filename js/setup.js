'use strict';

(function () {

  var WIZARD_COUNT = 4;
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  /** функция выбора случайного элемента массива
   * @param {Array} arr - исходный массив
   * @return {string} arr[random]
   */
  var randomArrItem = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  /** функция возвращающая массив волшебников
   * @param {number} wizardCount - кол-во волшебников
   * @return {Array} wizards
   */
  var getWizards = function (wizardCount) {
    var wizards = [];

    for (var i = 0; i < wizardCount; i++) {
      wizards[i] =
        {
          name: randomArrItem(WIZARD_FIRST_NAMES) + ' ' + randomArrItem(WIZARD_LAST_NAMES),
          coatColor: randomArrItem(coatColor),
          eyesColor: randomArrItem(eyesColor)
        };
    }
    return wizards;
  };

  /** функция заполнения DOM объекта свойствами объекта волшебника
   * @param {Wizard} wizard - объект исходного волшебника
   * @return {DOMobject} wizardElement
   */
  var fillWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  getWizards(WIZARD_COUNT).forEach(function (wizard) {
    fragment.appendChild(fillWizard(wizard));
  });

  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

})();
