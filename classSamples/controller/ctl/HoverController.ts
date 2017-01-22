class HoverController {

    protected _view3D: egret3d.View3D = null;
    protected _cameraCtl: egret3d.HoverController = null;

    protected onInit3D(): void {

        //创建像机控制器;
        this._cameraCtl = new egret3d.HoverController(this._view3D.camera3D, new egret3d.Object3D(), 90, 0, 1000);
        this._cameraCtl.distance = 100;
    }

    protected onUpdate(): void {

        this._cameraCtl.update();
    }
}