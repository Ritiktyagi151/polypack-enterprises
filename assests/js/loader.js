
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const flash = document.getElementById('flash');
  const content = document.getElementById('content');

  // After LEDs light up, trigger a flash
  setTimeout(() => {
    flash.style.animation = "led-flash 0.4s ease-out forwards";
  }, 1800); // Matches LED strip animation

  // After flash, fade out loader and show content
  setTimeout(() => {
    loader.classList.add('fade-out');
    content.classList.remove('opacity-0');
  }, 2200);
});
