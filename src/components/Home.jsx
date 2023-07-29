import React from "react";
import OpenFile from "./OpenFile";
import "./style/Home.css";
// import VideoPlayer from "./VideoPlayer";
import DragAndDrop from "./DragAndDrop";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
function Home() {
  const isVideoSelected = useSelector((state)=>state.isVideoSelected)
  console.log(isVideoSelected);
  return (
    <div className="app-home">
      <div className="videoLayer">
       
      {
        (isVideoSelected)&&(
          <VideoPlayer/>
        )
      }
      </div>
      <div>
        
      </div>
      <div className="centerContent">
        <DragAndDrop />
      </div>
    </div>
  );
}

export default Home;
