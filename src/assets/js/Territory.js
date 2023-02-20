import Sprite from './Sprite.js';

class Territory {
  constructor(config) {
    const { id, data } = config;
    
    this.id     = id;
    this.name   = data.name;
    this.sprite = new Sprite({ id, ...config});
  }

  init() {
    
  }
}

export default Territory;
