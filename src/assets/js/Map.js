import Territory from './Territory.js';

class Map
{
    constructor(config)
    {
        this.config      = config;
        this.territories = [];
    }

    init()
    {
        const data = this.config.json['territories'];
        
        for (let i=0; i<data.length; i++) {
            this.territories[i] = new Territory({ ...this.config, id:i });
            this.territories[i].init();
        }
    }

    draw()
    {
        for (let i=0; i<this.territories.length; i++) {
            this.territories[i].sprite.draw();
        }
    }
}

export default Map;