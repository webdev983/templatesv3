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
    console.log('111111');

    bottomButton.setAttribute('hidden','');
    console.log('2222222');

    logOpenButton.classList.add('b-selected');
    console.log('3333');

    refreshPage.removeAttribute('hidden');
    console.log('444444');

    codeLog.removeAttribute('hidden');
    console.log('5555');

    searchActions.removeAttribute('hidden');
    console.log('6666');

    refreshPageButton.removeAttribute('hidden');
    console.log('7777');

    asideElement.style.width = '525px';
    leftElement.style.width = '515px';
    
  }
});


function reloadPage(event) {
  event.preventDefault(); // Эта строка предотвращает выполнение действия по умолчанию для события (например, перезагрузка страницы)
  window.location.reload(); // Эта строка перезагружает текущую страницу
}
