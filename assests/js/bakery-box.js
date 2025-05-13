
      // Accordion functionality
      document.querySelectorAll('.accordion-btn').forEach(button => {
        button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector('svg');

          // Toggle content visibility
          content.classList.toggle('hidden');

          // Rotate icon
          icon.classList.toggle('rotate-180');

          // Close other open accordions
          document.querySelectorAll('.accordion-btn').forEach(otherButton => {
            if (otherButton !== button) {
              otherButton.nextElementSibling.classList.add('hidden');
              otherButton.querySelector('svg').classList.remove('rotate-180');
            }
          });
        });
      });

      // Scroll animations
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate__animated');

        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight - 100) {
            const animation = element.classList.contains('animate__fade-in-up') ? 'animate__fadeInUp' :
              element.classList.contains('animate__fade-in') ? 'animate__fadeIn' : '';

            if (animation) {
              element.classList.add(animation);
            }
          }
        });
      };

      window.addEventListener('scroll', animateOnScroll);
      window.addEventListener('load', animateOnScroll);
      
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
              primary: '#EA580C',  // Orange-600
              secondary: '#C2410C', // Orange-700
              accent: '#F97316',   // Orange-500
              light: '#FFEDD5',    // Orange-50
              dark: '#9A3412',     // Orange-800
            },
            animation: {
              'fade-in-up': 'fadeInUp 0.8s ease-out',
              'fade-in': 'fadeIn 1s ease-in',
              'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
          }
        }
      }
  