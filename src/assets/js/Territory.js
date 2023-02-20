import Sprite from './Sprite.js';

class Territory 
{
  constructor(config) 
  {
    console.log('Territory.constructor ');
    
    this.id     = config.id;
    this.name   = config.name;
    this.sprite = new Sprite({ ...config });
    
    this.stateIndex = Territory.IDLE;
    this.state      = Territory.STATES[0];
  }


  init() 
  {
    console.log('Territory.init');
  }

  draw() 
  {
    console.log('Territory.draw');

    // const { x, y, w, h } = this.data.src;
    // const dx = this.data.dest.x;
    // const dy = this.data.dest.y;

    // if(this.id === 0) 
    // {        
    //     ctx.drawImage(this.images.area,  x, y, w, h,  dx, dy, w, h);          // draw (source) area
    //     ctx.globalCompositeOperation = "source-in";
    //     ctx.fillStyle = this.color;                                                     
    //     ctx.fillRect(dx, dy, w, h);                                           // draw fillcolor
    //     ctx.globalCompositeOperation = "source-over";
    //     ctx.drawImage(this.images.border,  x, y, w, h,  dx, dy, w, h);
    // }    
    
    // console.log(this.config);

  }
}

Territory.STATES = ['idle', 'attacking', 'defending'];
Territory.IDLE   = 0;
Territory.ATTACK = 1;
Territory.DEFEND = 2;

export default Territory;
