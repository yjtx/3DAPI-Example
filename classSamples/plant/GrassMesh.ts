class GrassMesh {
    protected _grass: egret3d.GrassMesh;
    protected _view: egret3d.View3D;
    protected onInit3D(): void {

        var mat: egret3d.TextureMaterial = new egret3d.TextureMaterial();
        mat.ambientColor = 0xffffff;
        mat.blendMode = egret3d.BlendMode.NORMAL;
        mat.cutAlpha = 0.4;

        var data: egret3d.GrassData = new egret3d.GrassData();
        data.minWidth = 30;
        data.maxWidth = 70;
        data.minHeight = 30;
        data.maxHeight = 70;
        data.noiseSpread = 1;
        data.billboard = false;
        data.healthyColor = "0x00ff00";
        data.dryColor = "0xff8000";

        var positions = [];
        this._grass = new egret3d.GrassMesh(positions, mat, data);
        this._grass.y = 20;
        this._view.addChild3D(this._grass);


    }
}
