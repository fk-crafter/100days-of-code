exemple :

const colors = [
  "#474bff", 
  "#bc48ff", 
  "#c81bb8", 
  "#660591"
];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let pathPointsFrom, pathPointsTo, pathPointsNow; 
const steps = 200;z
let offset = 0;
let pathCount = 0;
const interpolationPoint = {percentage: 0};
ctx.lineWidth = 4;
ctx.lineCap = "round";

function drawPathToCanvas() {
  let thisColor, lastColor = getColorSegment(0);
  ctx.strokeStyle = lastColor;
  ctx.beginPath();
  for (let i = 0, l = pathPointsNow.length; i < l; i++) {
    if (pathPointsNow[i+1]) {
      ctx.moveTo(pathPointsNow[i].x, pathPointsNow[i].y);
      ctx.lineTo(pathPointsNow[i+1].x, pathPointsNow[i+1].y);
    } else {
      ctx.lineTo(pathPointsNow[i].x, pathPointsNow[i].y);
    }
    thisColor = getColorSegment(i);
    if (thisColor && thisColor != lastColor) {
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pathPointsNow[i].x, pathPointsNow[i].y);
      ctx.strokeStyle = thisColor;
      lastColor = thisColor;
    }
  }
  ctx.stroke();
}

function samplePath(pathSelector) {
  const path = document.getElementById(pathSelector);
  const length = path.getTotalLength();
  const points = [];
  for (let i = 0; i <= steps; i++) {
    points.push(path.getPointAtLength(length * i / steps));
  }
  return points;
}

function interpolatePaths() {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    points.push({
      x: pathPointsFrom[i].x + (pathPointsTo[i].x - pathPointsFrom[i].x) * interpolationPoint.percentage, 
      y: pathPointsFrom[i].y + (pathPointsTo[i].y - pathPointsFrom[i].y) * interpolationPoint.percentage
    });
  }
  return points;
}

function getColorSegment(i) {
  let p = i / steps + offset;
  if (p > 1) p -= 1;
  const point = Math.floor(p * 4);
  return colors[point];
}

const paths = [samplePath("circle-path"), samplePath("rect-path"), samplePath("triangle-path")];

canvas.addEventListener('click', function() {
  tweenToNextPath();
});

function tweenToNextPath() {
  pathPointsFrom = paths[pathCount];
  pathCount = (pathCount + 1) % paths.length;
  pathPointsTo = paths[pathCount];
  
  TweenLite.to(interpolationPoint, 0.7, {
    percentage: 1,
    ease: Power2.easeInOut,
    onUpdate: updatePath,
    onComplete: function() {
      interpolationPoint.percentage = 0;
      pathPointsFrom = pathPointsTo;
    }
  });
}

function updatePath() {
  pathPointsNow = interpolatePaths();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPathToCanvas();
}

updatePath();
