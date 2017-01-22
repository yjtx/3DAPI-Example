class Bound {

    protected _geometry: egret3d.Geometry;
    protected _bound: egret3d.Bound;

    constructor() {
        this._geometry = new egret3d.CubeGeometry(100, 100, 100);
        var mesh: egret3d.Mesh = new egret3d.Mesh(this._geometry);
        this._bound = new egret3d.Bound(mesh);
        this._bound.indexData = this._geometry.indexArray;
        this._bound.vexData = this._geometry.vertexArray;
        this._bound.vexLength = this._geometry.indexArray.length / 3;
    }
}