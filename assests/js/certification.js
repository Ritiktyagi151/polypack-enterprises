// <!-- Modal Scripts -->

    // Function to open the modal and display the clicked image
    function openModal(imageElement) {
      const modal = document.getElementById('modal');
      const modalImage = document.getElementById('modalImage');
      modal.classList.remove('hidden');
      modalImage.src = imageElement.src;
    }
  
    // Function to close the modal
    function closeModal() {
      const modal = document.getElementById('modal');
      modal.classList.add('hidden');
    }

