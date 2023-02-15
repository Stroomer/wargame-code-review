import Game from "./Game.js";

const wargame = new Game({
  element: document.querySelector(".game-container"),
  countries: await fetch("/src/assets/json/countries.json")
    .then((data) => data.json())
    .then((data) => {
      return data.countries;
    }),
});

wargame.init();

export default wargame;
