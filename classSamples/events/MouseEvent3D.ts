class MouseEvent3D {
    constructor() {

        var object3D: egret3d.Object3D = new egret3d.Object3D();

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_CLICK, this.OnMouseClick, this);

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN, this.OnMouseDown, this);

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_UP, this.OnMouseUp, this);

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE, this.OnMouseMove, this);

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_OVER, this.OnMouseOver, this);

        object3D.addEventListener(egret3d.MouseEvent3D.MOUSE_WHEEL, this.OnMouseWheel, this);

    }

    /**
    * @language zh_CN
    * 鼠标点击事件
    * @param e: egret3d.MouseEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnMouseClick(e: egret3d.MouseEvent3D) {
        console.log("OnMouseClick=>" + e.mouseCode);
    }


    /**
   * @language zh_CN
   * 鼠标按下事件
   * @param e: egret3d.MouseEvent3D 按键事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnMouseDown(e: egret3d.MouseEvent3D) {
        console.log("OnMouseDown=>" + e.mouseCode);
    }


    /**
   * @language zh_CN
   * 鼠标抬起事件
   * @param e: egret3d.MouseEvent3D 按键事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnMouseUp(e: egret3d.MouseEvent3D) {
        console.log("OnMouseUp=>" + e.mouseCode);
    }

    /**
    * @language zh_CN
    * 鼠标移动事件
    * @param e: egret3d.MouseEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnMouseMove(e: egret3d.MouseEvent3D) {
        console.log("OnMouseMove=>" + e.mouseCode);
    }


    /**
    * @language zh_CN
    * 鼠标穿越事件
    * @param e: egret3d.MouseEvent3D 事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnMouseOver(e: egret3d.MouseEvent3D) {
        console.log("OnMouseOver=>" + e.mouseCode);
    }

    /**
   * @language zh_CN
   * 按键滚轴事件
   * @param e: egret3d.MouseEvent3D 事件参数
   * @version Egret 3.0
   * @platform Web,Native
   */
    private OnMouseWheel(e: egret3d.MouseEvent3D) {
        var value: number = egret3d.Input.wheelDelta * 0.1;
        console.log("OnMouseWheel=>" + value);
    }
}

