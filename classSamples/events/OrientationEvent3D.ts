class OrientationEvent3D {

    constructor() {


        egret3d.Input.addEventListener(egret3d.OrientationEvent3D.ORIENTATION_CHANGE, this.OnOrientationChange, this);

        egret3d.Input.addEventListener(egret3d.OrientationEvent3D.DEVICE_MOTION, this.OnOrientationMotion, this);

        egret3d.Input.addEventListener(egret3d.OrientationEvent3D.DEVICE_ORIENTATION, this.OnDeviceOrientation, this);

    }

    /**
    * @language zh_CN
    * 用户水平或者垂直翻转设备（即方向发生变化）时触发的事件
    * @param e: egret3d.OrientationEvent3D 陀螺仪事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnOrientationChange(e: egret3d.OrientationEvent3D) {
    }


    /**
   * @language zh_CN
   * 用户加速晃动或者加速旋转设备（即速度发生变化）时触发的事件
   * @param e: egret3d.OrientationEvent3D 陀螺仪事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnOrientationMotion(e: egret3d.OrientationEvent3D) {
    }


    /**
   * @language zh_CN
   * 用户改变旋转重力方向时触发的事件
   * @param e: egret3d.OrientationEvent3D 陀螺仪事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnDeviceOrientation(e: egret3d.OrientationEvent3D) {
    }

    
}

