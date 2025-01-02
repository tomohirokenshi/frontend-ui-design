var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  initialSlide:
    document.querySelector(".swiper-slide--one").dataset.swiperSlideIndex,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 5,
    stretch: 0,
    depth: 100,
    modifier: 7,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
