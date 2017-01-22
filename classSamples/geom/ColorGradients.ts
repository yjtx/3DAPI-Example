class ColorGradients {

    protected _gradients: egret3d.ColorGradients;

    constructor() {
        this._gradients = new egret3d.ColorGradients();

        var color: egret3d.Color;
        
        color = this.createColor(0xff00);
        this._gradients.colors.push(color);
        this._gradients.times.push(0);

        color = this.createColor(0xffff);
        this._gradients.colors.push(color);
        this._gradients.times.push(0.25);

        color = this.createColor(0xffff00);
        this._gradients.colors.push(color);
        this._gradients.times.push(0.5);

        color = this.createColor(0xff00ff);
        this._gradients.colors.push(color);
        this._gradients.times.push(1);

    }

    private createColor(value: number): egret3d.Color {
        return egret3d.Color.createColor(value);
    }

}