class Camera3D {

    protected _camera3D: egret3d.Camera3D = null;
    protected _view: egret3d.View3D;
    protected onInit3D(): void {

        //创建Camera3D对象 透视
        this._camera3D = new egret3d.Camera3D(egret3d.CameraType.perspective);
        this._view.camera3D = this._camera3D;

        //创建Camera3D对象 正交
        this._camera3D = new egret3d.Camera3D(egret3d.CameraType.orthogonal);
        this._view.camera3D = this._camera3D;
        // 更新正交相机数据
        this._camera3D.updateViewport(0, 0, 200, 200);
    }
}