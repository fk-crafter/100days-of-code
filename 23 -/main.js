document.addEventListener('DOMContentLoaded', function() {
    const fadeElement = document.querySelector('.fade-in');
  
    function fadeIn() {
      const elementPosition = fadeElement.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (elementPosition < screenPosition) {
        fadeElement.style.opacity = '1';
      }
    }
  
    window.addEventListener('scroll', fadeIn);
    fadeIn();
  });
  
