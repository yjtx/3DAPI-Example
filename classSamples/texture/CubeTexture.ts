class CubeTexture {
    public view: egret3d.View3D;
    public loader: egret3d.QueueLoader;
    constructor() {

        this.view = new egret3d.View3D(0, 0, 1024, 768);


        // 方法1
        var cubeTexture0: egret3d.CubeTexture = egret3d.CubeTexture.createCubeTexture(
            <HTMLImageElement>document.getElementById("f"),
            <HTMLImageElement>document.getElementById("b"),
            <HTMLImageElement>document.getElementById("l"),
            <HTMLImageElement>document.getElementById("r"),
            <HTMLImageElement>document.getElementById("u"),
            <HTMLImageElement>document.getElementById("d")
        );

        // 方法2
        this.loader = new egret3d.QueueLoader();
        this.loader.load("resource/SkyBox/cloudy_noon_FR.png");
        this.loader.load("resource/SkyBox/cloudy_noon_BK.png");
        this.loader.load("resource/SkyBox/cloudy_noon_LF.png");
        this.loader.load("resource/SkyBox/cloudy_noon_RT.png");
        this.loader.load("resource/SkyBox/cloudy_noon_UP.png");
        this.loader.load("resource/SkyBox/cloudy_noon_DN.png");

        this.loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoaderComplete, this);
    }

    private onLoaderComplete(e: egret3d.LoaderEvent3D) {
        var image_front: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_FR.png");
        var image_back: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_BK.png");
        var image_left: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_LF.png");
        var image_right: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_RT.png");
        var image_up: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_UP.png");
        var image_down: egret3d.ITexture = this.loader.getAsset("resource/SkyBox/cloudy_noon_DN.png");

        var cubeTexture1: egret3d.CubeTexture = egret3d.CubeTexture.createCubeTextureByImageTexture(image_front, image_back, image_left, image_right, image_up, image_down);
        // var cubeTexture1: egret3d.CubeTexture = new  egret3d.CubeTexture(image_front.texture2D, image_back.texture2D, image_left.texture2D, image_right.texture2D, image_up.texture2D, image_down.texture2D)
    }
}   