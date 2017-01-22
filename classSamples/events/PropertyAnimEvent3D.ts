class PropertyAnimEvent3D {
    constructor() {

        var object3D: egret3d.Object3D = new egret3d.Object3D();

        object3D.proAnimation.propertyAnimController.addEventListener(egret3d.AnimationEvent3D.EVENT_PLAY_COMPLETE, this.OnPlayComplete, this);

        object3D.proAnimation.play();
    }

    private OnPlayComplete(e: egret3d.AnimationEvent3D) {
        console.log("OnPlayComplete");
    }



}

