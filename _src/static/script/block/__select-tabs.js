
if (document.querySelector('.mobile-select__item')) {
  const tabs = document.querySelectorAll('.mobile-select__item');
  const tabsContent = document.querySelectorAll('.news__content');
  const selHeader = document.querySelector('.mobile-select__header');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('mobile-select__item--active');
      });

      evt.currentTarget.classList.add('mobile-select__item--active');

      if (evt.currentTarget.classList.contains('mobile-select__item--active')) {
        selHeader.innerHTML = evt.currentTarget.innerHTML;
      }

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('news__content--active')
      });

      tabsContent[index].classList.add('news__content--active');
    })
  });
}
