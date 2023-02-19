import utils from './utils.js';
import Map from './Map.js';

class Game {
  constructor(config) {
    this.element     = config.element;
    this.canvas      = this.element.querySelector(".game-canvas");
    this.ctx         = this.canvas.getContext("2d");

    this.json        = [];    // territory json
    this.images      = [];    // territory images  
    this.map         = null;
  }

  async init() {
    console.log("Game.init()");

    this.json[0] = await utils.getJSON('/src/assets/json/territories.json');
    
    this.images['area']    = await utils.getPNG('/src/assets/images/territories/area.png');  
    this.images['border']  = await utils.getPNG('/src/assets/images/territories/border.png');  
    this.images['selected'] = await utils.getPNG('/src/assets/images/territories/selected.png');  

    this.map = new Map({ json: this.json, images: this.images, canvas: this.canvas, ctx: this.ctx });
    this.map.init();
    this.map.draw(this.ctx);
  }
}

export default Game;


