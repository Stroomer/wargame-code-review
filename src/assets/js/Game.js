import utils from './utils.js';
import Map from './Map.js';
import Territory from './Territory.js';
import Layer from './Layer.js';
import TextSprite from './TextSprite.js';

class Game 
{
  constructor(config) 
  {
    // this.json   = config.json;
    // this.images = config.images;
    // this.layers = config.layers;

    
    this.setLayers(config);
    this.setStaticElements(config);  
    this.setMap(config);



    

    

    // this.hoverTest = new TextSprite({ x:this.canvas.width/2, 
    //                                   y:this.canvas.height-2, 
    //                                   text:'northwest territory',
    //                                   align:TextSprite.ALIGN.CENTER,
    //                                   valign:TextSprite.VALIGN.BOTTOM});
  }

  async init() 
  {
    

    //this.map.init();
    
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(160-3,90-1,6,2);
    // this.ctx.fillRect(160-1,90-3,2,6);

    // this.draw();
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

  setLayers(config)
  { 
    this.layers = [];
    Object.entries(config.layers).forEach((entry) => {
      this.layers[entry[0]] = new Layer({ canvas:entry[1] });
    });
  }

  setMap(config)
  {
    const territories   = config.json['territories'];

    territories.forEach((terr, index, array) => {
      array[index] = new Territory({ id:index, name:terr.name, image:{src:terr.src, dest:terr.dest}, color:terr.fill});
    });
      
    this.map = new Map( { territories:territories, staticLayer:this.layers['map-static'], dynamicLayer:this.layers['map-dynamic'] });
    this.map.init();
  }

  setStaticElements(config)
  {
    // Set images for TextSprite Class
    TextSprite.IMAGE.FONT_5x7   = config.images.font_5x7;
    TextSprite.IMAGE.FONT_10x14 = config.images.font_10x14;
    // Set images for Territory Class
    Territory.IMAGE.AREA        = config.images.area;  
    Territory.IMAGE.BORDER      = config.images.border;
    Territory.IMAGE.SELECTED    = config.images.selected;
    // Set colors for Terrotory Class
    Territory.COLOR.AREA        = null; //config.json['territories']
    Territory.COLOR.BORDER      = 'black';
    Territory.COLOR.HOVER       = 'red';
    // Set buffer for Territory Class
    Territory.BUFFER = this.layers['buffer'];
  }
}

export default Game;


