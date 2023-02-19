class Sprite {
    constructor(config) {
        this.data     = config.data;
        this.area     = config.images['area'];
        this.border   = config.images['border'];
        this.selected = config.images['selected'];
        
    }
    
    draw(ctx) {
        const sx = this.data.src.x;
        const sy = this.data.src.y;
        const sw = this.data.src.w;
        const sh = this.data.src.h;

        const dx = this.data.dest.x;
        const dy = this.data.dest.y;
        const dw = this.data.dest.w;
        const dh = this.data.dest.h;

        ctx.drawImage(this.area, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  export default Sprite;