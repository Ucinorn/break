import Tool from './tool.js';

class ToolbarScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ToolbarScene' });
        this.load.image('tool', 'assets/tool.png');
        this.load.image('bouncer', 'assets/bouncer.png');
        this.load.image('angle', 'assets/angle.png');
        this.load.image('curve', 'assets/curve.png');
        this.load.image('spinner', 'assets/spinner.png');

        this.tools = [
            new Tool(this, 750, 100, 'bouncer'),
            new Tool(this, 750, 200, 'angle'),
            new Tool(this, 750, 300, 'curve'),
            new Tool(this, 750, 400, 'spinner')
        ];

    }

    update() {
    }

    update() {
    }
}

export default ToolbarScene;
