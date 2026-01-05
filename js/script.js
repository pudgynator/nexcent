const swiper = new Swiper('.projects__slider', {
    loop: true,
    spaceBetween: 20,

    navigation: {
      nextEl: '.projects__arrow-right',
      prevEl: '.projects__arrow-left',
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
  });

  const mobileMenu = document.querySelector('.mobile-menu');
  const menuBtnOpen = document.querySelector('.menu-btn-open');
  const menuBtnClose = document.querySelector('.menu-btn-close');
  
  const toggleMenu = () => mobileMenu.classList.toggle('is-open');
  const disableScroll = () => document.body.classList.toggle('is-scroll-disabled');
  
  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);
  
  menuBtnOpen.addEventListener('click', disableScroll);
  menuBtnClose.addEventListener('click', disableScroll);