
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });

  // Pause on hover
  const container = document.querySelector('.slider-is-here');
  container.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
  });
  container.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
  });
});
