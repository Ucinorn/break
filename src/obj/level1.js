class LevelScene extends Phaser.Scene {
    constructor(key) {
        super({ key });

        this.tilemapKey = key;
    }

    create() {
        const map = this.make.tilemap({ key: this.tilemapKey });
        const tileset = map.addTilesetImage('tiles');
        const wallsLayer = map.createLayer('Walls', tileset, 0, 0);
        wallsLayer.setCollisionByProperty({ collides: true });

        this.physics.add.collider(this.ball, wallsLayer);

        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
        this.spawn = new Spawn(this, spawnPoint.x, spawnPoint.y, 1000, 200, 200);
        const goalPoint = map.findObject("Objects", obj => obj.name === "Goal Point");
        this.goal = new Goal(this, goalPoint.x, goalPoint.y);
        this.scene.launch('ToolbarScene');

    }

    preload() {
        this.load.image('tiles', 'assets/tiles.png');
        this.load.tilemapTiledJSON(this.tilemapKey, `assets/${this.tilemapKey}.json`);
        this.load.image('ball', 'assets/ball.png');
        this.load.image('tool', 'assets/tool.png');
        this.load.image('ball', 'assets/ball.png');


        const ball = this.physics.add.image(400, 50, 'ball');
        ball.setCollideWorldBounds(true);
        ball.setBounce(1);
        this.physics.add.collider(ball, this.walls);
        ball.setVelocity(Phaser.Math.Between(-200, 200), 200);

        // Despawn ball when it goes through the opening in the bottom right
        this.physics.add.overlap(ball, this.walls, (ball, wall) => {
            if (wall.y === 600 && wall.x > 700) {
                ball.destroy();
            }
        });

    }

    }

export default LevelScene;
