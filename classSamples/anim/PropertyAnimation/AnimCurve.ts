class AnimCurve {
    constructor() {

        // 创建两个曲线 
        var curve0: egret3d.AnimCurve = new egret3d.AnimCurve();
        curve0.type = egret3d.CurveType.Line;

        curve0.start = new egret3d.Point(0, 100);
        curve0.end = new egret3d.Point(10, 200);

        curve0.c1 = new egret3d.Point(0, 0);
        curve0.c2 = new egret3d.Point(100, 200);
        curve0.useCache = false;

        var curve1: egret3d.AnimCurve = new egret3d.AnimCurve();
        curve0.type = egret3d.CurveType.BesselCurve;

        curve0.start = new egret3d.Point(0, 100);
        curve0.end = new egret3d.Point(10, 200);

        curve0.c1 = new egret3d.Point(0, 0);
        curve0.c2 = new egret3d.Point(100, 200);
        curve0.useCache = false;


        var anim: egret3d.PropertyAnim = new egret3d.PropertyAnim();

        // 把曲线加载动画中 
        // 控制 对象 x 属性的动画 控制 Object3D.x
        anim.addAnimCurve("x", [curve0, curve1]);

        // 创建一个动画控制器
        // 
        var animController: egret3d.PropertyAnimController = new egret3d.PropertyAnimController();
        // 给控制器增加一个动画
        animController.addPropertyAnim(anim);
        

        var object3d: egret3d.Object3D = new egret3d.Object3D();

        // 把动画控制器给 object3d对象
        object3d.proAnimation = animController;
        object3d.proAnimation.play();
    }
} 