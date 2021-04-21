'use strict';

const navbar = document.getElementById('navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu-container');
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const homeContactBtn = document.querySelector('.home__contact');
const homeArrow = document.querySelector('.home__arrow');

// navbar scrolling effect

document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when clicking on the navbar menu

navbarMenu.addEventListener('click', (e)=> {
  
  const target = e.target;
  const link = target.dataset.link;
  const active = document.querySelector('.navbar__menu__item.active')
  if(link == null) {
    return;
  }
  scrollIntoView(link);
  e.target.classList.add('active');
  active.classList.remove('active');
})


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})


// Handle scrolling when clicking on the contact button

homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');  
})


// Make home fade when scrolling

document.addEventListener('scroll', () => {
  
    home.style.opacity = 1 - window.scrollY / homeHeight;
  
});

// Show "arrow up" button when scrolling down

document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight / 2) {
    homeArrow.classList.add('visible');
  } else {
    homeArrow.classList.remove('visible');
  }
});

homeArrow.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  scrollIntoView(link);
})






function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({block: "start", behavior: "smooth"});
}
