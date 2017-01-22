class Texture {
    constructor() {
        var loader: egret3d.QueueLoader = new egret3d.QueueLoader("resource/test.dds");
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderComplete, this);
    }

    protected onLoaderComplete(e: egret3d.LoaderEvent3D) {

        // 所有资源 加载完成
        var texture: egret3d.Texture = e.loader.data;
    }
}     