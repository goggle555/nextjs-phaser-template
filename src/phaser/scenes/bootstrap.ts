import Phaser from "phaser";

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  init() {}

  preload() {}

  create() {
    this.createNewGame();
  }

  update() {}

  private createNewGame() {
    this.scene.launch("game");
  }
}
