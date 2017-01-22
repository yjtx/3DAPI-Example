class GrassMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var data: egret3d.GrassData = new egret3d.GrassData();
        data.minWidth = 30;
        data.maxWidth = 70;
        data.minHeight = 30;
        data.maxHeight = 70;
        data.noiseSpread = 1;
        data.billboard = false;
        data.healthyColor = "0x00ff00";
        data.dryColor = "0xff8000";

        var grassMethod: egret3d.GrassMethod = new egret3d.GrassMethod(data);
        grassMethod.start();
        this._material.diffusePass.addMethod(grassMethod);

    }
}
