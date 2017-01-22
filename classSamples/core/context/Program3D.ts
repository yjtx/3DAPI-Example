class Program3D {
    protected _passUsage: egret3d.PassUsage;
    protected _program3D: egret3d.Program3D;
    protected _proxy: Context3DProxy;

    protected onInit3D(): void {
        this._passUsage.program3D = egret3d.ShaderPool.getProgram(this._passUsage.vertexShader.shader.id, this._passUsage.fragmentShader.shader.id);
    }
}