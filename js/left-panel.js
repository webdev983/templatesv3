document.getElementById('log-open').addEventListener('click', function() {
  var leftSidePanel = document.querySelector('.left-side-panel');
  var codeLog = document.getElementById('code-log');
  var mainContent = document.getElementById('main-content');
  var myButton = document.getElementById('myButton'); // Get the button element

  if (leftSidePanel.classList.contains('log-open')) {
    leftSidePanel.classList.remove('log-open');
    codeLog.setAttribute('hidden', '');
    mainContent.style.marginLeft = '65px';
    myButton.classList.remove('b-select'); // Remove the 'b-select' class
  } else {
    leftSidePanel.classList.add('log-open');
    codeLog.removeAttribute('hidden');
    mainContent.style.marginLeft = '302px';
    myButton.classList.add('b-select'); // Add the 'b-select' class
  }
});
