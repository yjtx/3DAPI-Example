class ContextTexture2D {
    protected texture2D:egret3d.ContextTexture2D;
    protected proxy: egret3d.Context3DProxy;
    protected width: number = 1024;
    protected height: number = 1024;

    public frameBufferFormat: egret3d.FrameBufferFormat = egret3d.FrameBufferFormat.UNSIGNED_BYTE_RGB;

    protected onInit3D(): void {

        this.texture2D = this.proxy.createFramebuffer(this.width, this.height, this.frameBufferFormat);

    }
}