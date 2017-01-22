class Rectangle {

    protected _rect: egret3d.Rectangle;

    constructor() {
        var origin: egret3d.Vector3D = new egret3d.Vector3D(0, 40, 20);
        var dir: egret3d.Vector3D = new egret3d.Vector3D(10, 50, 0);

        this._rect = new egret3d.Rectangle(0, 0, 100, 100);
        this._rect.setTo(10, 10, 110, 110);
        //是否这个矩形和另外一个矩形一致
        var sameRect: boolean = this._rect.equalArea(10, 10, 110, 110);
        //是否这个矩形包含指定的点
        var containPoint: boolean = this._rect.inner(50, 50);
        //取相交的矩形
        var otherRect: egret3d.Rectangle = new egret3d.Rectangle(20, 20, 50, 80);
        var crossRect:egret3d.Rectangle = this._rect.innerArea(this._rect, otherRect);
    }



}