// if (document.querySelector('.footer__btn')) {
//   const footerBtns = document.querySelectorAll('.footer__btn');
//   footerBtns.forEach((btn, index) => {
//     btn.addEventListener('click', (evt) => {
//       evt.currentTarget.classList.toggle('footer__btn--active');
//     })
//   });
// }

if (document.querySelector('.tabs__item')) {
  const tabs = document.querySelectorAll('.tabs__item');
  const tabsContent = document.querySelectorAll('.tabs__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('tabs__item--active');
      });

      evt.currentTarget.classList.add('tabs__item--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('tabs__content--active')
      });

      tabsContent[index].classList.add('tabs__content--active');

    })
  });
}
