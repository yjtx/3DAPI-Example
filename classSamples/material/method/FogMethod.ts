class FogMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.FogMethod = new egret3d.FogMethod();
        this._material.diffusePass.addMethod(method);

        method.fogAlpha = 0.5;
        method.fogColor = 0xff00ff;
        method.fogHeight = 1000;
        method.fogStartDistance = 500;
        method.globalDensity = 1;
       
    }
}
