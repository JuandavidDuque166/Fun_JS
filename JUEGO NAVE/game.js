const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const keys = {};
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

class Player {
    constructor() {
        this.width = 60;
        this.height = 20;
        this.x = (canvas.width - this.width) / 2;
        this.y = canvas.height - this.height - 10;
        this.speed = 6;
    }
    update() {
        if (keys['ArrowLeft'] && this.x > 0) this.x -= this.speed;
        if (keys['ArrowRight'] && this.x + this.width < canvas.width) this.x += this.speed;
    }
    draw() {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 4;
        this.height = 10;
        this.speed = 8;
    }
    update() {
        this.y -= this.speed;
    }
    offscreen() {
        return this.y + this.height < 0;
    }
    draw() {
        ctx.fillStyle = '#ff0';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 20;
        this.speed = speed;
        this.direction = 1;
    }
    update() {
        this.x += this.speed * this.direction;
        if (this.x + this.width > canvas.width || this.x < 0) {
            this.direction *= -1;
            this.y += this.height;
        }
    }
    draw() {
        ctx.fillStyle = '#f00';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function collide(a, b) {
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}

let level = 1;
let score = 0;
let player = new Player();
let bullets = [];
let enemies = [];
let gameOver = false;

function initEnemies() {
    enemies.length = 0;
    const rows = 3 + level;
    const cols = 6 + Math.floor(level / 2);
    const speed = 1 + level * 0.2;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            enemies.push(new Enemy(50 + j * 80, 30 + i * 50, speed));
        }
    }
}

initEnemies();

function gameLoop() {
    if (gameOver) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw();

    bullets.forEach((b, i) => {
        b.update();
        b.draw();
        if (b.offscreen()) bullets.splice(i, 1);
    });

    enemies.forEach((e, ei) => {
        e.update();
        e.draw();
        bullets.forEach((b, bi) => {
            if (collide(b, e)) {
                bullets.splice(bi, 1);
                enemies.splice(ei, 1);
                score += 10;
            }
        });
    });

    if (enemies.length === 0) {
        level++;
        bullets.length = 0;
        initEnemies();
    }

    document.getElementById('score').textContent = 'Puntuación: ' + score;
    document.getElementById('level').textContent = 'Nivel: ' + level;

    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', e => {
    if (e.key === ' ' && bullets.length < 5) {
        bullets.push(new Bullet(player.x + player.width / 2 - 2, player.y));
    }
});

gameLoop();
