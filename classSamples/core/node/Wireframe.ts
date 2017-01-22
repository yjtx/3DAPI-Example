class Wireframe {
    protected _view3D: egret3d.View3D = null;
    protected _wireframe: egret3d.Wireframe = null;

    protected onInit3D(): void {

        var geometry: egret3d.CubeGeometry = null;
        var vf: number = egret3d.VertexFormat.VF_POSITION | egret3d.VertexFormat.VF_COLOR | egret3d.VertexFormat.VF_UV0;
        this._wireframe = new egret3d.Wireframe(geometry, vf);

        //将_wireframe添加到渲染容器内;
        this._view3D.addChild3D(this._wireframe);
    }
}