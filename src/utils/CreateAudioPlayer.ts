import Player from "./Player";

class CreateAudioPlayer extends Player {
    constructor(audioElement: HTMLAudioElement) {
        super(audioElement);
    }

    public enable(audioSource: string) {
        this.mediaElement.src = audioSource;
        this.mediaElement.controls = false; // We'll create custom controls
        this.mediaElement.preload = "auto"; // Preload the audio for better performance
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

export default CreateAudioPlayer;
