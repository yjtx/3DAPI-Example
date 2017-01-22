class WireframeLine {
    protected _view3D: egret3d.View3D = null;
    protected _wireframeLine: egret3d.WireframeLine = null;

    protected onInit3D(): void {

        var geometry: egret3d.CubeGeometry;
        var startPos: egret3d.Vector3D;
        var endPos: egret3d.Vector3D;

        this._wireframeLine = new egret3d.WireframeLine(startPos, endPos, 0, 0);
        this._wireframeLine.setStartAndEndColor(0xff00ff00, 0xffff00ff);
        //将_wireframeLine添加到渲染容器内;
        this._view3D.addChild3D(this._wireframeLine);
    }
}