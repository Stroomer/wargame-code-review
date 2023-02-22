class Sprite {
    constructor(config) 
    {
        console.log('Sprite.constructor');
        
        this.id     = config.id;
        this.name   = config.name;
        this.color  = `#${config.color}`;
        this.images = config.images;

        this.data   = { sx:config.src.x,  sy:config.src.y,  sw:config.src.w,  sh:config.src.h, dx:config.dest.x, dy:config.dest.y, dw:config.dest.w, dh:config.dest.h };
    }
    
    draw(buffer, canvas, border=false)    // BORDERTJE TEKENEN.... OF ZO
    {
        console.log('Territory.sprite.draw');

        const bctx = buffer.getContext('2d');
        const ctx  = canvas.getContext('2d');
        const { sx, sy, sw, sh, dx, dy, dw, dh } = this.data;

        bctx.clearRect(0, 0, buffer.width, buffer.height);

        bctx.drawImage(this.images.area,  sx, sy, sw, sh,  dx, dy, dw, dh);          // draw (source) area
        bctx.globalCompositeOperation = "source-in";
        bctx.fillStyle = this.color;                                                     
        bctx.fillRect(dx, dy, dw, dh);                                               // draw fillcolor
        
        bctx.globalCompositeOperation = "source-over";
        bctx.drawImage(this.images.border,  sx, sy, sw, sh,  dx, dy, dw, dh);



        ctx.drawImage(buffer, 0, 0);
    }
  }

  export default Sprite;