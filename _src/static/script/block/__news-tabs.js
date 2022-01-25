
if (document.querySelector('.news__btn')) {
  const tabs = document.querySelectorAll('.news__btn');
  const tabsContent = document.querySelectorAll('.news__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('news__btn--active');
      });

      evt.currentTarget.classList.add('news__btn--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('news__content--active')
      });

      tabsContent[index].classList.add('news__content--active');
    })
  });
}
