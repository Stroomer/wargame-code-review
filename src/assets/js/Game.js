import { getCountryByName, getCountryNames } from './helpers.js';

class Game {
    constructor(config)   {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        console.log('Hello from the Wargame object', this);

        // const image = new Image();
        // image.onload = () => {
        //     this.ctx.drawImage(image, 0, 0);
        // }
        // image.src = '/src/assets/images/map.png';

        // const dice = new Image();
        // dice.onload = () => {
        //     this.ctx.drawImage(dice, 0, 0, );
        // }
        // dice.src = '/src/assets/images/dice/dice.png';
 
        const image = new Image();
        image.onload = () => {    
            const countryNames = getCountryNames();    
            for(let i=0; i<countryNames.length; i++)
            {    
                const obj  = getCountryByName(countryNames[i]); 
                const { src: { x, y, w, h  } } = obj;
                //const { dest: { x, y, w, h  } } = obj;
                
                //const src  = obj.src;

                // const sx   = obj.src.x;
                // const sy   = obj.src.y;
                // const sw   = obj.src.w;
                // const sh   = obj.src.h;
                
                const dest = obj.dest;

                const dx   = obj.dest.x;
                const dy   = obj.dest.y;
                const dw   = obj.dest.w;
                const dh   = obj.dest.h;
                
                

                this.ctx.drawImage(image, x, y, w, h, dx, dy, dw, dh);    
            }
        }
        image.src = '/src/assets/images/countries/countries.png';    


            

    }
}

export default Game;