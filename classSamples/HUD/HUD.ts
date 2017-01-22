class HUD {

    public view: egret3d.View3D;

    constructor() {
        var hud: egret3d.HUD = new egret3d.HUD();
        // 提供一张贴图  现在给了一张 棋盘格贴图;
        hud.diffuseTexture = egret3d.CheckerboardTexture.texture;
        this.view.addHUD(hud);
    }


}  