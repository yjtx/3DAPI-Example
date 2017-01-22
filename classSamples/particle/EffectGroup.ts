class EffectGroup {
    protected _view: egret3d.View3D;
    protected onInit3D(): void {
        var unitLoader: egret3d.UnitLoader;
        //加载完毕后
        var effectGroup: egret3d.EffectGroup = <egret3d.EffectGroup>unitLoader.container;
        effectGroup.play();
    }
}
