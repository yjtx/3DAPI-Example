class SkeletonAnimation {
    public queueLoader: egret3d.QueueLoader;
    public view: egret3d.View3D;
    constructor() {
        this.view = new egret3d.View3D(0, 0, 1024, 768);

        // 使用队列加载资源
        this.queueLoader = new egret3d.QueueLoader();

        // 加载模型文件
        this.queueLoader.load("res/role.esm");
        // 加载骨骼动画文件
        this.queueLoader.load("res/idle.eam");
        this.queueLoader.load("res/run.eam");
        // 加载贴图文件
        this.queueLoader.load("res/texture.png");

        // 添加完成事件
        this.queueLoader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onComplete, this);
    }

    protected onComplete(e: egret3d.LoaderEvent3D) {

        var geoe: egret3d.Geometry = this.queueLoader.getAsset("res/role.esm");
        var idleClip: egret3d.SkeletonAnimationClip = this.queueLoader.getAsset("res/idle.eam");
        var runClip: egret3d.SkeletonAnimationClip = this.queueLoader.getAsset("res/run.eam");
        var img: egret3d.ImageTexture = this.queueLoader.getAsset("res/texture.png");
        // 取出所有数据创建Mesh
        var mesh: egret3d.Mesh = new egret3d.Mesh(geoe, new egret3d.TextureMaterial(img));
        // 加载场景 
        this.view.addChild3D(mesh);
    }
}

