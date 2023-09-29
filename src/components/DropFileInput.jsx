import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsVideoSelected, setVideoCollection, setVideoUrl } from '../redux/videoAction';
import './style/drop-file-input.css';
import uploadImg from '../assets/cloud-upload-regular-240.png';
import ListFile from './ListFile';
import VideoPlayer from './VideoPlayer'
const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const videoIndex = useSelector((state) => state.videoNumber);
  const [videoSelected, setVideoSelected] = useState(false); // State to track if a video is selected

  useEffect(() => {
    // Set the videoSelected state to true when a video is selected
    if(videoSelected){
      dispatch(setIsVideoSelected(true));
    }
    const handleKeyDown = (event) => {
      if (event.shiftKey && event.code === "KeyO") {
        newRefBtn.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoSelected]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');
  const onFileDrop = (e) => {
    const newFiles = e.target.files;
    if (newFiles.length > 0) {
      const videoFiles = Array.from(newFiles).filter(file => file.type.startsWith('video/'));
      const updatedList = [...fileList, ...videoFiles].map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      }));
      setFileList(updatedList);
      updatedList.sort();
      dispatch(setVideoCollection(updatedList));
      // dispatch(setVideoUrl(updatedList[videoIndex].url));

      // Set the videoSelected state to true when a video is selected
      setVideoSelected(true);
      dispatch(setIsVideoSelected(false))
    }
  };

  const fileRemove = (file) => {
    const updatedList = fileList.filter((item) => item !== file);
    setFileList(updatedList);
    props.onFileChange(updatedList);

    // Set the videoSelected state to false when the last video is removed
    if (updatedList.length === 0) {
      setVideoSelected(false);
    }
  };

  return (
    <div className='panelX'>
        
          <div className="listFile">

            <ListFile fileList={fileList} fileRemove={fileRemove} />
          </div>
        


      
        <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your files here</p>
          </div>
          <input type="file" value="" multiple onChange={onFileDrop} />
        </div>
      
    </div>
  );
};

export default DropFileInput;
