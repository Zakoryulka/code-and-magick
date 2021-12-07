'use strict';
//context - ctx

//Модуль статистики:
(function() {

  const cloudWidth = 420;
  const cloudHeight = 270;
  const cloudX = 100;
  const cloudY = 10;
  const gap = 10;
  const barGap = 50;
  const barWidth = 40;
  const maxBarHeight = 150;
  const asideGap = (cloudWidth - barWidth * 4 - barGap * 3) / 2;

  //метод отрисовки окна
  let renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cloudWidth, cloudHeight);
  };

  //метод получения максимального значения из масиива:
  let getMaxElement = function(arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  //получаем рандомное число от/до включая минимальное и максимальное значения:
  let getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //метод отрисовки окна статистики:
  window.renderStatistics = function(ctx, names, times) {

    //отрисовываем тень от окна:
    renderCloud(ctx, cloudX + gap, cloudY + gap, 'rgba(0, 0, 0, 0.7)');

    //отрисовываем окно:
    renderCloud(ctx, cloudX, cloudY, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';

    //поздравляем игрока:
    ctx.fillText('Ура вы победили!', cloudX + asideGap, cloudY + 20);
    ctx.fillText('Список результатов:', cloudX + asideGap, cloudY + 40);

    //рисуем шкалу для каждого игрока и делаем подписи:
    for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000000';

    let maxTime = getMaxElement(times);
    //  maxBarHeight       X
    //  ------------ = ---------
    //   maxTime        times[i]
    //  X = maxBarHeight * times[i] / maxTime

    let barHeight = maxBarHeight * times[i] / maxTime;
    let barX = cloudX + asideGap + (barWidth + barGap) * i;
    let barY = cloudY + maxBarHeight - barHeight;

    //пишем имя каждого игрока:
    ctx.fillText(names[i], barX, cloudY + cloudHeight - 20);

    //подписываем значение времени у шкалы:
    ctx.fillText(Math.round(times[i]), barX, barY + 70);

    //Выбираем цвет заливки шкалы для каждого игрока:
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = `hsl(240,${getRandomIntInclusive(0, 100)}%,50%)`;
    }

    //рисуем шкалу для каждого игрока:
    ctx.fillRect(barX, barY + 80, barWidth, barHeight);
    }
  };

})();
