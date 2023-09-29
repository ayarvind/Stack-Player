import { ImageConfig } from "../config/ImageConfig";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoIndex, setVideoUrl } from "../redux/videoAction";
import Filter from "./Filter";

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
                  <p >{name}</p>
                  <p>
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
      ) : null}
    </div>
  );
}

export default ListFile;
