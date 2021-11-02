if (document.querySelectorAll('.good__available-value')) {
  const STEP = 1;
  let MAX_VALUE;
  const MIN_VALUE = 1;

  const nums = document.querySelectorAll('.good__available-value');

  // const findValue = () => {
  nums.forEach((num) => {
    const count = num;
    MAX_VALUE = count.innerHTML;
  });
  // }

  const btnsPlus = document.querySelectorAll('.plus');
  const btnsMinus = document.querySelectorAll('.minus');
  const fields = document.querySelectorAll('.add-cart__count-num');
  let fieldValue;


  const onBtnMinusPress = () => {
    fields.forEach((field) => {
      fieldValue = parseFloat(field.value);
      if (fieldValue > MIN_VALUE) {
        fieldValue -= STEP;
        field.setAttribute('value', fieldValue);
      }
    })
    btnsPlus.forEach((btnPlus) => {
      btnPlus.classList.remove('active')
    })

    btnsMinus.forEach((btnMinus) => {
      btnMinus.classList.add('active')
    })
  }


  const onBtnPlusPress = () => {
    fields.forEach((field) => {
      fieldValue = parseFloat(field.value);
      if (fieldValue < MAX_VALUE) {
        fieldValue += STEP;
        field.setAttribute('value', fieldValue);
      }
    })

    btnsPlus.forEach((btnPlus) => {
      btnPlus.classList.add('active')
    })

    btnsMinus.forEach((btnMinus) => {
      btnMinus.classList.remove('active')
    })
  }

  const toAddCartCount = () => {
    fields.forEach((field) => {
      field.setAttribute('value', MIN_VALUE);
    })

    btnsPlus.forEach((btnPlus) => {
      btnPlus.addEventListener('click', onBtnPlusPress);
    })

    btnsMinus.forEach((btnMinus) => {
      btnMinus.addEventListener('click', onBtnMinusPress);
    })
  }
  toAddCartCount();
}
