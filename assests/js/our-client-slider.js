// <!-- Swiper JS -->
  // <!-- Initialize Swiper -->

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    speed: 3000,
    autoplay: {
      delay:1000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 8 },
    },
  });
