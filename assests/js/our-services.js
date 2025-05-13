
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
            'blob': 'blob 7s infinite',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            blob: {
              '0%': { transform: 'translate(0px, 0px) scale(1)' },
              '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
              '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
              '100%': { transform: 'translate(0px, 0px) scale(1)' },
            },
            float: {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0px)' },
            },
          },
        },
      },
    };
