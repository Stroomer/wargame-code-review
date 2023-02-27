class Layer
{
    constructor(config)
    {   
        this.canvas = config.canvas;
        this.ctx    = config.canvas.getContext('2d');
    }  
}

export default Layer;