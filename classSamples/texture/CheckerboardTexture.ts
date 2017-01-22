class CheckerboardTexture {
    public view: egret3d.View3D;
    constructor() {

        this.view = new egret3d.View3D(0, 0, 1024, 768);


        var mesh0: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());
        // 新创建一张棋盘格贴图
        mesh0.material.diffuseTexture = new egret3d.CheckerboardTexture();
        this.view.addChild3D(mesh0);

        var mesh1: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());
        // 使用公用的一张棋盘格贴图
        mesh1.material.diffuseTexture = egret3d.CheckerboardTexture.texture;
        this.view.addChild3D(mesh1);
    }
}  