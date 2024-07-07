class Goal {
    constructor(scene, x, y) {
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.goalZone = this.scene.add.zone(this.x, this.y, 64, 64);
        this.scene.physics.world.enable(this.goalZone);
        this.goalZone.body.setAllowGravity(false);
        this.goalZone.body.moves = false;

        this.scene.physics.add.overlap(this.goalZone, this.scene.balls, this.despawnBall, null, this);
    }

    despawnBall(goalZone, ball) {
        ball.destroy();
    }
}

export default Goal;
