class PickEvent3D {
    constructor() {

        var object3D: egret3d.Object3D = new egret3d.Object3D();

        object3D.addEventListener(egret3d.PickEvent3D.PICK_CLICK, this.OnPickClick, this);

        object3D.addEventListener(egret3d.PickEvent3D.PICK_DOWN, this.OnPickDown, this);

        object3D.addEventListener(egret3d.PickEvent3D.PICK_UP, this.OnPickUp, this);

        object3D.addEventListener(egret3d.PickEvent3D.PICK_MOVE, this.OnPickMove, this);

        object3D.addEventListener(egret3d.PickEvent3D.PICK_WHEEL, this.OnPickWheel, this);
    }

    /**
    * @language zh_CN
    * 点击拣选事件
    * @param e: egret3d.PickEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnPickClick(e: egret3d.PickEvent3D) {
    }

    /**
   * @language zh_CN
   * 按下拣选事件
   * @param e: egret3d.PickEvent3D 按键事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnPickDown(e: egret3d.PickEvent3D) {
    }

    /**
    * @language zh_CN
    * 抬起拣选事件
    * @param e: egret3d.PickEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnPickUp(e: egret3d.PickEvent3D) {
    }

    /**
    * @language zh_CN
    * 移动拣选事件
    * @param e: egret3d.PickEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnPickMove(e: egret3d.PickEvent3D) {
    }

    /**
    * @language zh_CN
    * 滚轮拣选事件
    * @param e: egret3d.PickEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnPickWheel(e: egret3d.PickEvent3D) {
    }

}

