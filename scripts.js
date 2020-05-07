var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width;
var h = canvas.height;
var ballColor = 'red';
var ballSize = 20;
var myBall = {
    x: (ballSize + 5),
    y: (ballSize + 5)
}
var movDir = {
    x: 3,
    y: 3,
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(myBall.x, myBall.y, ballSize, 0, Math.PI * 2, false);
    ctx.fillStyle = ballColor;

    ctx.shadowColor = '#000';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;

    ctx.fill()
}

function Moveball() {
    if (myBall.y > (h - ballSize) || myBall.y <= ballSize) {
        movDir.y = -movDir.y;
        ballColor = '#' + Math.random().toString(16).substr(-6);
    }
    if (myBall.x > w - ballSize || myBall.x <= ballSize) {
        movDir.x *= -1;
        ballColor = '#' + Math.random().toString(16).substr(-6);

    }

    myBall.x += movDir.x;
    myBall.y += movDir.y;


    draw();
    requestAnimationFrame(Moveball)
}

Moveball()