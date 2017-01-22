class Matrix4_4 {
    constructor() {

        var m44: egret3d.Matrix4_4 = new egret3d.Matrix4_4();

        m44.identity();
        m44.appendRotation(60, egret3d.Vector3D.X_AXIS);
        m44.append(m44);

        var vector:egret3d.Vector3D[] = m44.decompose(egret3d.Orientation3D.EULER_ANGLES);

        var position: egret3d.Vector3D = new egret3d.Vector3D(100, 0, 0);
        var scale: egret3d.Vector3D = new egret3d.Vector3D(1, 1, 0.5);
        var rot: egret3d.Quaternion = new egret3d.Quaternion();
        rot.fromEulerAngles(40, 0, 10);

        m44.makeTransform(position, scale, rot);
    }



}