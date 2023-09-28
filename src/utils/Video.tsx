import React, { useState, useRef, useEffect } from 'react';
import './Video.css';
import shink from '../assets/shink.png'
import expand from '../assets/expand.png'
import play from '../assets/play.png'
import pause from '../assets/pause.png'
import option from '../assets/option.png'
interface VideoProps {
  source: string;
  title: string;
  description: string;
  className?: string;
  ref?: React.RefObject<HTMLVideoElement>; // Change 'refs' to 'ref'
  mute?: boolean;
  autoplay?: boolean;
  onStart?: () => void;
}

const Video: React.FC<VideoProps> = ({
  source,
  title,
  description,
  className = '',
  onStart,
  autoplay,
  mute = true,
  ref // Change 'refs' to 'ref'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const [isShowControls, setIsShowControls] = useState(true);
  const [fill, setFill] = useState(false);
  const [playBackMenu, setPlayBackMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [playBackSpeedValue, setPlayBackSpeedValue] = useState(1);
  const [msg, setMsg] = useState('')
  const togglePlay = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
    // setIsPlaying(!isPlaying);
  };

  const handleParentClick = () => {

    isMenu && setIsMenu(false);
    isSubMenu && setIsSubMenu(false);

  }
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
    if (videoRef.current) {
      const newTime = (newValue / 100) * (videoRef.current.duration || 0);
      videoRef.current.currentTime = newTime;
    }
  };
  const SubMenu = () => (
    <div className='playback-list'>
      <ul>
        <li onClick={() => setPlayBackSpeedValue(0.75)}><span>0.7x</span></li>
        <li onClick={() => setPlayBackSpeedValue(0.5)}><span>0.5x</span></li>
        <li onClick={() => setPlayBackSpeedValue(0.25)}><span>0.25x</span></li>
        <li onClick={() => setPlayBackSpeedValue(1)}><span>Normal</span></li>
        <li onClick={() => setPlayBackSpeedValue(1.5)}><span>1.25x</span></li>
        <li onClick={() => setPlayBackSpeedValue(1.5)}><span>1.5x</span></li>
        <li onClick={() => setPlayBackSpeedValue(1.75)}><span>1.75x</span></li>
        <li onClick={() => setPlayBackSpeedValue(2)}><span>2x</span></li>


      </ul>
    </div>
  )
  console.log("--playback ", playBackMenu)
  console.log("submenu --", isSubMenu)

  const Menu = () => {
    return (
      <>
        <div className='video-menu'>
          <ul>
            <li> <button onClick={() => setFill((prevState: boolean) => !prevState)}>{fill ? 'Cover screen' : 'Default width'}</button></li>
            <li> <button onClick={() => setPlayBackMenu((prevState: boolean) => !prevState)}>Playback speed</button></li>


            <li> <button>Caption</button></li>
            <li> <button>Quality</button></li>
            <li> <button>Picture in picture</button></li>
            <li> <button>Setting</button></li>
          </ul>
        </div>


      </>
    )
  }
  const handleFullScreen = () => {


    if (isFullScreen) {
      parentRef.current?.classList.add('fullscreen');
    } else {
      parentRef.current?.classList.remove('fullscreen');
    }
    setIsFullScreen(!isFullScreen);
  };
  useEffect(() => {
    const submenu = playBackMenu;
    setIsSubMenu(submenu);
  }, [playBackMenu])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'f') {
        handleFullScreen();
      }
      //mute when press m button
      if (event.key === 'm') {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          if(videoRef.current.muted){
            setMsg('Muted')
          }else{
            setMsg('')
          }
        }
      }
      //play when press space button
      if (event.key === ' ') {
        togglePlay();
        setIsPlaying(prevState => !prevState);

      }
      if (event.key === 'k') {
        togglePlay()
        setIsPlaying(prevState => !prevState);
      }
      //playback speed when press + button
      if (event.key === '+') {
        if (videoRef.current && videoRef.current.playbackRate < 2) {
          videoRef.current.playbackRate += 0.25;
          setMsg('Playback: ' + videoRef.current.playbackRate +  'x')
        }
      }
      //playback speed when press - button
      if (videoRef.current && videoRef.current.playbackRate > 0.25) {
        if (videoRef.current) {
          videoRef.current.playbackRate -= 0.25;
          setMsg('Playback: ' + videoRef.current.playbackRate +  'x')
        }
      }
      //playback speed when press 0 button
      if (event.key === '0') {
        if (videoRef.current) {
          videoRef.current.playbackRate = 0.5;
          setMsg('Playback: ' + videoRef.current.playbackRate +  'x')
        }
      }
      //playback speed when press 1 button
      if (event.key === '1') {
        if (videoRef.current) {
          videoRef.current.playbackRate = 1;
          setMsg('Playback: ' + videoRef.current.playbackRate +  'x')
        }
      }
      //playback speed when press 2 button
      if (event.key === '2') {
        if (videoRef.current) {
          videoRef.current.playbackRate = 2;
          setMsg('Playback: ' + videoRef.current.playbackRate +  'x')

        }
      }
      //volume up and down on pressing up key and dwon key
      if (event.key === 'ArrowUp') {
        if (videoRef.current) {
          videoRef.current.volume += 0.1;
          setMsg('Voulme ' + videoRef.current.volume +  '%');
        }
      }
      if (event.key === 'ArrowDown') {
        if (videoRef.current) {
          videoRef.current.volume -= 0.1;
          setMsg('Voulme ' + videoRef.current.volume +  '%');
        }
      }
      //seek forward and backward on pressing right key and left key
      if (event.key === 'ArrowRight') {
        if (videoRef.current) {
          videoRef.current.currentTime += 5;

        }
      }
      if (event.key === 'ArrowLeft') {
        if (videoRef.current) {
          videoRef.current.currentTime -= 5;
        }
      }

    };

    const interval = setTimeout(() => {
      setIsShowControls(false);
      setMsg('');
    }, 4000);

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearTimeout(interval);
    };
  }, [isFullScreen]);


  const handlePlayBackSpeed = (playBackSpeed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playBackSpeed;
    }
  }
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    if (minutes >= 60) {
      return `${hours}:${minutes - hours * 60}:${seconds < 10 ? '0' : ''}${seconds}`;;
    }
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div onMouseEnter={() => setIsShowControls(true)} onMouseLeave={() => setIsShowControls(false)} ref={parentRef} className={`video-player-container ${className}`}>
      <video

        style={{
          objectFit: fill ? 'fill' : 'contain',
        }}
        ref={videoRef}
        src={source}

        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => {
          if (autoplay) {
            togglePlay();
          }
          handlePlayBackSpeed(playBackSpeedValue);
          console.log("playback speed", playBackSpeedValue)
          if (onStart) {
            onStart();
          }
        }}

        muted={mute}
      ></video>
      {
        msg !== '' && (
          <div className='video-msg'>
            <p>{msg}</p>
          </div>
        )

      }
      {

        isShowControls && (
          <div onClick={handleParentClick} className="video-overlay">
            <div className="controls">
              <button onClick={() => {
                togglePlay()
                setIsPlaying(prevState => !prevState);
              }}>
                <img src={isPlaying ? pause : play} />
              </button>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="progress-bar"
                id="myRange"
              />


              <span className="duration">
                <span className="current-time">{formatTime(currentTime)} </span>/
                <span className='current-time'>{formatTime(videoRef.current?.duration || 0)}</span>
              </span>
              <button onClick={handleFullScreen}>
                <img src={`${!isFullScreen ? shink : expand}`} />
              </button>
              <button onClick={() => {
                setIsMenu((prevState) => !prevState)
                if (isMenu) {
                  setIsSubMenu(false)
                }
              }}>
                <img src={option} />
              </button>
            </div>
            {isMenu && <Menu />}

            {isSubMenu && <SubMenu />}
            <div className="video-details">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Video;
