// Определение функции updateWidths вне обработчика событий
function updateWidths() {
  // Получаем элементы по их классам
  var asideElement = document.querySelector('.aside');
  var mainElement = document.querySelector('.main');

  // Устанавливаем новые значения ширины
  asideElement.style.width = '30%';
  mainElement.style.width = '70%';
}

// Добавление обработчика события click к элементу с id 'log-open'
document.getElementById('log-open').addEventListener('click', function() {
  // Вызов функции updateWidths при клике
  updateWidths();
});

  /*
  var leftSidePanel = document.querySelector('.aside');
  var mainContent = document.querySelector('.main');

  var codeLog = document.getElementById('code-log');
  var myButton = document.getElementById('log-open'); // Get the button element
  var bottomButton = document.getElementById('bottom-buttons'); // Get the button element











  var myButton = document.getElementById('log-open'); // Get the button element
  var myButton2 = document.getElementById('refresh-page'); // Get the button element


  if (leftSidePanel.classList.contains('log-open')) {
    leftSidePanel.classList.remove('log-open');
    codeLog.setAttribute('hidden', '');
    mainContent.style.marginLeft = '80px';
    myButton.classList.remove('b-selected'); // Remove the 'b-select' class
    bottomButton.removeAttribute('hidden');
    myButton2.setAttribute('hidden', '');


  } else {
    leftSidePanel.classList.add('log-open');
    codeLog.removeAttribute('hidden');
    bottomButton.setAttribute('hidden', '');
    mainContent.style.marginLeft = '515px';
    myButton.classList.add('b-selected'); // Add the 'b-select' class
    myButton2.removeAttribute('hidden');

  }
});
