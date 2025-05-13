
  const quoteModal = document.getElementById('quoteModal');
  const closeQuote = document.getElementById('closeQuote');

  function openQuoteForm() {
    quoteModal.classList.remove('hidden');
  }

  closeQuote.addEventListener('click', () => {
    quoteModal.classList.add('hidden');
  });

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === quoteModal) {
      quoteModal.classList.add('hidden');
    }
  });
