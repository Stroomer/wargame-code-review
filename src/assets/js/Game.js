import utils from './utils.js';
import Map from './Map.js';
import Territory from './Territory.js';
import Canvas from './Canvas.js';
import UI from './UI.js';
import TextSprite from './TextSprite.js';


class Game 
{
  constructor(config) 
  {
    this.setStatics(config);
    this.setUI(config);  
    this.setMap(config);
    this.setEventListeners(config);
  }

  async init() 
  {
    //this.map.init();
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() 
  {
    const scaleW = window.innerWidth  / 16;
    const scaleH = window.innerHeight / 9;
    const canvasList = document.getElementsByTagName('canvas'); 

    [...canvasList].forEach(element => {
      element.style.width  = (scaleH > scaleW) ? '100%' : '';
      element.style.height = (scaleH > scaleW) ? ''     : '100%';
    });      
  }

  draw()
  {
    //this.map.draw();

    //this.hoverTest.draw(this.bctx, this.ctx);
  }

  setEventListeners(config)
  {
    document.addEventListener("TerritoryHover", this.ui.onTerritoryHover.bind(this.ui));
    
  }

  setMap(config)
  {
    const territories   = config.json['territories'];

    territories.forEach((terr, index, array) => {
      array[index] = new Territory({ id:index, name:terr.name, image:{src:terr.src, dest:terr.dest}, color:terr.color});
    });
      
    this.map = new Map( { territories:territories });
    this.map.init();
  }

  setUI(config)
  {
    this.ui = new UI({  });
    this.ui.init();
  }

  setStatics(config)
  {
    // Set images for TextSprite Class
    TextSprite.IMAGE.FONT_5x7   = config.images.font_5x7;
    TextSprite.IMAGE.FONT_10x14 = config.images.font_10x14;
    // Set images for Territory Class
    Territory.IMAGE.AREA        = config.images.area;  
    Territory.IMAGE.BORDER      = config.images.border;
    Territory.IMAGE.SELECTED    = config.images.selected;
    // Set colors for Territory Class
    Territory.COLOR.AREA        = null; //config.json['territories']
    Territory.COLOR.BORDER      = 'black';
    Territory.COLOR.HOVER       = 'red';
    
    
    Canvas.BUFFER      = new Canvas({ canvas:config.layers['buffer']      });    // Canvas Buffer Layer (global multi draw)
    Canvas.MAP.STATIC  = new Canvas({ canvas:config.layers['map-static']  });    // Map Canvas Layer (single draw)
    Canvas.MAP.DYNAMIC = new Canvas({ canvas:config.layers['map-dynamic'] });    // Map Canvas Layer (multi draw)
    Canvas.UI.STATIC   = new Canvas({ canvas:config.layers['ui-static']  });     // UI Canvas Layer (single draw)
    Canvas.UI.DYNAMIC  = new Canvas({ canvas:config.layers['ui-dynamic'] });     // UI Canvas Layer (multi draw)

    Canvas.TOP_LAYER   = Canvas.UI.DYNAMIC;
  }
}

export default Game;