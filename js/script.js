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