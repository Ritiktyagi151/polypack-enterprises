
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.project-block-one img');
    const imagePaths = Array.from(galleryImages).map(img => img.src);
    let currentImageIndex = 0;
    
    // Open modal with clicked image
    function openModal(imageSrc) {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      
      currentImageIndex = imagePaths.indexOf(imageSrc);
      modalImg.src = imageSrc;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close modal
    function closeModal() {
      const modal = document.getElementById('imageModal');
      modal.classList.add('hidden');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Navigate between images
    function navigateImage(direction) {
      currentImageIndex += direction;
      
      // Wrap around if at beginning or end
      if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0;
      } else if (currentImageIndex < 0) {
        currentImageIndex = imagePaths.length - 1;
      }
      
      document.getElementById('modalImage').src = imagePaths[currentImageIndex];
    }
    
    // Close modal when clicking outside image
    document.getElementById('imageModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      const modal = document.getElementById('imageModal');
      if (!modal.classList.contains('hidden')) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          navigateImage(-1);
        } else if (e.key === 'ArrowRight') {
          navigateImage(1);
        }
      }
    });
 