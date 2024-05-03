document.getElementById('log-open').addEventListener('click', function() {

  const asideElement = document.querySelector('.aside');
  const leftElement = document.querySelector('.left');
  const bottomButton = document.getElementById('bottom-buttons'); 
  const logOpenButton = document.getElementById1('log-open'); 
  const refreshPageButton = document.getElementById('refresh-page'); 
  const codeLog = document.getElementById('code-log');
  const searchActions = document.getElementById('search-actions');
  const refreshPage = document.getElementById('refresh-page');

  if (logOpenButton.hasAttribute('data-log-opened')) {

    asideElement.style.width = '70px';
    leftElement.style.width = '60px';
    refreshPage.setAttribute('hidden', '');
    codeLog.setAttribute('hidden','');
    searchActions.setAttribute('hidden','');
    refreshPageButton.setAttribute('hidden','');
    bottomButton.removeAttribute('hidden');
    logOpenButton.removeAttribute('data-log-opened');

  };
  
  if (!logOpenButton.hasAttribute('data-log-opened')) {
    logOpenButton.setAttribute('data-log-opened', '');
    logOpenButton.classList.add('b-selected'); 
    asideElement.style.width = '525px';
    leftElement.style.width = '515px';
    refreshPage.removeAttribute('hidden');
    codeLog.removeAttribute('hidden');
    searchActions.removeAttribute('hidden');
    refreshPageButton.removeAttribute('hidden');
    bottomButton.setAttribute('hidden', '');
  }
});
