const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 20px rgba(255,255,255,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });
});
