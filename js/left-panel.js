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
    console.log('1111');

    asideElement.style.width = '70px';
    console.log('222');

    leftElement.style.width = '60px';
    console.log('333');

    logOpenButton.removeAttribute('data-log-opened');
    console.log('444');

    logOpenButton.classList.remove('b-selected');
    console.log('55555');

    refreshPage.setAttribute('hidden', '');
    console.log('6666');

    codeLog.setAttribute('hidden','');
    console.log('777');
    searchActions.setAttribute('hidden','');
    console.log('888');

    refreshPageButton.setAttribute('hidden','');
    console.log('999');

    bottomButton.removeAttribute('hidden');
  };
  
  if (!logOpenButton.hasAttribute('data-log-opened')) {
    logOpenButton.setAttribute('data-log-opened', '');

    bottomButton.setAttribute('hidden','');

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
