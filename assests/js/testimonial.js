
    // Initialize Swiper
    const swipertest = new Swiper('.testimonial-swiper', {
      loop: true, // Enable continuous sliding
      speed: 3000,
      autoplay: {
        delay: 3000, // Slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay after interaction
      },
      slidesPerView: 1, // Default: 1 slide per view
      spaceBetween: 20, // Space between slides
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });


    // add review js
    // Modal Functionality
    const reviewModal = document.getElementById('review-modal');
    const openReviewBtn = document.getElementById('review-open-btn');
    const closeReviewBtn = document.getElementById('review-close-btn');

    openReviewBtn.addEventListener('click', () => {
      reviewModal.classList.remove('hidden');
    });

    closeReviewBtn.addEventListener('click', () => {
      reviewModal.classList.add('hidden');
    });

    // Star Rating Functionality
    const stars = document.querySelectorAll('.review-stars .fa-star');
    const ratingInput = document.getElementById('rating');

    stars.forEach(star => {
      star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingInput.value = value;
        stars.forEach(s => {
          s.classList.remove('text-amber-300');
          s.classList.add('text-gray-300');
          if (s.getAttribute('data-value') <= value) {
            s.classList.remove('text-gray-300');
            s.classList.add('text-amber-300');
          }
        });
      });
    });

    // Form Submission (Mock)
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Review submitted successfully!');
      reviewForm.reset();
      ratingInput.value = '0';
      stars.forEach(s => {
        s.classList.remove('text-amber-300');
        s.classList.add('text-gray-300');
      });
      reviewModal.classList.add('hidden');
    });
  