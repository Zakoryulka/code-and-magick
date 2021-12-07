'use strict';

// 1. перетаскивание окна персонажа
(function () {

  const setup = document.querySelector('.setup');
  const upload = setup.querySelector('.upload');

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    //координаты иконки
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let isDragged = false; //флаг действия перемещения

    const onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();

      isDragged = true; //перемещение случилось, флаг меняет значение

      //координаты перемещения
      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      //окно меняет координаты
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      console.log(isDragged);
    };

    let onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      //если передвижение было, то отменим действие выбора картинки при клике
      if (isDragged) {
        const onClickPreventDefault = function(clickEvt) {
          clickEvt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });



})();
