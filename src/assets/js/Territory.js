import Sprite from './Sprite.js';

class Territory {
  constructor(config) {
    this.name   = config.data.name  || 'untitled';
    this.sprite = new Sprite(config);

    console.log('territory '+this.name);
  }

  init() {
    
  }
}

export default Territory;
