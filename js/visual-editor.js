
//content editable when double click-->

function onDoubleClick(e) {
      // Получаем элемент, по которому был сделан клик
      var target = e.target;
  
      // Предотвратить стандартное поведение двойного клика
      e.preventDefault();
  
      // Установить атрибут contenteditable в 'true', делая элемент редактируемым
      target.setAttribute('contenteditable', 'true');
      event.target.style.backgroundColor = '';
  
  
      // Установить фокус на редактируемый элемент
      target.focus();
  }
  
  // Добавляем обработчик события на весь документ для отслеживания двойного клика
  document.addEventListener('dblclick', onDoubleClick);

  

//HOVER
    document.addEventListener('mouseover', function(event) {
      // При наведении курсора на элемент с атрибутом 'data-visual' меняем фон на розовый
      if (event.target.hasAttribute('data-visual')) {
        event.target.style.backgroundColor = 'pink';
      }
    });
    
    document.addEventListener('mouseout', function(event) {
      // Когда курсор покидает элемент с атрибутом 'data-visual', возвращаем исходный фон
      if (event.target.hasAttribute('data-visual')) {
        event.target.style.backgroundColor = '';
      }
    });


// right click menu
  
    let isDragging = false;
    const moveStarted = document.getElementById('move_started');
  
    // Обработчик события начала перетаскивания для всех элементов с draggable="true"
    document.addEventListener('dragstart', (e) => {
      isDragging = true;
      moveStarted.textContent = 'NO'; // Сбрасываем статус
    });
  
    // Обработчик события окончания перетаскивания для всех элементов с draggable="true"
    document.addEventListener('dragend', () => {
      isDragging = false;
    });
  
    // Обработчик события движения мыши
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        moveStarted.textContent = 'YES DRAG STARTED'; // Устанавливаем статус в "YES" при начале движения
      }
    })
  