class BezierCurve {

    protected _data: egret3d.BezierData;
    protected _curve: egret3d.BezierCurve;

    constructor() {

        this._data = new egret3d.BezierData();
        this._data.lineMode = false;

        var ctrlPts: egret3d.Point[] = [];
        var posPts: egret3d.Point[] = [];

        ctrlPts.push(new egret3d.Point(0, 0));
        ctrlPts.push(new egret3d.Point(0.5, 0.2));
        ctrlPts.push(new egret3d.Point(0.5, 0.6));
        ctrlPts.push(new egret3d.Point(1, 1));

        posPts.push(new egret3d.Point(0, 0));
        posPts.push(new egret3d.Point(0.5, -0.4));
        posPts.push(new egret3d.Point(0.5, 1.0));
        posPts.push(new egret3d.Point(1, 1));



        this._data.ctrlPoints = ctrlPts;
        this._data.posPoints = posPts;


        this._curve = new egret3d.BezierCurve();
        var curveY:number = this._curve.calcBezierX(this._data.posPoints, this._data.ctrlPoints, 0.5);
    }
}