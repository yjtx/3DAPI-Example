class DisplayObject {
    protected _view: egret3d.View3D;
    protected _quad: egret3d.Quad;
    private _container: egret3d.DisplayObject;
    protected onInit3D(): void {

        var texture: egret3d.ITexture = null;
        this._container = new egret3d.DisplayObject();
        this._quad = new egret3d.Quad();
        this._quad.texture = texture;

        //添加容器到舞台
        this._view.addGUI(this._container);
        //将quad添加至container节点
        this._container.addChild(this._quad);

        this._quad.color = 0x00ff00;
        this._quad.mouseEnable = true;
        this._quad.alpha = 0.5;
        this._quad.x = 20;
        this._quad.y = 40;
        this._quad.visible = true;

    }
}
