document.getElementById('log-open').addEventListener('click', function() {
  var leftSidePanel = document.querySelector('.left-side-panel');
  var codeLog = document.getElementById('code-log');
  var mainContent = document.getElementById('main-content');
  var myButton = document.getElementById('log-open'); // Get the button element
  var bottomButton = document.getElementById('bottom-buttons'); // Get the button element


  var myButton = document.getElementById('log-open'); // Get the button element

  if (leftSidePanel.classList.contains('log-open')) {
    leftSidePanel.classList.remove('log-open');
    codeLog.setAttribute('hidden', '');
    mainContent.style.marginLeft = '80px';
    myButton.classList.remove('b-selected'); // Remove the 'b-select' class
    bottomButton.removeAttribute('hidden');

  } else {
    leftSidePanel.classList.add('log-open');
    codeLog.removeAttribute('hidden');
    bottomButton.setAttribute('hidden', '');
    mainContent.style.marginLeft = '702px';
    myButton.classList.add('b-selected'); // Add the 'b-select' class
  }
});
