class ColorTransform {

    protected _transform: egret3d.ColorTransform;

    constructor() {
        this._transform = new egret3d.ColorTransform();
        this._transform.alpha = 0.8;
        this._transform.m44 = new egret3d.Matrix4_4();


        this._transform.setColorRGB(0xff00ff);

        this._transform.multiply(this._transform);

    }



}