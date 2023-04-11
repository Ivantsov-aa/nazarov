let innerWidth = 0;

window.addEventListener('resize', (e) => {
  innerWidth = window.innerWidth;
})

new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  loopedSlides: 3,
  watchSlidesVisibility: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

new Swiper('.slider__wrapper', {
  scrollContainer: false,
  slidesPerView: innerWidth <= 768 ? 2 : 4,
  spaceBetween: 8,
  loopedSlides: 4,
  navigation: {
    nextEl: '.next-slide',
    prevEl: '.prev-slide',
  },
});

new Swiper('.new-collection__products .img__wrapper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  loopedSlides: 1,
  watchSlidesVisibility: true,
  pagination: {
    el: '.img__wrapper .swiper-pagination',
    clickable: true,
  },
});
