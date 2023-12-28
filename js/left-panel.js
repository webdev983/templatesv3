

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
    mainContent.style.marginLeft = '300px'; // Устанавливаем margin-left на 300px
  }
});

