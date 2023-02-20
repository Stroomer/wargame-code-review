class Sprite {
    constructor(config) {
        this.config = config;
        this.id     = config.id;
        this.name   = config.data.name;
        this.src    = config.data.src;
        this.dest   = config.data.dest;
        this.color  = config.data.color;
        this.images = config.images;

        //console.log(config);
    }
    
    draw(ctx) {
        const sx = this.src.x;
        const sy = this.src.y;
        const sw = this.src.w;
        const sh = this.src.h;

        const dx = this.dest.x;
        const dy = this.dest.y;
        const dw = this.dest.w;
        const dh = this.dest.h;

        console.log(this.src);
        console.log(this.dest);
        console.log("");

        
        if(this.id === 0) {

            
            
            ctx.drawImage(this.images.area,  sx, sy, sw, sh,  dx, dy, dw, dh);
            
            ctx.globalCompositeOperation = "source-in";

            ctx.fillStyle = 'blue';
            ctx.fillRect(dx, dy, dw, dh);

            console.log(dw, dh);

            //ctx.drawImage(this.images.border,  sx, sy, sw, sh,  dx, dy, dw, dh);
            // const { width, height } = this.selected;
            // console.log(width, height);
            // this.ctx.drawImage(this.selected,  0, 0, 64, 64,  0, 0, 64, 64);  // dx, dy, width/3, height,  dx, dy, width/3, height
            // console.log();
        }    
    
    }
  }

  export default Sprite;