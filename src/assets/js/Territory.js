import Canvas from './Canvas.js';

class Territory 
{
  constructor(config) 
  {
    console.log('Territory.constructor ');
    
    this.id    = config.id;
    this.name  = config.name;
    this.image = config.image;
    this.color = config.color;
  }

  init() 
  {
    this.draw(Canvas.BUFFER.ctx, Canvas.MAP.STATIC.ctx);
  }

  draw(buffer, ctx) 
  {
    const { x:sx, y:sy, w:sw, h:sh } = this.image.src;
    const { x:dx, y:dy, w:dw, h:dh } = this.image.dest;

    buffer.clearRect(0, 0, buffer.canvas.width, buffer.canvas.height);

    buffer.drawImage(Territory.IMAGE.AREA, sx, sy, sw, sh, dx, dy, dw, dh);
    buffer.globalCompositeOperation = "source-in";
    buffer.fillStyle = `#${this.color}`; 
    buffer.fillRect(dx, dy, dw, dh);                                           
    buffer.globalCompositeOperation = "source-over";
    
    ctx.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height);  
    ctx.drawImage(Territory.IMAGE.BORDER,  sx, sy, sw, sh, dx, dy, dw, dh);
  }
}

Territory.IMAGE  = { AREA:null, BORDER:null, SELECTED:null };
Territory.COLOR  = { AREA:'cyan', BORDER:'black', HOVER:'red' };

 

Territory.STATES = ['idle', 'attacking', 'defending'];
Territory.IDLE   = 0;
Territory.ATTACK = 1;
Territory.DEFEND = 2;

export default Territory;
