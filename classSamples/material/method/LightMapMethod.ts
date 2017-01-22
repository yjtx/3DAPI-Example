class LightMapMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.LightmapMethod = new egret3d.LightmapMethod(false);
        this._material.diffusePass.addMethod(method);
        method.lightTexture = egret3d.CheckerboardTexture.texture;
       
    }
}
