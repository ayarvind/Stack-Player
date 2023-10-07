import React from "react";
import OpenFile from "./OpenFile";
import "./style/Home.css";
// import VideoPlayer from "./VideoPlayer";
import DragAndDrop from "./DragAndDrop";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import Welcome from "./Welcome";
function Home() {
  const isVideoSelected = useSelector((state)=>state.isVideoSelected)
  const videoUrl = useSelector((state)=>state.videoUrl);

  return (
    <div className="app-home">
       <div className="centerContent">
        <DragAndDrop />
      </div>
      <div className={ isVideoSelected?'videoLayer-home':'home-right' } >
       
      {
        (isVideoSelected)?(
          <VideoPlayer/>
        ):(
          <Welcome/>
        )
      }
      </div>
      <div>
        
      </div>
     
    </div>
  );
}

export default Home;
