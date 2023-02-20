import Territory from './Territory.js';

class Map
{
    constructor(config)
    {
        this.config = config;
        this.territories = [];
    }

    init()
    {
        const data   = this.config.json['territories'];
        const images = this.config.images;
        
        for (let i=0; i<data.length; i++) {
            this.territories[i] = new Territory({ id:i, data:data[i], images:images });
            this.territories[i].init();
        }
    }

    draw(ctx)
    {
        for (let i=0; i<this.territories.length; i++) {
            this.territories[i].sprite.draw(ctx);
        }
    }
}

export default Map;