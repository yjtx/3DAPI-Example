class RimlightMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.RimlightMethod = new egret3d.RimlightMethod();
        this._material.diffusePass.addMethod(method);
        method.rimColor = 0x80ff00aa;
        method.rimPow = 2;
        method.strength = 1;
    }
}
