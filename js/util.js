'use strict';

(function() {
  const escButton = 27;
  const enterButton = 13;

  //метод если нажат ESC
  const isEscEvent = function(evt, action) {
    if (evt.keyCode === escButton) {
      action();
    }
  };

  const isEnterEvent = function(evt, action) {
    if (evt.keyCode === enterButton) {
      action();
    }
  };

  //выбор рандомного элемента из массива
  const getRandElement = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    isGetRandElement: getRandElement
  };
})();
