class View3D {
    public view: egret3d.View3D;

    constructor() {
        ///创建Canvas对象。
        var egret3DCanvas = new egret3d.Egret3DCanvas();
        ///Canvas的起始坐标，页面左上角为起始坐标(0,0)。
        egret3DCanvas.x = 0;
        egret3DCanvas.y = 0;
        ///设置Canvas页面尺寸。
        egret3DCanvas.width = window.innerWidth;
        egret3DCanvas.height = window.innerHeight;
        ///创建View3D对象,页面左上角为起始坐标(0,0),其参数依次为:
        var view3D = new egret3d.View3D(0, 0, window.innerWidth, window.innerHeight);
        ///当前对象对视位置,其参数依次为:
        view3D.camera3D.lookAt(new egret3d.Vector3D(0, 0, -1000), new egret3d.Vector3D(0, 0, 0));
        ///View3D的背景色设置
        view3D.backColor = 0xff000000;
        ///将View3D添加进Canvas中
        egret3DCanvas.addView3D(view3D);
        ///启动Canvas。
        egret3DCanvas.start();


        this.view = new egret3d.View3D(egret3DCanvas.x, egret3DCanvas.y, egret3DCanvas.width, egret3DCanvas.height);
        egret3DCanvas.addView3D(this.view);

        ///读取模型信息
        var load: egret3d.URLLoader = new egret3d.URLLoader();
        load.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoad, this);
        load.load("resource/laohu/Mon_04.esm");
    }


    protected onLoad(e:egret3d.LoaderEvent3D) {
        ///创建图片材质
        var mat: egret3d.TextureMaterial = new egret3d.TextureMaterial();
        mat.ambientColor = 0xffffff;
        ///基础信息
        var ge: egret3d.Geometry = e.loader.data;
        var mesh: egret3d.Mesh = new egret3d.Mesh(e.data, mat);
        ///骨骼动画赋值

        this.view.addChild3D(mesh);
    }
}

