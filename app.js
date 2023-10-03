const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.rect(50, 10, 100, 20);
// ctx.rect(150, 30, 100, 20);
// ctx.rect(250, 50, 100, 20);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 70, 100, 20);
// ctx.rect(450, 90, 100, 20);

// ctx.fillStyle = "red";
// ctx.fill();
// setTimeout(() => {
//     ctx.fill();
// }, 5000);

// 1.3
// ctx.moveTo(50, 50); // moveTo(x, y) : 시작점인 x,y 좌표를 바꿔줌
// ctx.lineTo(150, 50); //lineTo(x, y) : 시작점에서 x,y 좌표까지 선을 그림
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();

// 1.4 집 그리기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);

// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 30)

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill(); //선을 그려줌 (색칠)

// 1.5 사람 그리기
// ctx.rect(210, 200, 15, 100);
// ctx.rect(350, 200, 15, 100);
// ctx.rect(260, 200, 60, 200);

// ctx.arc(290, 150, 50, 0, 2*Math.PI); //x좌표, y좌표, 반지름, 원의 시작점, 원의 끝점
// ctx.fillStyle = "green";
// ctx.fill();

// ctx.beginPath(); // 색을 바꿔주려면 다른 path를 지정해줘야함
// ctx.arc(270, 150, 10, Math.PI, 2*Math.PI);
// ctx.arc(310, 150, 10, Math.PI, 2*Math.PI);
// ctx.fillStyle = "red";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(280, 170, 10, 0, 0.75*Math.PI);
// ctx.stroke();
// ctx.beginPath();
// ctx.arc(300, 170, 10, 0.6, 1*Math.PI);
// ctx.fillStyle = "red";
// ctx.stroke();

// 2.0 마우스 드래그로 선 그리기
// ctx.lineWidth = 2;

// const colors = [
//     "#6a89cc",
//     "#4a69bd",
//     "#1e3799",
//     "#0c2461"
// ]

// function mouseMove(event) {
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }

// function onClick(event) {
//     color = colors[Math.floor(Math.random() * colors.length)];
// }

// canvas.addEventListener("mousemove", mouseMove);
// canvas.addEventListener("click", onClick);

// 2.1 클릭과 드래그로 그리기
ctx.lineWidth = 2;
var clickTrue = False;

function mouseMove(event) {
    if (clickTrue) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    }
}

function onClick(event) {
    x = event.offsetX;
    y = event.offsetY;
    clickTrue = True;
}

canvas.addEventListener("mousemove", mouseMove);
canvas.addEventListener("click", onClick);


