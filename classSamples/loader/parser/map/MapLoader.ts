class MapLoader {

    protected _view3D: egret3d.View3D = null;
    protected _mapLoader: egret3d.MapLoader;

    protected onInit3D(): void {
        this._mapLoader = new egret3d.MapLoader("main");
        this._view3D.addChild3D(this._mapLoader.container);
    }

    //加载完毕后，所有的mesh创建完毕会添加到loader的container中
    private onMapLoaded(e: egret3d.LoaderEvent3D): void {
        console.log("loading ok");
    }
}
