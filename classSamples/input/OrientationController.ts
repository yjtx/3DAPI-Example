class OrientationController {
    public view: egret3d.View3D;
    public oriCtl: egret3d.OrientationController;
    constructor() {
        this.view = new egret3d.View3D(0, 0, 1024, 768);
        this.oriCtl = new egret3d.OrientationController();
        this.oriCtl.start();
    }

    public onUpdate() {
        this.oriCtl.update(this.view);
    }
}