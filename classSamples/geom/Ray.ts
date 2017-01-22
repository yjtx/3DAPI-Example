class Ray {

    protected _ray: egret3d.Ray;

    constructor() {
        var origin: egret3d.Vector3D = new egret3d.Vector3D(0, 40, 20);
        var dir: egret3d.Vector3D = new egret3d.Vector3D(10, 50, 0);
        this._ray = new egret3d.Ray(origin, dir);

        var pt0: egret3d.Vector3D = new egret3d.Vector3D(0, 40, 20);
        var pt1: egret3d.Vector3D = new egret3d.Vector3D(-10, 40, 50);
        var pt2: egret3d.Vector3D = new egret3d.Vector3D(80, 30, -20);

        //计算一条射线和一个三角形是否有交点
        var crossed:boolean = this._ray.IntersectTriangle(pt0, pt1, pt2);
    }



}