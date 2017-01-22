class Scene3D {
    public view: egret3d.View3D;
    constructor() {

        this.view = new egret3d.View3D(0, 0, 1024, 768);
       
        // 创建一个场景中摄像机
        var camrea: egret3d.Camera3D = new egret3d.Camera3D();

        // 创建一个场景 
        var scene: egret3d.Scene3D = new egret3d.Scene3D();

        // 把摄像机加入场景 
        scene.addChild(camrea);

        // 设置 摄像机 (0, 0, -100)的位置 看向 (0, 0, 0)位置 
        camrea.lookAt(new egret3d.Vector3D(0, 0, -100), new egret3d.Vector3D(0, 0, 0));

        // 设置场景中的节点为scene
        this.view.scene = scene;
        this.view.camera3D = camrea;
        this.view.scene.addChild(this.view.camera3D);
    }
}