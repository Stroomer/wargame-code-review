import './../css/style.css';
import Game from './Game.js';
import utils from './utils.js';

const game = new Game({
    json:   { 'territories' : await utils.getJSON('/src/assets/json/territories.json') },
    images: { 'area'        : await utils.getPNG('/src/assets/images/territories/area.png'),
              'border'      : await utils.getPNG('/src/assets/images/territories/border.png'),
              'selected'    : await utils.getPNG('/src/assets/images/territories/selected.png'),
              'font_5x7'    : await utils.getPNG('/src/assets/images/fonts/pixel_font_5x7.png'),
              'font_10x14'  : await utils.getPNG('/src/assets/images/fonts/pixel_font_10x14.png'), },
    layers: { 'map-static'  : await utils.getCanvas('.layer-map-static'),
              'map-dynamic' : await utils.getCanvas('.layer-map-dynamic'), 
              'ui-static'   : await utils.getCanvas('.layer-ui-static'),
              'ui-dynamic'  : await utils.getCanvas('.layer-ui-dynamic'),
              'buffer'      : await utils.getCanvas('.layer-buffer') },          
});

game.init();

export default game;
