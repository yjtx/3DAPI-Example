class AudioManager {

    protected _manager: egret3d.AudioManager;
    protected _sound: egret3d.Sound;
    protected _channel: egret3d.Channel;
    protected _channel3d: egret3d.Channel3d;

    public constructor(url: string) {

        //生成一个新的 Sound 对象 ，将声音数据加载到 Sound 对象中。
        this._sound = egret3d.AudioManager.instance.createSound(url, () => this._success, () => this._error);

        // 生成一个新的 Channel 对象来播放该声音。
        this._channel = this._manager.playSound(this._sound, { "volume": 0.5, "loop": true });

        // 生成一个新的 Channel3d 对象来播放该声音。
        this._channel3d = this._manager.playSound3d(this._sound, new egret3d.Vector3D(0, 0, 10), { "volume": 0.5, "loop": true });

        //Channel 可停止声音并监控音量。
        this._channel.pause();
    }


    private _success(): void {
        console.log("loadSuccess")
    }

    private _error(): void {
        console.log("loadError")
    }
} 