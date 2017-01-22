class WaterBumpMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.WaterBumpMethod = new egret3d.WaterBumpMethod();
        this._material.diffusePass.addMethod(method);

        method.setUvSpeed(0, 0.001, 0.004);
        method.bumpTexture = egret3d.CheckerboardTexture.texture;
        method.colorTexture = egret3d.CheckerboardTexture.texture;
        method.start();
    }
}
