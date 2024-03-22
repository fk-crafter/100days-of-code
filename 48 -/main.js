function moveLoadingBar() {
  const elem = document.getElementById("loadingBar"); 
  const percentText = document.getElementById("loadingPercent");
  let width = 0;
  let id = setInterval(frame, 50);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      percentText.innerText = width + '%';
    }
  }
}

moveLoadingBar();