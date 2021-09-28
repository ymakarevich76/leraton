const iconMenu = document.querySelector('.icon__menu');
if (iconMenu) {
  const menu = document.querySelector('.header__nav');
  iconMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');
  })
}
