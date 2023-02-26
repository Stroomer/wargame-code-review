class Sprite {
    constructor(config) 
    {
        //console.log('Sprite.constructor');
        
        //console.log(config);

        this.id     = config.id;
        this.src    = config.json['territories'][config.id].src;
        this.dest   = config.json['territories'][config.id].dest;
        this.fill   = config.colors.fill;
        this.images = config.images;
        this.buffer = config.buffer;
        this.canvas = config.canvas;
        this.ctx    = config.canvas.getContext('2d');
        this.bctx   = config.buffer.getContext('2d');
    }   
    
    drawBorder(color)
    {
        this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);

        this.bctx.drawImage(this.images.border, this.src.x, this.src.y, this.src.w, this.src.h, this.dest.x, this.dest.y, this.dest.w, this.dest.h);          // draw (source) area
        this.bctx.globalCompositeOperation = "source-in";
        this.bctx.fillStyle = color;                                                     
        this.bctx.fillRect(this.dest.x, this.dest.y, this.dest.w, this.dest.h);                                               // draw fillcolor
        
        this.bctx.globalCompositeOperation = "source-over";
        this.bctx.drawImage(this.images.border, this.src.x, this.src.y, this.src.w, this.src.h, this.dest.x, this.dest.y, this.dest.w, this.dest.h);

        this.ctx.drawImage(this.buffer, 0, 0);
    }

    draw()
    {
        // console.log('Territory.sprite.draw');

        // const bctx = buffer.getContext('2d');
        // const ctx  = canvas.getContext('2d');
        // const { sx, sy, sw, sh, dx, dy, dw, dh } = this.data;

        this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);

        this.bctx.drawImage(this.images.area,  this.src.x, this.src.y, this.src.w, this.src.h, this.dest.x, this.dest.y, this.dest.w, this.dest.h);          // draw (source) area
        this.bctx.globalCompositeOperation = "source-in";
        this.bctx.fillStyle = this.fill;                                                     
        this.bctx.fillRect(this.dest.x, this.dest.y, this.dest.w, this.dest.h);                                               // draw fillcolor
        
        this.bctx.globalCompositeOperation = "source-over";
        this.bctx.drawImage(this.images.border, this.src.x, this.src.y, this.src.w, this.src.h, this.dest.x, this.dest.y, this.dest.w, this.dest.h);



        this.ctx.drawImage(this.buffer, 0, 0);
    }
  }

  export default Sprite;