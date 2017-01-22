class VideoTexture {
    public view: egret3d.View3D;
    constructor() {
        this.view = new egret3d.View3D(0, 0, 1024, 768);
        var vi: egret3d.VideoTexture = new egret3d.VideoTexture();
        vi.source = "resource/video/Comp.mp4";
        vi.play();
        var plane: egret3d.Mesh = new egret3d.Mesh(new egret3d.PlaneGeometry(200, 200), new egret3d.TextureMaterial(vi));
        this.view.addChild3D(plane);
    }
}      