class Mesh {
    protected _view3D: egret3d.View3D = null;
    protected _mesh: egret3d.Mesh = null;

    protected onInit3D(): void {

        //创建一个CubeGeometry给Mesh，默认TextureMaterial为棋盘格;
        this._mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());

        //将_mesh添加到渲染容器内;
        this._view3D.addChild3D(this._mesh);
    }
}