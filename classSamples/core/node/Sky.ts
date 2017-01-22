class Sky {

    protected _view3D: egret3d.View3D = null;
    protected _sky: egret3d.Sky = null;

    protected onInit3D(): void {

        //创建一个天空盒子贴图;
        var texture: egret3d.CubeTexture = egret3d.CubeTexture.createCubeTexture(
            <HTMLImageElement>document.getElementById("t1_1"),
            <HTMLImageElement>document.getElementById("t1_2"),
            <HTMLImageElement>document.getElementById("t1_3"),
            <HTMLImageElement>document.getElementById("t1_4"),
            <HTMLImageElement>document.getElementById("t1_5"),
            <HTMLImageElement>document.getElementById("t1_6"));

        this._sky = new egret3d.Sky(new egret3d.CubeGeometry(10000, 10000, 1000), new egret3d.CubeTextureMaterial(texture), this._view3D.camera3D);
    }
}