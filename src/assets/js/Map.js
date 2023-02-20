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