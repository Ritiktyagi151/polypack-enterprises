
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.fade-slide');
  const dots = document.querySelectorAll('.fade-dot');
  let currentSlide = 0;
  let slideInterval;

  function initSlider() {
    // Show first slide
    showSlide(currentSlide);

    // Auto-rotate
    slideInterval = setInterval(nextSlide, 5000);

    // Navigation
    document.querySelector('.fade-next').addEventListener('click', function () {
      nextSlide();
      resetInterval();
    });

    document.querySelector('.fade-prev').addEventListener('click', function () {
      prevSlide();
      resetInterval();
    });

    // Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', function () {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        goToSlide(slideIndex);
        resetInterval();
      });
    });
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function goToSlide(index) {
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');
    dots[currentSlide].classList.remove('bg-white/80');
    dots[currentSlide].classList.add('bg-white/50');

    currentSlide = index;

    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
    dots[currentSlide].classList.remove('bg-white/50');
    dots[currentSlide].classList.add('bg-white/80');
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('opacity-100', i === index);
      slide.classList.toggle('opacity-0', i !== index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white/80', i === index);
      dot.classList.toggle('bg-white/50', i !== index);
    });
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  initSlider();
});
