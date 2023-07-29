// videoActions.js
export const setVideoUrl = (url) => {
  return {
    type: 'SET_VIDEO_URL',
    payload: url
  };
};

export const setVideoCollection = (url) => {
  return {
    type: 'SET_VIDEO_COLLECTION',
    payload: url
  };
};
export const setVideoIndex = (number) => {
  return {
    type: 'SET_VIDEO_NUMBER',
    payload: (number<0)?0:number,
  };
};
export const setIsVideoSelected = (val) => {
  return {
    type: 'SET_IS_VIDEO_BUTTON',
    payload:val,
  };
};