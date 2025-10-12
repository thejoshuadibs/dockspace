const dropDown = document.querySelector('.hamburger-menu');
const menuBtn = document.querySelector('.menu-btn');
const hamburgerLinks = document.querySelectorAll('.close-hamburger');
const expander = document.querySelector('.more');
const bodyCopy = document.querySelector('.copy');

hamburgerLinks.forEach(element => {
  element.addEventListener('click', () => {
    dropDown.style.display = 'none';
    document.body.style.height = '100%';
    document.body.style.overflow = 'scroll';
    menuBtn.classList.toggle('active');
  });
});

menuBtn.addEventListener('click', () => {
  const displayValue = window
    .getComputedStyle(dropDown)
    .getPropertyValue('display');

  menuBtn.classList.toggle('active');
  if (displayValue === 'none') {
    dropDown.style.display = 'block';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  } else {
    dropDown.style.display = 'none';
    document.body.style.height = '100%';
    document.body.style.overflow = 'scroll';
  }
});

/* Video Script */
const openLightbox = document.getElementById('openLightbox');
const closeLightbox = document.getElementById('closeLightbox');
const lightbox = document.getElementById('lightbox');
const popupVideo = document.getElementById('popupVideo');

openLightbox.addEventListener('click', () => {
  lightbox.style.display = 'flex';
  popupVideo.currentTime = 0; // start fresh
  popupVideo.play();
});

closeLightbox.addEventListener('click', () => {
  popupVideo.pause();
  lightbox.style.display = 'none';
});

// Optional: close lightbox when background is clicked
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    popupVideo.pause();
    lightbox.style.display = 'none';
  }
});

/*----- Hover Script -----*/
/* document.querySelectorAll('*').forEach(el => {
  el.addEventListener('touchstart', () => el.classList.add('hover'));
  el.addEventListener('touchend', () => el.classList.remove('hover'));
}); */

expander.addEventListener('click', () => {
  bodyCopy.classList.toggle('full-text');
});
