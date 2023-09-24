class Player {
    protected mediaElement: HTMLMediaElement;

    constructor(mediaElement: HTMLMediaElement) {
        this.mediaElement = mediaElement;
    }

    public play() {
        this.mediaElement.play();
    }

    public pause() {
        this.mediaElement.pause();
    }

    // You can add more common methods here
}

export default Player;
