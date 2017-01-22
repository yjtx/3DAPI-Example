class TouchEvent3D {
    constructor() {

        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_START, this.OnTouchStart, this);

        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE, this.OnTouchMove, this);

        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_END, this.OnTouchEnd, this);
    }


    private OnTouchStart(e: egret3d.TouchEvent3D) {
        console.log("OnTouchStart");
    }
    private OnTouchMove(e: egret3d.TouchEvent3D) {
        console.log("OnTouchMove");
    }
    private OnTouchEnd(e: egret3d.TouchEvent3D) {
        console.log("OnTouchEnd");
    }
}

