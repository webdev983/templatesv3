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




/*
  document.getElementById('log-open').addEventListener('click', function() {

    var asideElement = document.querySelector('.aside');
    var leftElement = document.querySelector('.left');
    var bottomButton = document.getElementById('bottom-buttons'); 
    var myButton = document.getElementById('log-open'); 
    var myButton2 = document.getElementById('refresh-page'); 
    var codeLog = document.getElementById('code-log');
  
  
    if (asideElement.offsetWidth === 80) {
      asideElement.style.width = '525px';
      leftElement.style.width = '515px';
      codeLog.removeAttribute('hidden');
      bottomButton.setAttribute('hidden', '');
      myButton.classList.add('b-selected'); 
      myButton2.removeAttribute('hidden');
    
    
  }
  
  if (asideElement.offsetWidth === 525) {
    asideElement.style.width = '80px';
    leftElement.style.width = '60px';
    codeLog.setAttribute('hidden');
    bottomButton.removeAttribute('hidden');
    myButton.classList.remove('b-selected'); 
    myButton2.setAttribute('hidden');
  
  
  }
  
  

  /*
  var leftSidePanel = document.querySelector('.left-side-panel');
  var mainContent = document.getElementById('main-content');
  var myButton = document.getElementById('log-open'); // Get the button element
  var bottomButton = document.getElementById('bottom-buttons'); // Get the button element





  if (leftSidePanel.classList.contains('log-open')) {
    leftSidePanel.classList.remove('log-open');
    codeLog.setAttribute('hidden', '');
    mainContent.style.marginLeft = '80px';
    myButton.classList.remove('b-selected'); // Remove the 'b-select' class
    bottomButton.removeAttribute('hidden');
    myButton2.setAttribute('hidden', '');


  } else {
    leftSidePanel.classList.add('log-open');

  }
  */
});
