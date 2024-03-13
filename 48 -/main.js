function moveLoadingBar() {
  var elem = document.getElementById("loadingBar"); 
  var percentText = document.getElementById("loadingPercent");
  var width = 0;
  var id = setInterval(frame, 50);

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
