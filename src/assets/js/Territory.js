import Sprite from './Sprite.js';

class Territory {
  constructor(config) {
    this.name   = config.data.name  || 'untitled';
    this.sprite = new Sprite(config);
  }

  init() {
    
  }
}

export default Territory;
