
const menu = document.querySelector('.right-click-menu');

// Display the context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Prevent the default context menu from opening
  menu.style.display = 'block';
  menu.style.left = `${e.pageX}px`;
  menu.style.top = `${e.pageY}px`;
});

// Hide the menu when clicking the left mouse button
window.addEventListener('click', function() {
  menu.style.display = 'none';
});
 
