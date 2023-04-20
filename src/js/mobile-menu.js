(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      body: document.querySelector('body'),
      menuList: document.querySelector('.mob-menu'),
      categoryList: document.querySelector('.category__list'),
      openElectronics: document.querySelector('[data-electronics-open]'),
      electronics: document.querySelector('[data-electronics]'),
      openHouse: document.querySelector('[data-house-open]'),
      openHouse1280: document.querySelector('[data-house-open-1280]'),
      house: document.querySelector('[data-house]'),
      house1280: document.querySelector('[data-house-1280]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.categoryList.addEventListener('click', removeMenu);
    refs.openElectronics.addEventListener('click', toggleElectronics);
    refs.openHouse1280.addEventListener('click', toggleHouse1280);
    refs.openHouse.addEventListener('click', toggleHouse);
  
    function toggleMenu() {
      refs.menu.classList.toggle('visually-hidden');
      refs.body.classList.toggle('no-scroll');
    }
    function toggleElectronics() {
      refs.electronics.classList.toggle('visually-hidden');
      refs.body.classList.toggle('no-scroll');
    }
    function toggleHouse1280() {
      refs.house1280.classList.toggle('visually-hidden');
      refs.body.classList.toggle('no-scroll');
    }
    function toggleHouse() {
      refs.house.classList.toggle('visually-hidden');
      refs.body.classList.toggle('no-scroll');
    }
    function removeMenu() {
      refs.menu.classList.add('visually-hidden');
      refs.body.classList.remove('no-scroll');
    }
  })(); 