'use strict';


// navbar scrolling effect

document.addEventListener('scroll', () => {

  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when clicking on the navbar menu

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (e)=> {
  
  const target = e.target;
  const link = target.dataset.link;
  const active = document.querySelector('.navbar__menu__item.active')
  if(link == null) {
    return;
  }
  navbarMenu.parentElement.classList.remove('open');
  scrollIntoView(link);
  e.target.classList.add('active');
  active.classList.remove('active');
})


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  navbarMenu.parentElement.classList.toggle('open');

})



const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const homeWorkBtn = document.querySelector('.home__btn');
const homeArrow = document.querySelector('.home__arrow');
// Handle scrolling when clicking on the contact button

homeWorkBtn.addEventListener('click', () => {
  scrollIntoView('#work');  
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



// Scroll Reveal Animation

const sr = ScrollReveal({
  origin: 'bottom',
  // distance: '80px',
  duration: 2000,
  reset: true
})

// Scroll Home



// sr.reveal('.home__text', {});
// sr.reveal('.home__contact', {delay: 200});
// sr.reveal('.home__img', {origin: 'bottom', delay: 400});



// // Scroll About

// sr.reveal('.about__avatar', {delay: 500});
// sr.reveal('.about__subtitle', {delay: 200});
// sr.reveal('.about__body', {origin: 'right', delay: 400});

// Scroll Skills

// Scroll Work

// Scroll contact



// Form submission alert

const formSubmitBtn = document.querySelector('.contact__form-btn');

formSubmitBtn.addEventListener('submit', submitHandler)

function submitHandler () {
  alert(`Your message has been sent. 
Thank you!`)
}