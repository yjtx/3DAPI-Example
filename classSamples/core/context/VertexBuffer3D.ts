class VertexBuffer3D {
    protected proxy: egret3d.Context3DProxy;
    protected vertexBuffer: egret3d.VertexBuffer3D;
    protected vertexArray: Float32Array;
    protected drawType: number = egret3d.Context3DProxy.gl.STATIC_DRAW;

    protected onInit3D(): void {
        this.vertexBuffer = this.proxy.creatVertexBuffer(this.vertexArray, this.drawType); 
    }
}

