import Game from './Game.js';

const wargame = new Game({
    element: document.querySelector('.game-container')
});

wargame.init();

export default wargame;