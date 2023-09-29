import { ImageConfig } from "../config/ImageConfig";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoIndex, setVideoUrl } from "../redux/videoAction";
import Filter from "./Filter";
import notfound from '../assets/notfound.avif'
function ListFile({ fileList, fileRemove }) {
  const dispatch = useDispatch();
  const videoIndex = useSelector((state) => state.videoNumber);
  const dispatchAndHandleClick = (url,index) => {
    dispatch(setVideoUrl(url));
    dispatch(setVideoIndex(index))
  };
 
  //   console.log(fileList);
  return (
    <div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <div className="drop-file-preview__title">
           
            <Filter handler = {dispatchAndHandleClick}/>
          </div>
          {fileList.map((item, index) => {
            const { name, size, type, url } = item;
            // setIdx(index)
            const imageUrl =
              ImageConfig[type.split("/")[1]] || ImageConfig["default"];
             
            return (
              <button
                onClick={() => dispatchAndHandleClick(url,index)}
                key={index}
                
                style={{
                    backgroundColor: (index == videoIndex) ? 'aliceblue':'white',
                }}
                className="drop-file-preview__item"
              >
                <img  src={imageUrl} />
                <div className="drop-file-preview__item__info">
                  <p style={{ fontWeight: "bold", fontSize: "13px" }}>{name}</p>
                  <p style={{ fontWeight: "bold",color:'gray', fontSize: "9px" }}>
                    {Math.floor(size/(1024*1024))} Mb
                  </p>
                </div>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="drop-file-preview">
          <img style={{
              width:'100%',
              height:'100%'
        
          }} src={notfound}/>
           <div className="notfound">
           <center>
              <br/>
              <h2>Video is not selected</h2>
            </center>
          </div>
        </div>
      
      )}
    </div>
  );
}

export default ListFile;
