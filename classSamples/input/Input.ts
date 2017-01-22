class Input {
    constructor() {

        //监听键盘事件
        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_CLICK, this.onKeyClick, this);
        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_DOWN, this.onKeyDown, this);
        egret3d.Input.addEventListener(egret3d.KeyEvent3D.KEY_UP, this.onKeyUp, this);

        //监听鼠标事件
        egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_CLICK, this.onMouseClick, this);
        egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN, this.onMouseDown, this);
        egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_UP, this.onMouseUp, this);
        egret3d.Input.addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE, this.onMouseMove, this);

        //监听触摸事件
        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_START, this.onTouchStart, this);
        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_END, this.onTouchEnd, this);
        egret3d.Input.addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE, this.onTouchMove, this);
    }

    private onKeyClick(e: egret3d.KeyEvent3D) {

        if (e.keyCode == egret3d.KeyCode.Key_A) {
            console.log("Key_A is onKeyClick");
        }
    }


    private onKeyDown(e: egret3d.KeyEvent3D) {

        if (e.keyCode == egret3d.KeyCode.Key_A) {
            console.log("Key_A is onKeyDown");
        }
    }


    private onKeyUp(e: egret3d.KeyEvent3D) {

        if (e.keyCode == egret3d.KeyCode.Key_A) {
            console.log("Key_A is onKeyUp");
        }
    }

    private onMouseClick(e: egret3d.MouseEvent3D) {
        switch (e.mouseCode) {
            case egret3d.MouseCode.Mouse_Left:
                console.log("Mouse_Left is onMouseClick");
                break;
        }
    }

    private onMouseDown(e: egret3d.MouseEvent3D) {
        switch (e.mouseCode) {
            case egret3d.MouseCode.Mouse_Left:
                console.log("Mouse_Left is onMouseDown");
                break;
        }
    }

    private onMouseUp(e: egret3d.MouseEvent3D) {
        switch (e.mouseCode) {
            case egret3d.MouseCode.Mouse_Left:
                console.log("Mouse_Left is onMouseUp");
                break;
        }
    }

    private onMouseMove(e: egret3d.MouseEvent3D) {
        console.log("onMouseMove");
    }


    private onTouchStart(e: egret3d.TouchEvent3D) {
        console.log("onTouchStart");
    }

    private onTouchEnd(e: egret3d.TouchEvent3D) {
        console.log("onTouchEnd");
    }

    private onTouchMove(e: egret3d.TouchEvent3D) {
        console.log("onTouchMove");
    }
} 