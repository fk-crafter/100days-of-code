const ratingTexts = {
    1: 'Terrible',
    2: 'Poor',
    3: 'Average',
    4: 'Good',
    5: 'Excellent'
  };
  
  document.querySelectorAll('.star').forEach(item => {
    item.addEventListener('click', function() {
      const ratingValue = parseInt(item.getAttribute('data-value'), 10);
      document.getElementById('rating-text').textContent = ratingTexts[ratingValue];
  
      item.parentNode.childNodes.forEach(function(star) {
        if (star.nodeType === Node.ELEMENT_NODE) { // Assurez-vous que c'est une étoile
          if (parseInt(star.getAttribute('data-value'), 10) <= ratingValue) {
            star.classList.add('selected'); // Ajoutez la classe pour les étoiles sélectionnées
          } else {
            star.classList.remove('selected'); // Retirez la classe si l'étoile est au-delà de la valeur sélectionnée
          }
        }
      });
    });
  });
  
