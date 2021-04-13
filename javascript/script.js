const menuIcon = document.querySelector(".icon");

const navbar = document.querySelector(".topnav");

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menuIcon.classList.toggle('cross');
  

});
