class AOMapMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        //注：AOMapMethod使用到了另外一个uv数据，该数据为第三方软件中预渲染好的。
        this._material = new egret3d.TextureMaterial();
        var maskmapMethod: egret3d.AOMapMethod = new egret3d.AOMapMethod();
        this._material.diffusePass.addMethod(maskmapMethod);
        maskmapMethod.lightTexture = egret3d.CheckerboardTexture.texture;
    }
}
