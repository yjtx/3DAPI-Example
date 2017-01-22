class Context3DProxy {
    protected canvas: HTMLCanvasElement;

    protected onInit3D(): void {

        this.canvas = document.createElement("canvas");
        egret3d.Egret3DCanvas.context3DProxy = new egret3d.Context3DProxy();

        egret3d.Context3DProxy.gl = <WebGLRenderingContext>this.canvas.getContext("experimental-webgl");

        if (!egret3d.Context3DProxy.gl)
            egret3d.Context3DProxy.gl = <WebGLRenderingContext>this.canvas.getContext("webgl");

        var ext = egret3d.Context3DProxy.gl.getExtension('WEBGL_draw_buffers');
        if (!ext) {
            // ...
            //alert("you drivers not suport WEBGL_draw_buffers");
        }

    }
}