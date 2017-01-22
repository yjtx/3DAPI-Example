class MulUVRollMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.MulUVRollMethod = new egret3d.MulUVRollMethod();
        this._material.diffusePass.addMethod(method);
        method.setSpeedU(0, 0.001);
        method.setSpeedV(0, 0.001);
        method.diffuseTexture1 = egret3d.CheckerboardTexture.texture;

    }
}
