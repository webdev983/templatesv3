document.getElementById('log-open').addEventListener('click', function() {

  var asideElement = document.querySelector('.aside');
  var leftElement = document.querySelector('.left');
  var bottomButton = document.getElementById('bottom-buttons'); // Get the button element
  var logOpenButton = document.getElementById('log-open'); 
  var RefreshPageButton = document.getElementById('refresh-page'); 
  var codeLog = document.getElementById('code-log');
  var search_actions = document.getElementById('search-actions');
  var refresh_page = document.getElementById('refresh-page');

  if (logOpenButton.hasAttribute('data-log-opened')) {

    asideElement.style.width = '70px';
    leftElement.style.width = '60px';
    refresh_page.setAttribute('hidden', '');
    codeLog.setAttribute('hidden','');
    search_actions.setAttribute('hidden','');
    RefreshPageButton.setAttribute('hidden','');
    bottomButton.removeAttribute('hidden');
    logOpenButton.removeAttribute('data-log-opened');



  } else {
    asideElement.style.width = '525px';
    leftElement.style.width = '515px';
    refresh_page.removeAttribute('hidden');
    codeLog.removeAttribute('hidden');
    search_actions.removeAttribute('hidden');
    RefreshPageButton.removeAttribute('hidden');
    bottomButton.setAttribute('hidden', '');
    logOpenButton.setAttribute('data-log-opened', '');
    logOpenButton.classList.add('b-selected'); 

}



});
