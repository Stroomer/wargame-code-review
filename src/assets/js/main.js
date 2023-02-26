import './../css/style.css';
import Game from './Game.js';
import utils from './utils.js';


const game = new Game(
  {
    element: document.querySelector('.game-container'),
    json:   { 'territories' : await utils.getJSON('/src/assets/json/territories.json') },
    images: { 'area'        : await utils.getPNG('/src/assets/images/territories/area.png'),
              'border'      : await utils.getPNG('/src/assets/images/territories/border.png'),
              'selected'    : await utils.getPNG('/src/assets/images/territories/selected.png'),
              'font_5x7'    : await utils.getPNG('/src/assets/images/fonts/pixel_font_5x7.png'),
              'font_10x14'  : await utils.getPNG('/src/assets/images/fonts/pixel_font_10x14.png'), },
  }
);

game.init();

export default game;
