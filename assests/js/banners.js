
  // Horizontal Slider (Autoplay)
  const horizontalSlider = document.querySelector('.horizontal-slider');
  let horizontalIndex = 0;
  const horizontalSlides = horizontalSlider.children;
  const horizontalSlideCount = horizontalSlides.length;

  function slideHorizontal() {
      horizontalIndex = (horizontalIndex + 1) % horizontalSlideCount;
      const slideWidth = horizontalSlides[0].offsetWidth;
      horizontalSlider.style.transform = `translateX(-${horizontalIndex * slideWidth}px)`;
  }

  // Vertical Slider (Autoplay)
  const verticalSlider = document.querySelector('.vertical-slider');
  let verticalIndex = 0;
  const verticalSlides = verticalSlider.children;
  const verticalSlideCount = verticalSlides.length;

  function slideVertical() {
      verticalIndex = (verticalIndex + 1) % verticalSlideCount;
      const slideHeight = verticalSlides[0].offsetHeight;
      verticalSlider.style.transform = `translateY(-${verticalIndex * slideHeight}px)`;
  }

  // Start autoplay after ensuring images are loaded
  window.addEventListener('load', () => {
      setInterval(slideHorizontal, 3000); // Autoplay every 3 seconds
      setInterval(slideVertical, 3000); // Autoplay every 3 seconds
  });

  // Update slider dimensions on resize
  window.addEventListener('resize', () => {
      // Reset positions
      horizontalIndex = 0;
      verticalIndex = 0;
      horizontalSlider.style.transform = 'translateX(0)';
      verticalSlider.style.transform = 'translateY(0)';
  });
