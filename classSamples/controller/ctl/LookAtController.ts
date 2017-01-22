class LookAtController {

    protected _view3D: egret3d.View3D = null;
    protected _cameraCtl: egret3d.LookAtController = null;

    protected onInit3D(): void {

        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());
        this._cameraCtl.distance = 1000;
    }

    protected onUpdate(): void {

        this._cameraCtl.update();
    }
}