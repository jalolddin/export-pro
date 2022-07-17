const navbar = document.querySelector('.navbar__menu');
const menuContent = document.querySelector('.menu-content');

navbar.addEventListener('click', () => {
  navbar.classList.toggle('_active');
  menuContent.classList.toggle('_active');
});