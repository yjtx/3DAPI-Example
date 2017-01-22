class ContextTexture3D {
    protected texture3D: egret3d.ContextTexture3D;
    protected proxy: egret3d.Context3DProxy;

    protected image_front: egret3d.ContextTexture2D;
    protected image_back: egret3d.ContextTexture2D;
    protected image_left: egret3d.ContextTexture2D;
    protected image_right: egret3d.ContextTexture2D;
    protected image_up: egret3d.ContextTexture2D;
    protected image_down: egret3d.ContextTexture2D;

    protected onInit3D(): void {
        this.texture3D = new egret3d.ContextTexture3D();

        this.texture3D.texture = this.texture3D.texture || this.proxy.creatTexture();
        this.texture3D.border = 0;


        this.texture3D.image_front = this.image_front;
        this.texture3D.image_back = this.image_back;
        this.texture3D.image_left = this.image_left;
        this.texture3D.image_right = this.image_right;
        this.texture3D.image_up = this.image_up;
        this.texture3D.image_down = this.image_down;

        this.proxy.uploadCubetexture(this.texture3D);

    }
}