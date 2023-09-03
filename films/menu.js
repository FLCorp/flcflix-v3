// JavaScript to toggle the menu display on button click
const menuButtons = document.querySelectorAll('.menu-button');
const menus = document.querySelectorAll('.menu');

menuButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (menus[index].style.display === 'block') {
      menus[index].style.display = 'none';
    } else {
      menus[index].style.display = 'block';
    }
  });
});
