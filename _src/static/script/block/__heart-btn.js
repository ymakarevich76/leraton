if (document.querySelectorAll('.card__heart-btn')) {
  const heartBtn = document.querySelectorAll('.card__heart-btn');
  heartBtn.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.classList.toggle('card__heart-btn--active');
    })
  })
}

if (document.querySelector('.product__heart-btn')) {
  const heartBtn = document.querySelector('.product__heart-btn');
  heartBtn.addEventListener('click', (evt) => {
    evt.currentTarget.classList.toggle('product__heart-btn--active');
  })
}
