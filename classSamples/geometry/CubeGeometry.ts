class CubeGeometry {

    protected _view3D: egret3d.View3D = new egret3d.View3D(0, 0, 960, 640);
  

    protected onInit3D(): void {

        var _cube = new egret3d.Mesh(new egret3d.CubeGeometry(20, 20, 20), new egret3d.TextureMaterial());
        var _plane = new egret3d.Mesh(new egret3d.PlaneGeometry(), new egret3d.TextureMaterial());
        var _cylinder = new egret3d.Mesh(new egret3d.CylinderGeometry(), new egret3d.TextureMaterial());
        var _sphere = new egret3d.Mesh(new egret3d.SphereGeometry(), new egret3d.TextureMaterial());

         
        var img = new HTMLImageElement();
        var tex = new egret3d.ImageTexture(img);
        var _elevation = new egret3d.Mesh(new egret3d.ElevationGeometry(tex), new egret3d.TextureMaterial());

        
        

        this._view3D.addChild3D(_cube);
        this._view3D.addChild3D(_plane);
        this._view3D.addChild3D(_cylinder);
        this._view3D.addChild3D(_elevation);
        this._view3D.addChild3D(_sphere);
    }
}