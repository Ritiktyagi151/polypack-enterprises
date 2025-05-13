//<!-- Fixed Brochure Button start HERE-->
    const toggleBtn = document.getElementById('toggleBrochure');
    const dropdown = document.getElementById('brochureDropdown');

    toggleBtn.addEventListener('click', () => {
      dropdown.classList.toggle('hidden');
    });

    // Optional: Hide dropdown if clicking outside
    window.addEventListener('click', function (e) {
      if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });
  // <!-- Fixed Brochure Button End HERE-->



  
  // Back to top start here -->
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Show button when scrolled down 100px
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  };

  // Scroll to top on click
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
 //  Back to top End here  -->