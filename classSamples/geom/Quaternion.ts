class Quaternion {

    protected _quat: egret3d.Quaternion;

    constructor() {
        this._quat = new egret3d.Quaternion();
        this._quat.fromEulerAngles(60, 10, 0);
        //将当前四元素转化成矩阵
        var matrix:egret3d.Matrix4_4 = this._quat.toMatrix3D();
        //使用这个四元素，转换一个位置点
        var pos: egret3d.Vector3D = new egret3d.Vector3D(100, 40, 0);
        this._quat.transformVector(pos, pos);


        //在两个四元素之间插值
        var quat1: egret3d.Quaternion = new egret3d.Quaternion();
        var quat2: egret3d.Quaternion = new egret3d.Quaternion();
        quat1.fromEulerAngles(60, 10, 0);
        quat2.fromEulerAngles(10, 60, 0);
        this._quat.lerp(quat1, quat2, 0.5);


    }



}