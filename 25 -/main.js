window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight));
    const opacity = 1 - scrollPercentage;

    document.getElementById('kineticText').style.opacity = opacity;
    
    const translateY = scrollPercentage * 100;
    document.getElementById('kineticText').style.transform = `translate(-50%, -50%) translateY(${translateY}px)`;
  });
