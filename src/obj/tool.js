class Tool {
    constructor(scene, x, y, type) {
        this.scene = scene;
        this.type = type;
        this.tool = this.scene.add.image(x, y, type).setInteractive();
        this.scene.input.setDraggable(this.tool);

        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = Phaser.Math.Snap.To(dragX, 32);
            gameObject.y = Phaser.Math.Snap.To(dragY, 32);
        });

        this.scene.input.on('dragend', (pointer, gameObject) => {
            if (gameObject.x < 700) {
                gameObject.x = Phaser.Math.Snap.To(gameObject.x, 32);
                gameObject.y = Phaser.Math.Snap.To(gameObject.y, 32);
            } else {
                gameObject.x = x;
                gameObject.y = y;
            }
        });
    }
}

export default Tool;
