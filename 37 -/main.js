document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('split-text');
    const text = textContainer.innerText;
    let splitText = '';
    for (let i = 0; i < text.length; i++) {
      let animationClass = `animation-${(i % 3) + 1}`;
      splitText += `<span class="letter ${animationClass}">${text[i]}</span>`;
    }
    textContainer.innerHTML = splitText;
  });
  
