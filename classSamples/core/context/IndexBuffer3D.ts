class IndexBuffer3D {
    protected proxy: egret3d.Context3DProxy;
    protected indexData: Int16Array;
    protected indexBuffer: egret3d.IndexBuffer3D;

    protected onInit3D(): void {
       this.indexBuffer = this.proxy.creatIndexBuffer(this.indexData);
    }
}
