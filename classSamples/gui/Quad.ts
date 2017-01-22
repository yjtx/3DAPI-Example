class Quad {
    protected _view: egret3d.View3D;
    protected _quad: egret3d.Quad;

    protected onInit3D(): void {

        var texture: egret3d.ITexture = null;
        this._quad = new egret3d.Quad();
        this._quad.texture = texture;
        this._view.addGUI(this._quad);

    }
}
