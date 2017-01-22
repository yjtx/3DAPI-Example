class ImageTexture {
    constructor() {
        var loader: egret3d.QueueLoader = new egret3d.QueueLoader("resource/test.png");
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderComplete, this);
    }

    protected onLoaderComplete(e: egret3d.LoaderEvent3D) {

        // 所有资源 加载完成
        var img: egret3d.ImageTexture = e.loader.data;
    }
}    