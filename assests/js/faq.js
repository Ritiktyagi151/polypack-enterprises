
   
   
    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');

        // Close all items
        document.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
        });

        // Open clicked item if it was closed
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
 