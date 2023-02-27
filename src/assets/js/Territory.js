import Sprite from './Sprite.js';

class Territory 
{
  constructor(config) 
  {
    console.log('Territory.constructor ');
    
    this.id    = config.id;
    this.name  = config.name;
    this.image = config.image;
    this.color = config.color;
    
    //console.log(this.color);
    //this.colors  = config.colors;
    //this.sprite  = new Sprite(config);
    //this.stateIndex = Territory.IDLE;
    //this.state      = Territory.STATES[0];
  }

  init(ctx) 
  {
    //console.log(ctx);

    this.draw(ctx);
    
  }

  hover(isHovering)
  {
    if(isHovering) { this.sprite.drawBorder(this.colors.border); }
    else {           this.sprite.drawBorder(this.colors.hover);  }
  }

  draw(ctx) 
  {
    const { x:sx, y:sy, w:sw, h:sh } = this.image.src;
    const { x:dx, y:dy, w:dw, h:dh } = this.image.dest;
    const buffer = Territory.BUFFER.ctx;

    buffer.clearRect(0, 0, buffer.canvas.width, buffer.canvas.height);

    buffer.drawImage(Territory.IMAGE.AREA, sx, sy, sw, sh, dx, dy, dw, dh);
    buffer.globalCompositeOperation = "source-in";
    buffer.fillStyle = this.color; 
    buffer.fillRect(dx, dy, dw, dh);                                           
    buffer.globalCompositeOperation = "source-over";
    ctx.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);  

    ctx.drawImage(Territory.IMAGE.BORDER,  sx, sy, sw, sh, dx, dy, dw, dh);
  }
}

Territory.IMAGE  = { AREA:null, BORDER:null, SELECTED:null };
Territory.COLOR  = { AREA:'cyan', BORDER:'black', HOVER:'red' };
Territory.BUFFER = null;





Territory.STATES = ['idle', 'attacking', 'defending'];
Territory.IDLE   = 0;
Territory.ATTACK = 1;
Territory.DEFEND = 2;

export default Territory;
