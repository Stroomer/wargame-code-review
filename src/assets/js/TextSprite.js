import Canvas from './Canvas.js';
import utils from './utils.js';

class TextSprite 
{
    constructor(config)
    {
        this.pos    = { x:config.x, y:config.y };
        this.text   = config.text   || '' ;
        this.size   = config.size   || TextSprite.SIZE.MEDIUM;
        this.align  = config.align  || TextSprite.ALIGN.CENTER;
        this.valign = config.valign || TextSprite.VALIGN.MIDDLE;

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
        this.draw(Canvas.BUFFER.ctx, Canvas.UI.DYNAMIC.ctx);
    }

    get x()
    {
        const length=this.text.length; const width=this.char.width; const height=this.char.height; const space=this.char.space; 
        let x = 0;
        switch(this.align) {
            case TextSprite.ALIGN.LEFT:   x = this.pos.x - (((length * (width + space))-space));     break;
            case TextSprite.ALIGN.CENTER: x = this.pos.x - (((length * (width + space))-space) / 2); break;
            case TextSprite.ALIGN.RIGHT:  x = this.pos.x;                                            break; 
        }
        return Number.parseInt(x);
    }

    get y()
    {
        const height=this.char.height;
        let y = 0;
        switch(this.valign) {
            case TextSprite.VALIGN.TOP:    y = this.pos.y;                break;
            case TextSprite.VALIGN.MIDDLE: y = this.pos.y - (height / 2); break;
            case TextSprite.VALIGN.BOTTOM: y = this.pos.y - (height);     break; 
        }
        return Number.parseInt(y);
    }

    setText(text)
    {
        this.text = text;
        this.draw(Canvas.BUFFER.ctx, Canvas.UI.DYNAMIC.ctx);   
    }

    draw(buffer, ctx) 
    {
        buffer.clearRect(0, 0, buffer.canvas.width, buffer.canvas.height);

        const length=this.text.length; const width=this.char.width; const height=this.char.height; const space=this.char.space; 
        for(let i=0; i<length; i++)
        {
            const char  = this.text[i];
            const index = TextSprite.CHARS.indexOf(char);
            const sx    = 1+(index*(width+space));
            const sy    = 1;
            const sw    = width;
            const sh    = height;
            const dx    = i*(width+space);
            const dy    = 0;
            const dw    = width;
            const dh    = height;

            buffer.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);       // is this really a necessity??
        ctx.drawImage(buffer.canvas, this.x, this.y);
    }
}

TextSprite.IMAGE  = { FONT_5x7:null, FONT_10x14:null };
TextSprite.SIZE   = { MEDIUM:1, LARGE:2 };
TextSprite.ALIGN  = { LEFT:1, CENTER:2, RIGHT:3 };
TextSprite.VALIGN = { TOP:1, MIDDLE:2, BOTTOM:3 };
TextSprite.CHARS  = 'abcdefghijklmnopqrstuvwxyz0123456789 @';


export default TextSprite;