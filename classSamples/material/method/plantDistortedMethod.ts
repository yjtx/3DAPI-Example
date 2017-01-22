class plantDistortedMethod {
    protected _material: egret3d.TextureMaterial;
    protected onInit3D(): void {

        this._material = new egret3d.TextureMaterial();
        var method: egret3d.PlantDistortedMethod = new egret3d.PlantDistortedMethod();
        this._material.diffusePass.addMethod(method);
        method.windDirAndSpeed = new egret3d.Vector3D(1, 0, 0);

    }
}
