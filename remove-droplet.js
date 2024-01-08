let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let y = 20;

function Droplet(x, y) {
  this.x = x;
  this.y = y;

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(100, this.y);
    ctx.bezierCurveTo(65, this.y + 40, 140, this.y + 40, 100, this.y);

    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    this.y += 1;
  };
}

let droplet = new Droplet(100, y);
droplet.draw();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  droplet.draw();
}

animate();
