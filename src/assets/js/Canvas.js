class Canvas
{
    constructor(config)
    {   
        const bool = config.canvas.className==='layer-map-static' ? true : false;

        this.canvas = config.canvas;
        this.ctx    = config.canvas.getContext('2d', { willReadFrequently: bool });     // bool casting to a string??? wtf???

        // console.log( this.ctx.getContextAttributes() );
    }
}

Canvas.BUFFER    = null;
Canvas.MAP       = { STATIC:null, DYNAMIC:null };
Canvas.UI        = { STATIC:null, DYNAMIC:null };
Canvas.TOP_LAYER = null;


export default Canvas;