class Game {
  constructor(config) {
    this.element = config.element;
    this.countries = config.countries;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    console.log("Hello from the Wargame object", this);

    const image = new Image();
    image.onload = () => {
      for (let i = 0; i < this.countries.length; i++) {
        const { name, src, dest } = this.countries[i];
        this.ctx.drawImage(
          image,
          src.x,
          src.y,
          src.w,
          src.h,
          dest.x,
          dest.y,
          dest.w,
          dest.h
        );
      }
    };
    image.src = "/src/assets/images/countries/countries.png";
  }
}

export default Game;
