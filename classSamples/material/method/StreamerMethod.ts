class StreamerMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.StreamerMethod = new egret3d.StreamerMethod();
        this._material.diffusePass.addMethod(method);
        method.speedU = 0.0001;
        method.speedV = 0.00005;
        method.steamerTexture = egret3d.CheckerboardTexture.texture;

        method.start();

    }
}
