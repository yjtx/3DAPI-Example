class ColorGradientsMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.ColorGradientsMethod = new egret3d.ColorGradientsMethod();
        this._material.diffusePass.addMethod(method);
        var posStart: number = 0;
        var posEnd: number = 10;
        var color: egret3d.Color = new egret3d.Color();
        color.setColorRGB(0xff00ff);

        method.setStartData(posStart, posEnd, color);
       
    }
}
