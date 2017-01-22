class UnitLoader {
    constructor() {

        // * 加载完成之后对应的数据类型
        // * * json xml text 普通的文件                    ----- string
        // * * json 由unity3d插件导出文件                  ----- Object3D
        // * * png jpg                                     ----- ImageTexture
        // * * dds hdr tga                                 ----- Texture
        // * * esm----- Geometry
        // * * eam----- SkeletonAnimationClip
        // * * epa----- PropertyAnim
        
        var loader: egret3d.UnitLoader = new egret3d.UnitLoader("resource/MapConfig.json");
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderComplete, this);


        var loader1: egret3d.UnitLoader = new egret3d.UnitLoader("resource/test.png");
        loader1.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderCompleteTexture, this);
    }

    protected onLoaderComplete(e: egret3d.LoaderEvent3D) {

        // 加载完成后才能使用数据
        e.loader.data;
    }

    protected onLoaderCompleteTexture(e: egret3d.LoaderEvent3D) {

        // 加载完成后才能使用数据
        var img:egret3d.ImageTexture = e.loader.data;
    }
}