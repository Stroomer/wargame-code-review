import Territory from './Territory.js';

class Map
{
    constructor(config)
    {
        console.log('Map.constructor');
        
        this.images = config.images;
        this.data   = config.json['territories'];
        this.canvas = config.canvas;
        this.buffer = config.buffer;

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

        this.canvas.addEventListener('click', this.click.bind(this));
    }

    click(event) 
    {
        const canvas = event.target;
        const ctx    = canvas.getContext('2d');
        const rect   = canvas.getBoundingClientRect();
        const x      = event.clientX - rect.left;
        const y      = event.clientY - rect.top;
        const width  = rect.width;
        const height = rect.height;
        const scaleX = width / 320;
        const scaleY = height / 180;
        const data   = ctx.getImageData(x/scaleX, y/scaleY, 1, 1).data;
        const rgb    = ((data[0] << 16) | (data[1] << 8) | (data[2])).toString(16);
        const hex    = "#" + ("00000000" + rgb).slice(-6);

        console.log( hex ); 
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