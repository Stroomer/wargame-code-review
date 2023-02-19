import utils from './utils.js';
import Map from './Map.js';

class Game {
  constructor(config) {
    this.element = config.element;
    this.json    = config.json;
    this.images  = config.images;
    this.canvas  = this.element.querySelector(".game-canvas");
    this.ctx     = this.canvas.getContext("2d");
    this.map     = null;
  }

  async init() {
    this.map = new Map(this);
    this.map.init();
    this.map.draw();
  }
}

export default Game;


