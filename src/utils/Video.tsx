import React, { useState, useRef } from 'react';
import './Video.css';

interface VideoProps {
  source: string;
  title: string;
  description: string;
  className?: string;
  playBackSpeed?: number;
  onStart?: () => void;
}

const Video: React.FC<VideoProps> = ({
  source,
  title,
  description,
  className = '',
  playBackSpeed = 1,
  onStart,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullScreen = () => {
    if (videoRef.current && !document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(err => {
        console.log('Fullscreen request failed:', err);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={`video-player-container ${className}`}>
      <video
        ref={videoRef}
        src={source}
        onTimeUpdate={handleTimeUpdate}
        playbackrate={playBackSpeed}
      ></video>
      <div className="video-overlay">
        <div className="controls">
          <button onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(currentTime / (videoRef.current?.duration || 1)) * 100}%`,
                backgroundColor: 'red',
              }}
            ></div>
          </div>
          <span className="current-time">{formatTime(currentTime)}</span>
          <span className="duration">
            {formatTime(videoRef.current?.duration || 0)}
          </span>
          <button onClick={handleFullScreen}>
            {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
        <div className="video-details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
