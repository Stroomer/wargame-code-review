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
    this.map.draw(this.ctx);

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    console.log('resize');

    // als de heightFactor groter is dan de widthFactor, dan moet de width op 100%
    // en anders, als de widthFactor groter is dan de heightFactor, dan moet de height op 100%

    //const width = iframe.getBoundingClientRect().width;
    //const height = width * (16 / 9);

    const widthScaleFactor  = window.innerWidth  / 16;
    const heightScaleFactor = window.innerHeight / 9;

    if(heightScaleFactor > widthScaleFactor) 
    {
      this.canvas.style.width  = '100%';
      this.canvas.style.height = '';
    }
    else
    {
      this.canvas.style.height = '100%';
      this.canvas.style.width  = '';
      
    }

    console.log(` w = ${this.canvas.style.width}   h = ${this.canvas.style.height}`);
  }
}

export default Game;


