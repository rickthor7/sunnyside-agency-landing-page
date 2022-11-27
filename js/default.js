const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-header');

function resizeUpdate() {
  if (document.body.offsetWidth >= 576) {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-header-show');
    button.classList.add('nav-header-button-close');
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  }
}

window.addEventListener('resize', resizeUpdate, false);
button.addEventListener('click', toggleMenu, false);