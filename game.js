const menu = document.getElementById("menu");
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 100,
    y: 100,
    width: 30,
    height: 40,
    speed: 3
};

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

window.startGame = function () {
    menu.style.display = "none";
    canvas.style.display = "block";
    requestAnimationFrame(gameLoop);
};

function update() {

    if (keys["w"] || keys["arrowup"])
        player.y -= player.speed;

    if (keys["s"] || keys["arrowdown"])
        player.y += player.speed;

    if (keys["a"] || keys["arrowleft"])
        player.x -= player.speed;

    if (keys["d"] || keys["arrowright"])
        player.x += player.speed;

    // Keep player inside screen
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

function drawWorld() {

    // Sky
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grass
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(0, 420, canvas.width, 120);

    // Tree 1
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(150, 300, 20, 120);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(160, 270, 45, 0, Math.PI * 2);
    ctx.fill();

    // Tree 2
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(700, 280, 20, 140);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(710, 250, 50, 0, Math.PI * 2);
    ctx.fill();

    // House
    ctx.fillStyle = "#c0392b";
    ctx.fillRect(820, 320, 90, 80);

    ctx.fillStyle = "#8e44ad";
    ctx.beginPath();
    ctx.moveTo(810,320);
    ctx.lineTo(865,270);
    ctx.lineTo(920,320);
    ctx.fill();

    // Player
    ctx.fillStyle = "#2563eb";
    ctx.fillRect(
        player.x,
        player.y,
        player.width,
        player.height
    );

}

function gameLoop() {

    update();

    drawWorld();

    requestAnimationFrame(gameLoop);

}
