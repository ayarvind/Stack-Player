import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setVideoUrl, setVideoCollection, setIsVideoSelected } from "../redux/videoAction";
import { useNavigate, useLocation } from "react-router-dom";

function OpenFile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const fileTag = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const updatedList = [
      {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      }
    ];
    setFileList([...fileList, updatedList]);
    dispatch(setVideoUrl(url));
    dispatch(setVideoCollection(updatedList));
    dispatch(setIsVideoSelected(true));

    // Check if the current URL is not '/'
    if (location.pathname !== '/') {
      // Navigate to the home component
      navigate('/');
    }
  };

  const getFile = () => {
    fileTag.current.click();
  };

  return (
    <div className="openFile">
      <input
        ref={fileTag}
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={getFile}>Select Video</button>
    </div>
  );
}

export default OpenFile;
