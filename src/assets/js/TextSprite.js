class TextSprite 
{
    constructor(config)
    {
        this.pos    = {  x:config.x || 160, y:config.y || 90 };
        this.text   = config.text   || 'test' ;
        this.size   = config.size   || TextSprite.SIZE.MEDIUM;
        this.align  = config.align  || TextSprite.ALIGN.CENTER;
        this.valign = config.valign || TextSprite.VALIGN.MIDDLE;
        this.chars = TextSprite.CHARS;

        switch(this.size)
        {
            case TextSprite.SIZE.MEDIUM:
                this.char   = { width:5, height:7, space:1 };
                this.image  = TextSprite.IMAGE.FONT_5x7;
            break;
            case TextSprite.SIZE.LARGE:
                this.char   = { width:10, height:14, space:2 };
                this.image  = TextSprite.IMAGE.FONT_10x14;    
            break;
        }
    }

    init()
    {

    }

    get x()
    {
        let x = 0;
        switch(this.align) {
            case TextSprite.ALIGN.LEFT:   x = this.pos.x - (((this.text.length * (this.char.width + this.char.space))-this.char.space));     break;
            case TextSprite.ALIGN.CENTER: x = this.pos.x - (((this.text.length * (this.char.width + this.char.space))-this.char.space) / 2); break;
            case TextSprite.ALIGN.RIGHT:  x = this.pos.x;                                                                                    break; 
        }
        return Number.parseInt(x);
    }

    get y()
    {
        let y = 0;
        switch(this.valign) {
            case TextSprite.VALIGN.TOP:    y = this.pos.y;                          break;
            case TextSprite.VALIGN.MIDDLE: y = this.pos.y - (this.char.height / 2); break;
            case TextSprite.VALIGN.BOTTOM: y = this.pos.y - (this.char.height);     break; 
        }
        return Number.parseInt(y);
    }

    draw(bctx, ctx) 
    {
        if(this.text.length===0) { console.log('Cannot draw empty string'); return };
        bctx.clearRect(0, 0, bctx.canvas.width, bctx.canvas.height);
        for(let i=0; i<this.text.length; i++)
        {
            const index = this.chars.indexOf(this.text[i]);
            const srcX  = 1+(index*(this.char.width+this.char.space));
            const srcY  = 1;
            const srcW  = this.char.width;
            const srcH  = this.char.height;
            const destX = i*(this.char.width+this.char.space);
            const destY = 0;
            const destW = this.char.width;
            const destH = this.char.height;

            bctx.drawImage(this.image, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
        }
        ctx.drawImage(bctx.canvas, this.x, this.y);
    }
}

TextSprite.IMAGE  = { FONT_5x7:null, FONT_10x14:null };
TextSprite.SIZE   = { MEDIUM:1, LARGE:2 };
TextSprite.ALIGN  = { LEFT:1, CENTER:2, RIGHT:3 };
TextSprite.VALIGN = { TOP:1, MIDDLE:2, BOTTOM:3 };
TextSprite.CHARS  = 'abcdefghijklmnopqrstuvwxyz0123456789 @';

export default TextSprite;