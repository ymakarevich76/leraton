if (document.querySelector('.accordion__btn')) {
  const accordionBtns = document.querySelectorAll('.accordion__btn');
  accordionBtns.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('accordion__btn--active');
    })
  });
}
