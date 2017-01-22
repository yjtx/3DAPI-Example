 class URLLoader {
     constructor() {
         var loader: egret3d.URLLoader = new egret3d.URLLoader();
         //加载一个png图片.
         loader.load('resource/img.png');
         //加载完成后.在内部会将其处理成ImageTexture贴图格式
         loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE, this.onLoadComplete, this);

     }

     private onLoadComplete(e: egret3d.LoaderEvent3D) {
         var imgTexture: egret3d.ImageTexture = e.loader.data;
         console.log(imgTexture.width, imgTexture.height);
     }
          
 }