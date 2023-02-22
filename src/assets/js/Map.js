import Territory from './Territory.js';
import utils from './utils.js';

class Map
{
    constructor(config)
    {
        console.log('Map.constructor');
        
        this.images  = config.images;
        this.data    = config.json['territories'];
        this.canvas  = config.canvas;
        this.ctx     = config.canvas.getContext('2d', { willReadFrequently: true });

        this.buffer  = config.buffer;
        this.hoverId = null;

        this.territories = [];

        for (let i=0; i<this.data.length; i++) 
        {
            this.territories[i] = new Territory({ id:i, ...this.data[i], buffer:this.buffer, canvas:this.canvas, images:this.images } );
        }
    }

    init()
    {
        console.log('Map.init');

        for (let i=0; i<this.territories.length; i++) 
        {
            this.territories[i].init();
        }

        this.canvas.addEventListener('mousemove', this.onHover.bind(this));
    }

    onHover(event)
    {
        const { target, clientX, clientY } = event;
        const { left, top, width, height } = target.getBoundingClientRect();

        const x    = (clientX - left) / (width  / 320);
        const y    = (clientY - top)  / (height / 180);
        const data = this.ctx.getImageData(x, y, 1, 1).data;
        const hex  = utils.toHex(data);
        const dec  = utils.toDec(hex);

        if(dec !== 0)
        {
            const index = this.data.findIndex(obj => obj.color === hex);
            const territory = this.territories[index];

            territory.sprite.draw(this.buffer, this.canvas, true);
        }


        //console.log(dec);
        // if(dec <= 0 && this.hoverId !== null) 
        // {
        //     // unhover territory        
        //     this.hoverId = null;
        //     return; 
        // }
        // const index = this.data.findIndex(obj => obj.color === hex);
    }



    draw(buffer, canvas)
    {
        console.log('Map.draw');

        for (let i=0; i<this.territories.length; i++) {
            this.territories[i].sprite.draw(buffer, canvas);
        }
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

