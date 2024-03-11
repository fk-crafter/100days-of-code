let startTime, updatedTime, difference, tInterval, running = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = 1;
    document.getElementById('start').style.pointerEvents = 'none';
  }
}

function stopTimer(){
  if(running){
    clearInterval(tInterval);
    running = 0;
    document.getElementById('start').style.pointerEvents = 'auto';
  }
}

function resetTimer(){
  clearInterval(tInterval);
  running = 0;
  document.getElementById('display').innerHTML = '00:00:00';
  document.getElementById('start').style.pointerEvents = 'auto';
}

function getShowTime(){
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
  
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10); // Calcul des millisecondes et division par 10 pour obtenir 2 chiffres
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
  
    document.getElementById('display').innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  }

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
