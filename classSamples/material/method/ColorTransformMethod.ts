class ColorTransformMethod {

    protected transform: egret3d.ColorTransform;
    protected _material: egret3d.TextureMaterial;

    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        this.transform = new egret3d.ColorTransform();
        var method: egret3d.ColorTransformMethod = new egret3d.ColorTransformMethod();
        method.colorTransform = this.transform;

        this._material.diffusePass.addMethod(method);
       
    }
}
