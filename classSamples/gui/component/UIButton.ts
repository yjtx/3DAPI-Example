class UIButton {
    protected _view: egret3d.View3D;
    protected _button: egret3d.gui.UIButton;

    protected onInit3D(): void {

        var upSkin: egret3d.ITexture = egret3d.textureResMgr.getTexture("btnUpSkin");
        var downSkin: egret3d.ITexture = egret3d.textureResMgr.getTexture("btnDownSkin");
        this._button = new egret3d.gui.UIButton();
        this._button.x = 0;
        this._button.y = 0;
        this._button.width = 50;
        this._button.height = 20;
        this._button.setStyle("up", upSkin);
        this._button.setStyle("down", downSkin);
        this._view.addGUI(this._button);


    }
}
