'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.wizard = {
    /**
     * Метод, возвращающий список возможных цветов глаз.
     * @return {Array.<string>} массив css-цветов
     */
    getEyesColors: function () {
      return EYES_COLORS;
    },

    /**
     * Метод, возвращающий список возможных цветов фаербола.
     * @return {Array.<string>} массив css-цветов
     */
    getFireballColors: function () {
      return FIREBALL_COLORS;
    },

    /**
     * Метод, возвращающий список возможных цветов фаербола.
     * @return {Array.<string>} массив css-цветов
     */
    getCoatColors: function () {
      return COAT_COLORS;
    }
  };
})();
