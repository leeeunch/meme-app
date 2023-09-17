const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.heigt = 800;

ctx.rect(50, 10, 100, 20);
// ctx.rect(150, 150, 100, 100);
// ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.rect(150, 30, 100, 20);
ctx.fillStyle = "red";
// ctx.fill();
setTimeout(() => {
    ctx.fill();
}, 5000);