
    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('-translate-x-full');
    }

  function toggleDropdown(id, button) {
    const dropdown = document.getElementById(id);
    const isHidden = dropdown.classList.contains('hidden');
    
    // Toggle the dropdown visibility
    dropdown.classList.toggle('hidden');
    
    // Find the span element within the clicked button
    const toggleSpan = button.querySelector('span');
    
    // Update the toggle symbol
    if (toggleSpan) {
      toggleSpan.textContent = isHidden ? '−' : '+';
    }
  }
  
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('-translate-x-full');
  }
