import utils from './utils.js';
import Map from './Map.js';
import TextSprite from './TextSprite.js';

class Game 
{
  constructor(config) 
  {
    this.element = config.element;
    this.json    = config.json;
    this.images  = config.images;

    this.canvas  = this.element.querySelector(".game-canvas");
    this.ctx     = this.canvas.getContext('2d');
    this.buffer  = this.element.querySelector('.game-buffer');
    this.bctx    = this.buffer.getContext('2d');

    this.map     = null;

    TextSprite.IMAGE.FONT_5x7   = config.images.font_5x7;
    TextSprite.IMAGE.FONT_10x14 = config.images.font_10x14;

    this.textspritetest = new TextSprite({ text:'hellohello' }); 


  }

  async init() 
  {
    this.map = new Map( { parent:this });  // { json:this.json, images:this.images, buffer:this.buffer, canvas:this.canvas }
    this.map.init();
    this.map.draw();

    

    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  
    

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(160-3,90-1,6,2);
    this.ctx.fillRect(160-1,90-3,2,6);

    this.textspritetest.draw(this.bctx, this.ctx);
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


