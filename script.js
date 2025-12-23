var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints:{
    '480':{
      slidesPerView: 1,
    },
    '800':{
      slidesPerView: 2,
    },
    '1200':{
      slidesPerView: 3,
    }


  }
});



