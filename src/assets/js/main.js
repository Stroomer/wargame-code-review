import "./../css/style.css";
import Game from "./Game.js";


const game = new Game({
  element: document.querySelector(".game-container")
});

game.init();

export default game;
