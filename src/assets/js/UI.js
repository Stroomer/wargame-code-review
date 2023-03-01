import Canvas from './Canvas.js';
import TextSprite from './TextSprite.js';

class UI 
{
    constructor()
    {
        console.log('ui');

        this.hoverTerritoryText = new TextSprite({ x : Canvas.UI.DYNAMIC.canvas.width/2, 
                                                   y : Canvas.UI.DYNAMIC.canvas.height-100, 
                                                text : 'northwest territory',
                                               align : TextSprite.ALIGN.CENTER,
                                              valign : TextSprite.VALIGN.BOTTOM });
        this.hoverTerritoryText.init();
    }

    init() 
    {
        
    }

    onTerritoryHover(event)
    {
        console.log('territory hover detected!');
        const index = event.detail.index;
        this.hoverTerritoryText.setText("alberta"); 
    }
}

export default UI;