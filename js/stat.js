'use strict';

(function () {

  // размеры облака
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  // координаты верхней левой точки облака
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  // величина смещения
  var GAP = 10;

  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
  var TEXT_FONT = '16px PT Mono';

  // параметры гистограммы
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var USER_DEFAULT_COLOR = 'rgba(255, 0, 0, 1)'; // red
  var OTHER_DEFAULT_COLOR_TEMPLATE = 'rgba(0, 0, 255, {0})'; // blue with replacable opacity
  var USER_NAME = 'Вы';

  var COLUMN_BLOCK_X = CLOUD_X + GAP * 4;
  var COLUMN_BLOCK_Y = CLOUD_Y + GAP * 11 + BAR_HEIGHT;


  /** функция отрисовки облака
   * @param {Canvas} ctx
   * @param {number} x - координата левого угла
   * @param {number} y - координата верхнего угла
   * @param {Color} color
   */
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /** функция нахождения максимального значения
   * @param {Array} arr - исходный массив
   * @return {number} максимальный элемент
   */
  var getMaxValue = function (arr) {
    var MaxValue = arr[0];

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > MaxValue) {
        MaxValue = arr[i];
      }
    }

    return MaxValue;
  };

  /** функция отрисовки строки приветствия
  * @param {Canvas} ctx
  * @param {string} text
  * @param {number} x - координата левого угла
  * @param {number} y - координата верхнего угла
  */
  var writeText = function (ctx, text, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = TEXT_FONT;
    ctx.fillText(text, x, y);
  };

  /** функция получения цвета с рандомной прозрачностью
   * @param {Array} names
   * @param {number} index
   * @return {string} bar color
   */
  var getBarColor = function (names, index) {
    return names[index] === USER_NAME ? USER_DEFAULT_COLOR : OTHER_DEFAULT_COLOR_TEMPLATE.replace('{0}', Math.random().toFixed(2));
  };

  /** функция отрисовки гистограммы
   * @param {Canvas} ctx
   * @param {Array} names
   * @param {number} index
   * @param {number} x
   * @param {number} height
   */
  var renderColumn = function (ctx, names, index, x, height) {
    ctx.fillStyle = getBarColor(names, index);
    ctx.fillRect(x, COLUMN_BLOCK_Y - (height + GAP * 2), BAR_WIDTH, height);
  };

  /**
   * функция вызывается, когда игрок проходит уровень.
   * @param {Canvas} ctx - канвас на котором рисуется игра.
   * @param {Array} names - массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
   * @param {Array} times - массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.
   */
  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    writeText(ctx, 'Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3);
    writeText(ctx, 'Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 5);

    var maxTime = getMaxValue(times);

    for (var i = 0; i < names.length; i++) {
      var columnHeight = (BAR_HEIGHT * times[i].toFixed(0)) / maxTime;

      writeText(ctx, times[i].toFixed(0), COLUMN_BLOCK_X + (BAR_GAP + BAR_WIDTH) * i, COLUMN_BLOCK_Y - (columnHeight + GAP * 3));
      renderColumn(ctx, names, i, COLUMN_BLOCK_X + (BAR_GAP + BAR_WIDTH) * i, columnHeight);
      writeText(ctx, names[i], COLUMN_BLOCK_X + (BAR_GAP + BAR_WIDTH) * i, COLUMN_BLOCK_Y);
    }
  };

}());
