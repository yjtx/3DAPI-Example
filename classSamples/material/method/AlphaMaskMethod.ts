class AlphaMaskMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var maskmapMethod: egret3d.AlphaMaskMethod = new egret3d.AlphaMaskMethod();
        this._material.diffusePass.addMethod(maskmapMethod);
        maskmapMethod.maskTexture = egret3d.CheckerboardTexture.texture;
    }
}
