class Plane3D {

    protected _plane3D: egret3d.Plane3D;

    constructor() {
        this._plane3D = new egret3d.Plane3D();

        var pt0: egret3d.Vector3D = new egret3d.Vector3D(0, 0, 0);
        var pt1: egret3d.Vector3D = new egret3d.Vector3D(100, 0, 0);
        var pt2: egret3d.Vector3D = new egret3d.Vector3D(100, 100, 0);

        this._plane3D.fromPoints(pt0, pt1, pt2);
        this._plane3D.normalize();

        var otherPt: egret3d.Vector3D = new egret3d.Vector3D(400, 200, -10);
        // 获得点到这个平面的距离
        var distance:number = this._plane3D.distance(otherPt);
    }



}