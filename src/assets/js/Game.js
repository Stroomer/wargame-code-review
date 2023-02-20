import utils from './utils.js';
import Map from './Map.js';

class Game 
{
  constructor(config) 
  {
    this.element = config.element;
    this.json    = config.json;
    this.images  = config.images;

    this.canvas  = this.element.querySelector(".game-canvas");
    this.buffer  = this.element.querySelector('.game-buffer');

    this.map     = null;
  }

  async init() 
  {
    this.map = new Map({ json:this.json, images:this.images, buffer:this.buffer, canvas:this.canvas });
    this.map.init();
    this.map.draw(this.buffer, this.canvas);

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() 
  {
    const widthScaleFactor  = window.innerWidth  / 16;
    const heightScaleFactor = window.innerHeight / 9;

    this.canvas.style.width  = this.buffer.style.width  = (heightScaleFactor > widthScaleFactor) ? '100%' : '';
    this.canvas.style.height = this.buffer.style.height = (heightScaleFactor > widthScaleFactor) ? ''     : '100%';
  }
}

export default Game;


