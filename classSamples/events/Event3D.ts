class Event3D {
    constructor() {
        var egret3DCanvas: egret3d.Egret3DCanvas = new egret3d.Egret3DCanvas();
        //时实更新注册
        egret3DCanvas.addEventListener(egret3d.Event3D.ENTER_FRAME, this.OnUpdate, this);
        //显示尺寸出现变化时的触发事件
        egret3d.Input.addEventListener(egret3d.Event3D.RESIZE, this.OnResize, this);
    }
    private OnUpdate(e: egret3d.Event3D) {
        //当前时间戳
        var time = e.time;
        //每帧间隔时长
        var delay = e.delay;
        //事件响应LOG
        console.log("OnUpdate");
    }
    private OnResize(e: egret3d.Event3D) {

        //事件响应LOG
        console.log("onResize");
    }
}

