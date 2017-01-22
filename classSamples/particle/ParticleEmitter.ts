class ParticleEmitter {
    protected _data: egret3d.ParticleData;
    protected _view: egret3d.View3D;
    protected _particle: egret3d.ParticleEmitter;

    protected onInit3D(): void {

        this._data = new egret3d.ParticleData();
        var material: egret3d.TextureMaterial = new egret3d.TextureMaterial();
        this._particle = new egret3d.ParticleEmitter(this._data, material);
        this._view.addChild3D(this._particle);

    }
}
