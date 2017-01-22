class BoundBox {

    protected _geometry: egret3d.CubeGeometry;
    protected _bound: egret3d.BoundBox;

    constructor() {
        this._geometry = new egret3d.CubeGeometry(100, 100, 100);
        var mesh: egret3d.Mesh = new egret3d.Mesh(this._geometry);
        this._bound = this.buildBoundBox(mesh);
    }

    protected buildBoundBox(mesh: egret3d.Mesh): egret3d.BoundBox {

        var bound: egret3d.BoundBox = new egret3d.BoundBox(mesh);
        if (this._geometry && this._geometry.vertexArray) {
            bound.min.copyFrom(new egret3d.Vector3D(egret3d.MathUtil.MAX_VALUE, egret3d.MathUtil.MAX_VALUE, egret3d.MathUtil.MAX_VALUE));
            bound.max.copyFrom(new egret3d.Vector3D(-egret3d.MathUtil.MAX_VALUE, -egret3d.MathUtil.MAX_VALUE, -egret3d.MathUtil.MAX_VALUE));
            for (var i: number = 0; i < this._geometry.vertexArray.length; i += this._geometry.vertexAttLength) {
                if (bound.max.x < this._geometry.vertexArray[i]) {
                    bound.max.x = this._geometry.vertexArray[i];
                }
                if (bound.max.y < this._geometry.vertexArray[i + 1]) {
                    bound.max.y = this._geometry.vertexArray[i + 1];
                }
                if (bound.max.z < this._geometry.vertexArray[i + 2]) {
                    bound.max.z = this._geometry.vertexArray[i + 2];
                }

                if (bound.min.x > this._geometry.vertexArray[i]) {
                    bound.min.x = this._geometry.vertexArray[i];
                }
                if (bound.min.y > this._geometry.vertexArray[i + 1]) {
                    bound.min.y = this._geometry.vertexArray[i + 1];
                }
                if (bound.min.z > this._geometry.vertexArray[i + 2]) {
                    bound.min.z = this._geometry.vertexArray[i + 2];
                }
            }
        }


        bound.fillBox(bound.min, bound.max);
        bound.createChild();

        return bound;
    }
}