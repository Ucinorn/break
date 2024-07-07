import Ball from './ball.js';

class Spawn {
    constructor(scene, x, y, spawnRate = 1000, velocityX = 200, velocityY = 200) {
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.spawnRate = spawnRate;
        this.velocityX = velocityX;
        this.velocityY = velocityY;

        this.scene.time.addEvent({
            delay: this.spawnRate,
            callback: this.spawnBall,
            callbackScope: this,
            loop: true
        });
    }

    spawnBall() {
        const ball = new Ball(this.scene, this.x, this.y, this.velocityX, this.velocityY);
    }
}

export default Spawn;
