import Sprite from './Sprite.js';

class Territory {
  constructor(config) {
    const { id, canvas, ctx, json, images } = config;
    const { area, border, selected }        = images; 
    const { name, src, dest }               = json['territories'][id];

    this.id     = id;
    this.canvas = canvas;
    this.ctx    = ctx;
    this.name   = name;
    this.sprite = new Sprite({ src, dest, area, border, selected, canvas, ctx });
  }

  init() {
    
  }
}

export default Territory;
