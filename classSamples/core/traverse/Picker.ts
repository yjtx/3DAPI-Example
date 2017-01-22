class Picker {

    protected _view3D: egret3d.View3D = null;
    protected _mesh: egret3d.Mesh = null;
    protected _mesh1: egret3d.Mesh = null;
    protected _canvas: egret3d.Egret3DCanvas = null;

    protected onInit3D(): void {

        //创建一个CubeGeometry给Mesh，默认TextureMaterial为棋盘格;
        this._mesh = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());

        this._mesh1 = new egret3d.Mesh(new egret3d.CubeGeometry(), new egret3d.TextureMaterial());

        this._mesh.x = 50;

        this._mesh1.x = -50;

        // 
        //设置拣选类型为包围盒子;
        this._mesh.pickType = egret3d.PickType.BoundPick;

        this._mesh1.pickType = egret3d.PickType.BoundPick;

        //将_mesh添加到渲染容器内;
        this._view3D.addChild3D(this._mesh);

        this._view3D.addChild3D(this._mesh1);
    }

    protected onUpdate(): void {
        // 鼠标检测mesh 和 mesh1 如果选中就 旋转它;
        var pick_array: Array<egret3d.IRender> = egret3d.Picker.pickObject3DList(this._view3D, [this._mesh, this._mesh1]);
        for (var i: number = 0; i < pick_array.length; ++i) {
            (<egret3d.Mesh>pick_array[i]).rotationY++;
        }
    }
}