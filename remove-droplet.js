let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

function Droplet(x, y, dy) {
  this.x = x;
  this.y = y;
  this.dy = dy;

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(
      this.x - 35,
      this.y + 40,
      this.x + 40,
      this.y + 40,
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
  dropletArray.push(new Droplet(x, y, dy));
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
