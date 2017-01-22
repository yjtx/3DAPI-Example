class Color {

    protected _color: egret3d.Color;

    constructor() {
        this._color = egret3d.Color.createColor(0xff00ff00);
        this._color.setColorARGB(0xff00ff00);
        this._color.setColorRGB(0xff00ff);

        var value:number = this._color.getColor(egret3d.ContextConfig.ColorFormat_RGBA8888);

    }

}