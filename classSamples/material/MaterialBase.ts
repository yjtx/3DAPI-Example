class MaterialBase {
    protected _view3D: egret3d.View3D = null;
    protected _box: egret3d.Mesh = null;
    protected _plane: egret3d.Mesh = null;

    protected onInit3D(): void {

        this._box = new egret3d.Mesh(new egret3d.CubeGeometry(20, 20, 20), new egret3d.TextureMaterial());
        this._box.y = 40;
        this._plane = new egret3d.Mesh(new egret3d.PlaneGeometry(), new egret3d.TextureMaterial());
        this._view3D.addChild3D(this._plane);
        this._view3D.addChild3D(this._box);

        // 增加一张漫反射贴图
        this._box.material.diffuseTexture = egret3d.CheckerboardTexture.texture;

        // 增加一张法线贴图
        this._box.material.normalTexture = egret3d.CheckerboardTexture.texture;

        // 增加一张高光贴图
        this._box.material.specularTexture = egret3d.CheckerboardTexture.texture;

        // 增加一张特殊光效贴图
        this._box.material.matcapTexture = egret3d.CheckerboardTexture.texture;
    }
}
