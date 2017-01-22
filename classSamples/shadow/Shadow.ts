class Shadow {
    public view: egret3d.View3D;
    constructor() {

        this.view = new egret3d.View3D(0, 0, 1024, 768);

        var plane: egret3d.Mesh = new egret3d.Mesh(new egret3d.PlaneGeometry(1000, 1000), new egret3d.TextureMaterial());

        plane.material.acceptShadow = true;

        this.view.addChild3D(plane);
     
        var mesh: egret3d.Mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());

        mesh.material.castShadow = true;
        mesh.material.acceptShadow = true;

        this.view.addChild3D(mesh);

    }
} 