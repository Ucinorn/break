class Ball {
    constructor(scene, x, y, velocityX, velocityY, weight = 1, bounce = 1) {
        this.scene = scene;
        this.sprite = this.scene.physics.add.image(x, y, 'ball');
        this.weight = weight;
        this.bounce = bounce;

        this.sprite.setCollideWorldBounds(true);
        this.sprite.setBounce(this.bounce);
        this.sprite.setMass(this.weight);
        this.sprite.setBounce(this.bounce);
        this.sprite.setVelocity(velocityX, velocityY);
        this.scene.physics.add.collider(this.sprite, this.scene.wallsLayer);
        this.scene.physics.add.collider(this.sprite, this.scene.wallsLayer);
        this.scene.physics.add.collider(this.sprite, this.scene.objectsLayer);
    }

    destroy() {
        this.sprite.destroy();
    }
}

export default Ball;
