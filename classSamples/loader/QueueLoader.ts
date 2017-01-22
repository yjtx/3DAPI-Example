class QueueLoader {

    // 队列形式加载资源
    constructor() {

        // * 加载完成之后对应的数据类型
        // * * json xml text 普通的文件                    ----- string
        // * * json 由unity3d插件导出文件                  ----- Scene3D Role EffectGroup
        // * * png jpg                                     ----- ImageTexture
        // * * dds hdr tga                                 ----- Texture
        // * * esm----- Geometry
        // * * eam----- SkeletonAnimationClip
        // * * epa----- PropertyAnim

        var loader: egret3d.QueueLoader = new egret3d.QueueLoader();

        var unitList: egret3d.UnitLoader[] = [];


        unitList.push(loader.load("resource/MapConfig.json"));
        unitList.push(loader.load("resource/test.esm"));
        unitList.push(loader.load("resource/test1.png"));
        unitList.push(loader.load("resource/test2.jpg"));

        unitList.push(loader.load("resource/test3.eam"));
        unitList.push(loader.load("resource/test4.epa"));

        for (var i: number = 0; i < unitList.length; ++i) {
            unitList[i].addEventListener(egret3d.LoaderEvent3D.LOADER_PROGRESS, this.onOnceProgress, this);
        }

        // 加载4个资源 

        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderComplete, this);

        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_PROGRESS, this.onLoaderProgress, this);
    }

    protected onLoaderComplete(e: egret3d.LoaderEvent3D) {
        // 所有资源 加载完成

        var loader: egret3d.QueueLoader = e.target;
        var scene: Scene3D = loader.getAsset("resource/MapConfig.json");
        var geo: egret3d.Geometry = loader.getAsset("resource/test.esm");

        var texture0: egret3d.ITexture = loader.getAsset("resource/test1.png");
        var texture1: egret3d.ITexture = loader.getAsset("resource/test2.jpg");


        var clip: egret3d.SkeletonAnimationClip = loader.getAsset("resource/test3.eam");
        var proAnim: egret3d.PropertyAnim = loader.getAsset("resource/test4.epa");
    }

    protected onLoaderProgress(e: egret3d.LoaderEvent3D) {

        // 整个加载文件组的进度
        e.currentProgress;
        // 其中一个资源 加载完成
    }

    protected onOnceProgress(e: egret3d.LoaderEvent3D) {
        // 某个加载文件的进度
        e.currentProgress;
    }
}