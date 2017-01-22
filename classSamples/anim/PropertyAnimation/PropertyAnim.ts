class PropertyAnim {
    protected _view3D: egret3d.View3D = null;
    protected object3d: egret3d.Object3D = new egret3d.Object3D();
    constructor() {
        var loader: egret3d.UnitLoader = new egret3d.UnitLoader('resource/test.epa');
        // 加载完成后.在内部会将其处理成ImageTexture贴图格式
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoadComplete, this);

        this._view3D.addChild3D(this.object3d);
    }

    private onLoadComplete(e: egret3d.LoaderEvent3D) {

        if (this.object3d.proAnimation) {
            this.object3d.proAnimation = new egret3d.PropertyAnimController();
        }
        this.object3d.proAnimation.propertyAnimController.addPropertyAnim(e.data);

        this.object3d.proAnimation.play();
    }

} 