class Sprite {
    constructor(config) {
        this.src      = config.src;
        this.dest     = config.dest;
        this.area     = config.area;
        this.border   = config.border;
        this.selected = config.selected;
        this.canvas   = config.canvas;
        this.ctx      = config.ctx;
    }
    
    draw() {
        const sx = this.src.x;
        const sy = this.src.y;
        const sw = this.src.w;
        const sh = this.src.h;

        const dx = this.dest.x;
        const dy = this.dest.y;
        const dw = this.dest.w;
        const dh = this.dest.h;

        this.ctx.drawImage(this.area, sx, sy, sw, sh, dx, dy, dw, dh);
        this.ctx.drawImage(this.border, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  export default Sprite;