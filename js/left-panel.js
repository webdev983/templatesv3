document.getElementById('log-open').addEventListener('click', function() {

  const asideElement = document.querySelector('.aside');
  const leftElement = document.querySelector('.left');
  const bottomButton = document.getElementById('bottom-buttons'); 
  const logOpenButton = document.getElementById('log-open'); 
  const refreshPageButton = document.getElementById('refresh-page'); 
  const codeLog = document.getElementById('code-log');
  const searchActions = document.getElementById('search-actions');
  const refreshPage = document.getElementById('refresh-page');

  if (logOpenButton.hasAttribute('data-log-opened')) {
    asideElement.style.width = '70px';
    leftElement.style.width = '60px';
    logOpenButton.removeAttribute('data-log-opened');
    logOpenButton.classList.remove('b-selected');
    refreshPage.setAttribute('hidden', '');
    codeLog.setAttribute('hidden','');
    searchActions.setAttribute('hidden','');
    refreshPageButton.setAttribute('hidden','');
    bottomButton.removeAttribute('hidden');
  };
  
  if (!logOpenButton.hasAttribute('data-log-opened')) {
    logOpenButton.setAttribute('data-log-opened', '');
    bottomButton.hidden = true;
    logOpenButton.classList.add('b-selected');
    refreshPage.removeAttribute('hidden');
    codeLog.removeAttribute('hidden');
    searchActions.removeAttribute('hidden');
    refreshPageButton.removeAttribute('hidden');
    asideElement.style.width = '525px';
    leftElement.style.width = '515px';
    
  }
});


function reloadPage(event) {
  event.preventDefault(); // Эта строка предотвращает выполнение действия по умолчанию для события (например, перезагрузка страницы)
  window.location.reload(); // Эта строка перезагружает текущую страницу
}
