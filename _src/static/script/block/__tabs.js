if (document.querySelector('.tabs__btn')) {
  const tabs = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('tabs__btn--active');
      });

      evt.currentTarget.classList.add('tabs__btn--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('tabs__content--active')
      });

      tabsContent[index].classList.add('tabs__content--active');

    })
  });
}

if (document.querySelector('.tabs-user__btn')) {
  const tabs = document.querySelectorAll('.tabs-user__btn');
  const tabsContent = document.querySelectorAll('.tabs-user__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (evt) => {

      tabs.forEach((tab) => {
        tab.classList.remove('tabs-user__btn--active');
      });

      evt.currentTarget.classList.add('tabs-user__btn--active');

      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('tabs-user__content--active')
      });

      tabsContent[index].classList.add('tabs-user__content--active');
    })
  });
}


if (document.querySelector('.filter__view-btn')) {
  const viewBtns = document.querySelectorAll('.filter__view-btn');
  const viewCatalogs = document.querySelectorAll('.catalog__wrap');

  viewBtns.forEach((viewBtn, index) => {
    viewBtn.addEventListener('click', (evt) => {

      viewBtns.forEach((viewBtn) => {
        viewBtn.classList.remove('filter__view-btn--active');
      });

      evt.currentTarget.classList.add('filter__view-btn--active');

      viewCatalogs.forEach((viewCatalog) => {
        viewCatalog.classList.toggle('catalog__wrap--active')
      });
    })
  });
}
