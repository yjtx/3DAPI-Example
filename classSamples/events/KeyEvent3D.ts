class KeyEvent3D {
    constructor() {

        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_CLICK, this.OnKeyClick, this);

        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_DOWN, this.OnKeyDown, this);

        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_UP, this.OnKeyUp, this);
    }

    /**
    * @language zh_CN
    * 按键点击事件
    * @param e: egret3d.KeyEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnKeyClick(e: egret3d.KeyEvent3D) {
        var keyStr = e.keyCode;
        console.log("OnKeyClick=>" + keyStr);
    }
    /**
    * @language zh_CN
    * 按键按下事件
    * @param e: egret3d.KeyEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnKeyDown(e: egret3d.KeyEvent3D) {
        var keyStr = e.keyCode;
        console.log("OnKeyDown=>" + keyStr);
    }
    /**
    * @language zh_CN
    * 按键抬起事件
    * @param e: egret3d.KeyEvent3D 按键事件参数
    * @version Egret 3.0
    * @platform Web,Native
    */
    private OnKeyUp(e: egret3d.KeyEvent3D) {
        var keyStr = e.keyCode;
        console.log("OnKeyUp=>" + keyStr);
    }


}

