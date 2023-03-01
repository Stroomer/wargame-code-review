import utils from './utils.js';
import Canvas from './Canvas.js';

class Map
{
    constructor(config)
    {
        console.log('Map.constructor');
        this.territories = config.territories;
        this.hoverIndex  = null;
    }

    init()
    {
        console.log('Map.init');
        for (let i=0; i<this.territories.length; i++) {
            this.territories[i].init();
        }
  
        Canvas.TOP_LAYER.canvas.addEventListener('mousemove', this.onHover.bind(this));
    }

    onHover(event)
    {
        const { target, clientX, clientY } = event;
        const { left, top, width, height } = target.getBoundingClientRect();

        const ctx  = Canvas.MAP.STATIC.ctx;
        const x    = (clientX - left) / (width  / 320);
        const y    = (clientY - top)  / (height / 180);
        const data = ctx.getImageData(x, y, 1, 1).data;
        const hex  = utils.toHex(data);
        const dec  = utils.toDec(hex);
        
        const currentHoverIndex = this.hoverIndex;

        if(dec !== 0) 
        {
            this.hoverIndex = this.territories.findIndex(obj => obj.color === hex);
        }
        else
        {
            this.hoverIndex = null;
        }

        if(currentHoverIndex !== this.hoverIndex)
        {
            utils.emitEvent("TerritoryHover", { index: this.hoverIndex });
        }
    }

    draw()
    {

    }
}

export default Map;














// function GetPixel(context, x, y)
// {
//     var p = context.getImageData(x, y, 1, 1).data; 
//     var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);  
//     return hex;
// }

// function rgbToHex(r, g, b) {
//     if (r > 255 || g > 255 || b > 255)
//         throw "Invalid color component";
//     return ((r << 16) | (g << 8) | b).toString(16);
// }

