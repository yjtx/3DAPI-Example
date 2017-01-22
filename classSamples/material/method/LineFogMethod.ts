class LineFogMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.LineFogMethod = new egret3d.LineFogMethod();
        this._material.diffusePass.addMethod(method);

        method.fogAlpha = 0.5;
        method.fogColor = 0xff00ff;
        method.fogStartDistance = 500;
       
    }
}
