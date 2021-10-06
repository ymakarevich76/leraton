if (document.querySelector('.accordion__btn')) {
  const accordionBtns = document.querySelectorAll('.accordion__btn');
  accordionBtns.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('accordion__btn--active');
    })
  });
}

if (document.querySelector('.accord__btn')) {
  const accordionBtns = document.querySelectorAll('.accord__btn');
  const accordItem = document.querySelectorAll('.accord__item');

  accordionBtns.forEach((btn, index) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('accord__btn--active');

      accordItem.forEach((item) => {
        item.classList.remove('accord__item--active')
      });
      accordItem[index].classList.add('accord__item--active')
    })
  });
}
