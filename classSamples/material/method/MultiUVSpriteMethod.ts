class MultiUVSpriteMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.MultiUVSpriteMethod = new egret3d.MultiUVSpriteMethod(4, 4, 16, true);
        this._material.diffusePass.addMethod(method);
      
    }
}
