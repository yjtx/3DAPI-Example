class LoaderEvent3D {
    constructor() {

        var loader: egret3d.URLLoader = new egret3d.URLLoader();
        //加载完成后.在内部会将其处理成ImageTexture贴图格式
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoadComplete, this);
        //注册加载进度事件
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_PROGRESS, this.onLoadProgress, this);
        //注册加载失败事件
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_ERROR, this.onLoadError, this);
        //加载一个png图片.
        loader.load("resource/img.png");

    }

    private onLoadComplete(e: egret3d.LoaderEvent3D) {
        var imgTexture: egret3d.ImageTexture = e.loader.data;
        console.log(imgTexture.width, imgTexture.height);
    }

    private onLoadProgress(e: egret3d.LoaderEvent3D) {
        console.log(e.currentProgress);
    }

    private onLoadError(e: egret3d.LoaderEvent3D) {
        console.log("loader error");
    }
}

