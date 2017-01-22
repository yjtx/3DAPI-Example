class EgretMapLoader {

    protected _view3D: egret3d.View3D = null;
    protected _loader: egret3d.MapLoader;

    protected onInit3D(): void {
        this._loader = new egret3d.MapLoader("resource/scene.json");
        this._loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onMapLoaded, this);
        this._view3D.addChild3D(this._loader.container);
    }

    //加载完毕后，所有的mesh创建完毕会添加到loader的container中
    private onMapLoaded(e: egret3d.LoaderEvent3D): void {
        this._loader.removeEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onMapLoaded, this);
    }
}
