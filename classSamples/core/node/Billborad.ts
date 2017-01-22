class Billborad {

    protected _time: number = 0;
    protected _delay: number = 0;
    protected _timeDate: Date = null;
    protected _view3D: egret3d.View3D = null;
    protected _viewPort: egret3d.Rectangle = null;
    protected _cameraCtl: egret3d.LookAtController = null;
    protected _billborad: egret3d.Billboard = null;


    protected onInit3D(): void {


        //创建像机控制器;
        this._cameraCtl = new egret3d.LookAtController(this._view3D.camera3D, new egret3d.Object3D());
        //创建一个CubeGeometry给Mesh，默认TextureMaterial为棋盘格;
        this._billborad = new egret3d.Billboard(new egret3d.TextureMaterial());

        //将_mesh添加到渲染容器内;
        this._view3D.addChild3D(this._billborad);

    }
}