const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 200;
ctx.rect(10, 10, 50, 50);
ctx.rect(20, 20, 60, 60);
ctx.rect(30, 30, 70, 70);
ctx.rect(40, 40, 80, 80);
ctx.fill();
ctx.beginPath();
ctx.rect(50, 50, 90, 90);
ctx.strokeStyle = "red";
ctx.stroke();