class DirectLight {

    protected _view3D: egret3d.View3D = null;
    protected _box: egret3d.Mesh = null;
    protected _plane: egret3d.Mesh = null;
    protected _pointLight: egret3d.PointLight = null;
    protected _directLight: egret3d.DirectLight = null;

    protected onInit3D(): void {

        this._box = new egret3d.Mesh(new egret3d.CubeGeometry(20, 20, 20), new egret3d.TextureMaterial());

        this._plane = new egret3d.Mesh(new egret3d.PlaneGeometry(), new egret3d.TextureMaterial());

        this._view3D.addChild3D(this._plane);

        //创建一个灯光组;
        var lightGroup: egret3d.LightGroup = new egret3d.LightGroup();

        //创建点光源;
        this._pointLight = new egret3d.PointLight(0x00ff00);

        //设置点光源位置;
        this._pointLight.position = new egret3d.Vector3D(0, 50, 0);

        //创建平行光;
        this._directLight = new egret3d.DirectLight(new egret3d.Vector3D(500, 500, 500));

        //设置平行光颜色;
        this._directLight.diffuse = 0xffffff;

        //将该光源添加至灯光组;
        lightGroup.addLight(this._pointLight);
        lightGroup.addLight(this._directLight);

        //将灯光组给予对象;
        this._box.material.lightGroup = lightGroup;
        this._plane.material.lightGroup = lightGroup;

        this._view3D.addChild3D(this._box);

    }
}