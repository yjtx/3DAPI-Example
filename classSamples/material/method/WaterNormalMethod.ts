class WaterNormalMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.WaterNormalMethod = new egret3d.WaterNormalMethod();
        this._material.diffusePass.addMethod(method);

        method.setUvSpeed(0, 0.001, 0.004);
        method.setUvScale(0.5, 1);
        method.normalTextureA = egret3d.CheckerboardTexture.texture;
        method.normalTextureB = egret3d.CheckerboardTexture.texture;
        method.start();
    }
}
