import Player from "./Player";

class CreateVideoPlayer extends Player {
    constructor(videoElement: HTMLVideoElement) {
        super(videoElement);
    }

    public enable(videoSource: string) {
        this.mediaElement.src = videoSource;
        this.mediaElement.controls = false; // We'll create custom controls
        this.mediaElement.preload = "auto"; // Preload the video for better performance
        this.customizeControls();
        this.play(); // Autoplay or let the user start playback
    }

    public setCustomStyles(styles: Record<string, string>) {
        Object.assign(this.mediaElement.style, styles);
    }

    public customizeControls() {
        // Implement custom controls logic here
    }
}

export default CreateVideoPlayer;
