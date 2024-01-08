

document.getElementById('log-open').addEventListener('click', function() {
  var leftSidePanel = document.querySelector('.left-side-panel');
  var codeLog = document.getElementById('code-log');
  var mainContent = document.getElementById('main-content');

  if (leftSidePanel.classList.contains('log-open')) {
    leftSidePanel.classList.remove('log-open');
    codeLog.setAttribute('hidden', '');
    mainContent.style.marginLeft = '65px'; // Устанавливаем margin-left обратно на 100px
  } else {
    leftSidePanel.classList.add('log-open');
    codeLog.removeAttribute('hidden');
    mainContent.style.marginLeft = '302px'; // Устанавливаем margin-left на 300px
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var filtersOpenButton = document.getElementById('filters-open');
  var mainContent = document.getElementById('main-content');
  var leftSidePanel = document.querySelector('.left-side-panel');
  var buttonsToShowOrHide = ['publish', 'sitemap', 'robots', 'dates']; // ID кнопок для показа/скрытия

  filtersOpenButton.addEventListener('click', function() {
      if (filtersOpenButton.classList.contains('b-selected')) {
          // Если кнопка уже выбрана, удаляем класс и возвращаем стили
          filtersOpenButton.classList.remove('b-selected');
          mainContent.style.marginLeft = '65px';
          leftSidePanel.style.width = '0px'; // Уменьшаем ширину left-side-panel

          // Скрываем кнопки
          buttonsToShowOrHide.forEach(function(buttonId) {
              var button = document.getElementById(buttonId);
              if (button) button.hidden = true;
          });
      } else {
          // Если кнопка не выбрана, добавляем класс и изменяем стили
          filtersOpenButton.classList.add('b-selected');
          mainContent.style.marginLeft = '302px';
          leftSidePanel.style.width = '300px'; // Увеличиваем ширину left-side-panel

          // Показываем кнопки
          buttonsToShowOrHide.forEach(function(buttonId) {
              var button = document.getElementById(buttonId);
              if (button) button.hidden = false;
          });
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var filtersOpenButton = document.getElementById('filters-open');
  var mainContent = document.getElementById('main-content');
  var leftSidePanel = document.querySelector('.left-side-panel');
  var buttonsToShowOrHide = ['publish', 'sitemap', 'robots', 'dates']; // ID кнопок для показа/скрытия

  filtersOpenButton.addEventListener('click', function() {
      // Переключаем класс b-selected
      filtersOpenButton.classList.toggle('b-selected');

      // Переключаем ширину left-side-panel
      var currentWidth = leftSidePanel.style.width;
      leftSidePanel.style.width = currentWidth === '300px' ? '60px' : '300px';

      // Переключаем margin-left для main-content
      var currentMargin = mainContent.style.marginLeft;
      mainContent.style.marginLeft = currentMargin === '302px' ? '65px' : '302px';

      // Переключаем видимость кнопок
      buttonsToShowOrHide.forEach(function(buttonId) {
          var button = document.getElementById(buttonId);
          if (button) {
              button.hidden = !button.hidden;
          }
      });
  });
});
