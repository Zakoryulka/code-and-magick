'use strict';

//экспортирует в глобальную область видимости функции
//backend.load и backend.save,
//которые будут работать с сервером данных
(function () {
  const urlSave = 'https://24.javascript.pages.academy/code-and-magick';
  const urlLoad = 'https://24.javascript.pages.academy/code-and-magick/data';

  const save = function (data, onSuccess) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response); //свойство response - получить сам ответ
    });

    xhr.open('POST', urlSave);
    xhr.send(data);
  };

  const load = function (onLoad, onError) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError(`Запрос не успел выполниться за ${xhr.timeout} мс`);
    });

    xhr.timeout = 10000; //10s

    xhr.open('GET', urlLoad);
    xhr.send();
  };

  window.backend = {
    save: save,
    load: load
  };
})();
