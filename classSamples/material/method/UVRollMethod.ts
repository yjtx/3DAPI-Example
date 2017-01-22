class UVRollMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.UVRollMethod = new egret3d.UVRollMethod();
        this._material.diffusePass.addMethod(method);
        method.speedU = 0.0001;
        method.speedV = 0.001;
        method.start();

    }
}
