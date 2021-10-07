if (document.querySelectorAll('.btn-chevron')) {
  const btnsChevron = document.querySelectorAll('.btn-chevron');
  btnsChevron.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      evt.currentTarget.parentElement.classList.toggle('active');
    })
  })
}
