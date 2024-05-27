document.getElementById('log-open').addEventListener('click', function() {


  var logOpenButton = document.getElementById('log-open'); 
  var asideElement = document.querySelector('.aside');
  var leftElement = document.querySelector('.left');
  var bottomButton = document.getElementById('bottom-buttons'); 
  var refreshPageButton = document.getElementById('refresh-page'); 
  var codeLog = document.getElementById('code-log');
  var searchActions = document.getElementById('search-actions');
  var refreshPage = document.getElementById('refresh-page');







  if (logOpenButton.hasAttribute('data-log-opened')) {

    document.getElementById('toggle-component-tree').removeAttribute('hidden');
    document.getElementById('toggle-code-tree').removeAttribute('hidden');
    document.getElementById('toggle-head').removeAttribute('hidden');
    document.getElementById('toggle-generated-page').removeAttribute('hidden');

    document.getElementById('remove-duplicate-actions').hidden = true;


    
    asideElement.style.width = '70px';
    leftElement.style.width = '60px';
    logOpenButton.removeAttribute('data-log-opened');
    logOpenButton.classList.remove('b-selected');
    refreshPage.setAttribute('hidden', '');
    codeLog.setAttribute('hidden','');
    searchActions.setAttribute('hidden','');
    refreshPageButton.setAttribute('hidden','');
    bottomButton.removeAttribute('hidden');

  } else {
  
    document.getElementById('toggle-component-tree').hidden = true;
    document.getElementById('toggle-code-tree').hidden = true;
    document.getElementById('toggle-head').hidden = true;
    document.getElementById('toggle-generated-page').hidden = true;
    document.getElementById('remove-duplicate-actions').removeAttribute('hidden');

    logOpenButton.setAttribute('data-log-opened', '');
    bottomButton.setAttribute('hidden','');
    logOpenButton.classList.add('b-selected');
    refreshPage.removeAttribute('hidden');
    codeLog.removeAttribute('hidden');
    searchActions.removeAttribute('hidden');
    refreshPageButton.removeAttribute('hidden');
    asideElement.style.width = '625px';
    leftElement.style.width = '615px';
  }
});

function reloadPage(event) {
  event.preventDefault(); // Эта строка предотвращает выполнение действия по умолчанию для события (например, перезагрузка страницы)
  window.location.reload(); // Эта строка перезагружает текущую страницу
}




document.getElementById('columns_selector_open').addEventListener('click', function() {

  if (document.getElementById('columns_selector_open').classList.contains('b-selected')) { 
    document.getElementById('columns_selector').hidden = true;
    document.getElementById('columns_selector_open').classList.remove('b-selected');
    document.querySelector('.aside').style.width = '70px';
    document.querySelector('.left').style.width = '60px';
    
  } else {
  
    document.getElementById('columns_selector').removeAttribute('hidden');
    document.getElementById('columns_selector_open').classList.add('b-selected');
    asideElement.style.width = '225px';
    leftElement.style.width = '215px';
  }
});
