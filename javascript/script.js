const menuIcon = document.querySelector(".icon");

const body = document.querySelector(".body")

const navbar = document.querySelector(".topnav");

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menuIcon.classList.toggle('cross');
  body.classList.toggle('scroll')


});
