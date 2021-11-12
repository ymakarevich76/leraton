if (document.querySelectorAll('.good')) {
  const MIN_VALUE = 1;

  const btnsPlus = document.querySelectorAll('.plus');
  const btnsMinus = document.querySelectorAll('.minus');

  btnsPlus.forEach((btn) => {
    btn.addEventListener('click', (evt) => {

      const field = evt.target.closest('.good').querySelector('.add-cart__count-num');
      const num = evt.target.closest('.good').querySelector('.good__available-value').innerHTML;

      let fieldValue = parseFloat(field.value);
      if (fieldValue < num) {
        fieldValue++;
        field.setAttribute('value', fieldValue);
      }


      btn.classList.add('active');

      btnsMinus.forEach((btn) => {
        btn.classList.remove('active');
      })
    })
  })

  btnsMinus.forEach((btn) => {
    btn.addEventListener('click', (evt) => {

      const field = evt.target.closest('.good').querySelector('.add-cart__count-num');

      let fieldValue = parseFloat(field.value);
      if (fieldValue > MIN_VALUE) {
        fieldValue--;
        field.setAttribute('value', fieldValue);
      }
      btnsPlus.forEach((btn) => {
        btn.classList.remove('active');
      })
      btn.classList.add('active');

      if (fieldValue <= MIN_VALUE) {
        btn.classList.remove('active');
      }
    })
  })
}
