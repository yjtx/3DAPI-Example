class Vector3D {

    protected _vector3D: egret3d.Vector3D;

    constructor() {
        var origin: egret3d.Vector3D = new egret3d.Vector3D(0, 40, 20);
        var dir: egret3d.Vector3D = new egret3d.Vector3D(10, 50, 0);
        //自减
        this._vector3D.decrementBy(origin);
        //加法
        this._vector3D.add(origin);
        //缩放到长度为2
        this._vector3D.normalize(2);
        //减法
        this._vector3D = origin.subtract(dir);
        //乘法
        this._vector3D.multiply(origin, dir);
    }



}