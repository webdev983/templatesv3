document.getElementById('log-open').addEventListener('click', function() {

  var asideElement = document.querySelector('.aside');
  var leftElement = document.querySelector('.left');
  var bottomButton = document.getElementById('bottom-buttons'); // Get the button element
  var myButton = document.getElementById('log-open'); 
  var myButton2 = document.getElementById('refresh-page'); 
  var codeLog = document.getElementById('code-log');
  var search_actions = document.getElementById('search-actions');
  var refresh_page = document.getElementById('refresh-page');

  if (myButton.hasAttribute('data-log-opened')) {

    console.log('Element nie ma atrybutu data-log-opened.');

  } else {
    asideElement.style.width = '525px';
    leftElement.style.width = '515px';
    search_actions.removeAttribute('hidden');
    refresh_page.removeAttribute('hidden');
    codeLog.removeAttribute('hidden');
    bottomButton.setAttribute('hidden', '');
    myButton.classList.add('b-selected'); 
    myButton2.removeAttribute('hidden');
    myButton.setAttribute('data-log-opened', '');

}



});
