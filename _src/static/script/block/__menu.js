const hamburger = document.querySelector('.header__icon-menu');
const nav = document.querySelector('.header__menu');
const btnClose = document.querySelector('.header__icon-close');
const body = document.querySelector('body');

const openMenu = () => {
  body.classList.add('fixed');
  nav.classList.add('header__menu--active');
  hamburger.classList.add('icon__menu--active');
};

const closeMenu = () => {
  body.classList.remove('fixed');
  nav.classList.remove('header__menu--active');
  hamburger.classList.remove('icon__menu--active');
}

hamburger.addEventListener('click', () => {
  openMenu();
});

btnClose.addEventListener('click', () => {
  closeMenu();
});

nav.addEventListener('click', (evt) => {
  if (evt.target === nav) {
    closeMenu();
  }
});



if (document.querySelectorAll('.btn-chevron')) {
  const btnsChevron = document.querySelectorAll('.btn-chevron');
  btnsChevron.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.parentElement.classList.toggle('active');
    })
  })
}
