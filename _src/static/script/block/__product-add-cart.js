if (document.querySelector('.product__available-value')) {
  const STEP = 1;
  let MAX_VALUE;
  const MIN_VALUE = 1;

  const num = document.querySelector('.product__available-value').innerHTML;

  MAX_VALUE = num;

  const btnPlus = document.querySelector('.plus');
  const btnMinus = document.querySelector('.minus');
  const field = document.querySelector('.add-cart__count-num');
  let fieldValue;

  const onBtnMinusPress = () => {
    fieldValue = parseFloat(field.value);
    if (fieldValue > MIN_VALUE) {
      fieldValue -= STEP;
      field.setAttribute('value', fieldValue);
    }
    btnPlus.classList.remove('active')
    btnMinus.classList.add('active')
  }

  const onBtnPlusPress = () => {
    fieldValue = parseFloat(field.value);
    if (fieldValue < MAX_VALUE) {
      fieldValue += STEP;
      field.setAttribute('value', fieldValue);
    }
    btnMinus.classList.remove('active')
    btnPlus.classList.add('active')
  }

  const toAddCartCount = () => {
    field.setAttribute('value', MIN_VALUE);

    btnMinus.addEventListener('click', onBtnMinusPress);
    btnPlus.addEventListener('click', onBtnPlusPress);
  }
  toAddCartCount();
}
