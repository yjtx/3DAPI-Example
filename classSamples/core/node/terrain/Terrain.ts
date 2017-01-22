class Terrain {
    public queueLoader: egret3d.QueueLoader;
    public view: egret3d.View3D;
    protected onInit3D(): void {
        this.view = new egret3d.View3D(0, 0, 1024, 768);

        this.queueLoader = new egret3d.QueueLoader();
        this.queueLoader.load("res/heightmap.png");
        this.queueLoader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onComplete, this);
    }

    protected onComplete(e: egret3d.LoaderEvent3D) {

        var heightmap: egret3d.ImageTexture = this.queueLoader.getAsset("res/heightmap.png");
        var terrain: egret3d.Terrain = new egret3d.Terrain(heightmap, 1000, 100, 1000, 128, 128);
        this.view.addChild3D(terrain);

    }
}