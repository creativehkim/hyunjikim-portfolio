const body = document.body;

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
  link.addEventListener('click', ()=> {
    body.classList.remove('nav-open');
  })
})