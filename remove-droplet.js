let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

let y = 20;

function Drople(x, y) {
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
  };
}
