class UVSpriteSheetMethod {
    protected _material: egret3d.TextureMaterial;
    private frameNum: number = 16;
    private row: number = 4;
    private col: number = 4;
    private numTime: number = 1000;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.UVSpriteSheetMethod = new egret3d.UVSpriteSheetMethod(this.frameNum, this.row, this.col, this.numTime);
        this._material.diffusePass.addMethod(method);
        method.isLoop = true;
        method.delayTime = 0;
        method.start();

    }
}
