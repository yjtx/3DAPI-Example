class WaterWaveMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.WaterWaveMethod = new egret3d.WaterWaveMethod();
        this._material.diffusePass.addMethod(method);

        method.deepWaterColor = 0xff00ff00;
        method.shallowWaterColor = 0xff00ff00;
        method.waveTexture = egret3d.CheckerboardTexture.texture;
        method.start();
    }
}
