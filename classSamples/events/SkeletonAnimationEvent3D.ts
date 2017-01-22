class SkeletonAnimationEvent3D {
    constructor() {

        var skeletonAnimation: egret3d.SkeletonAnimation = new egret3d.SkeletonAnimation();

        skeletonAnimation.addEventListener(egret3d.AnimationEvent3D.EVENT_PLAY_COMPLETE, this.OnPlayComplete, this);

        skeletonAnimation.addEventListener(egret3d.AnimationEvent3D.EVENT_FRAME_CHANGE, this.OnPlayFrameUpdate, this);

        skeletonAnimation.play();
    }

    private OnPlayComplete(e: egret3d.AnimationEvent3D) {
        console.log("OnPlayComplete");
    }

    private OnPlayFrameUpdate(e: egret3d.AnimationEvent3D) {
        console.log("OnPlayFrameUpdate");
    }
}

