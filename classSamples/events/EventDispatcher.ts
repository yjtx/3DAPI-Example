class EventDispatcher {
    constructor() {

        var object3D: egret3d.EventDispatcher = new egret3d.EventDispatcher();
        //时实更新注册
        object3D.addEventListener(egret3d.Event3D.ENTER_FRAME, this.OnUpdate, this);
    }
    private OnUpdate(e: Event3D) {
        console.log("OnUpdate");
    }

}

