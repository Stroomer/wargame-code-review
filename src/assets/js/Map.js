import Territory from './Territory.js';

class Map
{
    constructor(config)
    {
        this.json        = config.json;
        this.images      = config.images;
        this.territories = [];
    }

    init()
    {
        const territoryData = this.json[0]; 
        
        for (let i=0; i<territoryData.length; i++) {
            this.territories[i] = new Territory({ data: territoryData[i], images: this.images });
            this.territories[i].init();
        }
    }

    draw(ctx)
    {
        Object.values(this.territories).forEach(territory => {
            territory.sprite.draw(ctx);
        });
    }
}

export default Map;