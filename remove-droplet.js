let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

function Droplet(x, y, dy, size) {
  this.x = x;
  this.y = y;
  this.dy = dy;
  this.size = size;

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(
      this.x - this.size,
      this.y + this.size * 1.3,
      this.x + this.size * 1.3,
      this.y + this.size * 1.3,
      this.x,
      this.y
    );

    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
    this.y += dy;
  };
}
let dropletArray = [];

for (let i = 0; i < 100; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let dy = (Math.random() + 2) * 1.3;
  let size = Math.random() * 20 + 30;
  dropletArray.push(new Droplet(x, y, dy, size));
  console.log(dy);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < dropletArray.length; i++) {
    dropletArray[i].draw();
  }
}

animate();

console.log(dropletArray);
