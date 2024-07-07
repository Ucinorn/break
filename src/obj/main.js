import LevelScene from './level1.js';
import ToolbarScene from './toolbar.js';
import Spawn from './spawn.js';
import Goal from './goal.js';
import Ball from './ball.js';

class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
        this.load.image('startBackground', 'assets/startBackground.png');
    }

    create() {
        this.add.image(400, 300, 'startBackground');

        const newGameButton = this.add.text(400, 200, 'New Game', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const continueButton = this.add.text(400, 300, 'Continue', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const optionsButton = this.add.text(400, 400, 'Options', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        newGameButton.setInteractive();
        continueButton.setInteractive();
        optionsButton.setInteractive();

        newGameButton.on('pointerdown', () => {
            this.scene.start('Level1Scene');
        });

        continueButton.on('pointerdown', () => {
            console.log('Continue Game');
        });

        optionsButton.on('pointerdown', () => {
            this.scene.start('OptionsScene');
        });
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
    }

    create() {
        this.add.image(400, 300, 'sky');

        const newGameButton = this.add.text(400, 200, 'New Game', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const continueButton = this.add.text(400, 300, 'Continue', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        const optionsButton = this.add.text(400, 400, 'Options', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        newGameButton.setInteractive();
        continueButton.setInteractive();
        optionsButton.setInteractive();

        newGameButton.on('pointerdown', () => {
            this.scene.start('Level1Scene');
        });

        continueButton.on('pointerdown', () => {
            console.log('Continue Game');
        });

        optionsButton.on('pointerdown', () => {
            this.scene.start('OptionsScene');
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
    }

    create() {
        this.add.image(400, 300, 'sky');
    }

    update() {
    }
}

class OptionsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'OptionsScene' });
    }

    create() {
        this.add.text(400, 100, 'Options', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        this.add.text(300, 200, 'Sound Volume', { fontSize: '24px', fill: '#fff' });
        this.add.text(300, 300, 'Music Volume', { fontSize: '24px', fill: '#fff' });
        this.add.text(300, 400, 'Show Flashing Lights', { fontSize: '24px', fill: '#fff' });

        const backButton = this.add.text(400, 500, 'Back', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.scene.start('StartScene');
        });
    }
}
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [StartScene, LevelScene, OptionsScene, ToolbarScene]
};

var game = new Phaser.Game(config);
