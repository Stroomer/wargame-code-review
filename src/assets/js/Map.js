import Territory from './Territory.js';
import utils from './utils.js';

class Map
{
    constructor(config)
    {
        console.log('Map.constructor');

        this.parent = config.parent;
        this.data   = config.parent.json['territories'];
        this.canvas = config.parent.canvas;
        this.ctx    = config.parent.canvas.getContext('2d', { willReadFrequently: true });

        console.log('--> '+this.data[0].fill );

        // this.images  = config.images;
        // this.data    = config.json['territories'];

        // console.log(this.data);

        

        // this.buffer  = config.buffer;
        //this.currentHover = null;

        this.territories = [];

        for (let i=0; i<this.data.length; i++) 
        {   
            this.territories[i] = new Territory({ id:i, colors:{ border:'#000', hover:'#f00', fill:this.data[i].fill }, ...this.parent } );
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
            //if(this.currentHover!==null) { this.territories[ this.currentHover ].hover(false); }
            // TODO faulty!
            this.currentHover = this.data.findIndex(obj => obj.color === hex);
            //this.territories[ this.currentHover ].hover(true);
        }
    }



    draw()
    {
        console.log('Map.draw');

        for (let i=0; i<this.territories.length; i++) {
            this.territories[i].sprite.draw();
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

