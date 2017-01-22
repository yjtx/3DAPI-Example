class TerrainARGBMethod {
    protected _material: egret3d.TextureMaterial;

    protected controlTex: egret3d.ITexture;
    protected splat_0: egret3d.ITexture;
    protected splat_1: egret3d.ITexture;
    protected splat_2: egret3d.ITexture;
    protected splat_3: egret3d.ITexture;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.TerrainARGBMethod =
            new egret3d.TerrainARGBMethod(this.controlTex, this.splat_0, this.splat_1, this.splat_2, this.splat_3);

        method.setUVTitling(0, 1, 2);


    }
}
