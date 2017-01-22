class Shader {
    protected _passUsage: egret3d.PassUsage;
    protected _program3D: egret3d.Program3D;
    protected context: egret3d.Context3DProxy;

    protected shader: egret3d.Shader;
    protected shaderID: string = "base_vs";

    protected onInit3D(): void {

        var source: string =
            "attribute vec3 attribute_position;" +
            "void main(){" +
            "gl_Position = attribute_position;" +
            "};"

        this.shader = this.context.creatVertexShader(source);
        this.shader.id = this.shaderID;
    }


}