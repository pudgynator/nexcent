const swiper = new Swiper('.projects__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
      nextEl: '.projects__arrow-right',
      prevEl: '.projects__arrow-left',
    },
  });