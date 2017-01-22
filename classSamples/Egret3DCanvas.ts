class Egret3DCanvas {
    constructor() {
        ///创建Canvas对象。
        var egret3DCanvas = new egret3d.Egret3DCanvas();
        ///Canvas的起始坐标，页面左上角为起始坐标(0,0)。
        egret3DCanvas.x = 0;
        egret3DCanvas.y = 0;
        ///设置Canvas页面尺寸。
        egret3DCanvas.width = window.innerWidth;
        egret3DCanvas.height = window.innerHeight;

        ///启动Canvas。
        egret3DCanvas.start();

        egret3DCanvas.addEventListener(egret3d.Event3D.ENTER_FRAME, this.onUpdate, this);

        var view: egret3d.View3D = new egret3d.View3D(egret3DCanvas.x, egret3DCanvas.y, egret3DCanvas.width, egret3DCanvas.height);
        egret3DCanvas.addView3D(view);

    }

    protected onUpdate(e: egret3d.Event3D) {
        //e.delay;
        //e.time;
    }
}

