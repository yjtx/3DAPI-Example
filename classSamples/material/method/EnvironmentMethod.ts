class EnvironmentMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.EnvironmentMethod = new egret3d.EnvironmentMethod();
        this._material.diffusePass.addMethod(method);
        method.environmentTexture = egret3d.CheckerboardTexture.texture;
        method.reflect = 0.5;
    }
}
