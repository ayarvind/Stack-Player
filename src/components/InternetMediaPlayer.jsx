import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './style/InternetMediaPlayer.css';

function InternetMediaPlayer() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handlePlay = () => {
    // You can add additional validation or checks on the URL if needed
    // For now, we'll assume the URL is correct
    if (videoUrl.trim() !== '') {
      // Play the video when the "Play" button is clicked
      // You can also set other options for the player like "controls", "width", "height", etc.
      return <ReactPlayer url={videoUrl} controls={true} />;
    }
  };

  return (
    <div className="media-player-container">
      <h1>Internet Media Player</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={handleInputChange}
      />
      <button onClick={handlePlay}>Play</button>
      <br/><br/>
      {videoUrl.trim() !== '' && (
        <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
      )}
    </div>
  );
}

export default InternetMediaPlayer;
