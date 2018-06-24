'use strict';

 /**
  * переменная которая будет управлять размером фаербола в пикселях
  * @type {number}
  */
 var fireballSize = 22;
 /**
 * скорость мага
 * @type {number}
 */
 var wizardSpeed = 3;
 /**
 * ширина мага
 * @type {number}
 */
 var wizardWidth = 70;

 /**
  * Функция, определяющая скорость фаербола в зависимости от направления ветра.
  * @param {boolean} left - направление полёта фаербола
  * @return {number}
  */
 var getFireballSpeed = function (left) {
   return left ? 5 : 2;
 };

 /**
  * получение пропорциональной высоты мага в зависимости от его ширины
  * @return {number} высота мага
  */
 var getWizardHeight = function () {
   return 1.337 * wizardWidth;
 };

 /**
  * Функция, определяющая положение мага по горизонтали.
  * @param {number} width - ширина игровой области
  * @return {number}
  */
 var getWizardX = function (width) {
   return (width - wizardWidth) / 2;
 };

 /**
  * Функция, определяющая положение мага по вертикали.
  * @param {number} height - высота игровой области
  * @return {number}
  */
 var getWizardY = function (height) {
   return height / 3 - getWizardHeight();
 };

