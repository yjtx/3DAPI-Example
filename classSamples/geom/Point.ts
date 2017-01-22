class Point {

    protected _point: egret3d.Point;

    constructor() {
        this._point = new egret3d.Point(0, 0);
        var pt1: egret3d.Point = new egret3d.Point(100, 0);
        var pt2: egret3d.Point = new egret3d.Point(100, 100);

        pt1.add(this._point);
        this._point.copyFrom(pt1);

        var samePoint: boolean = this._point.equals(pt1);

        this._point.offset(10, 10);
        this._point.normalize(100);

        var distance:number = this._point.length;
    }



}