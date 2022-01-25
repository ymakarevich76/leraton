if (document.querySelector('.mobile-select')) {
  const sel = document.querySelector('.mobile-select');

  sel.addEventListener('click', () => {
    sel.classList.toggle('open');
  })
}
