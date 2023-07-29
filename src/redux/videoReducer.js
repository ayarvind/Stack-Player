// videoReducer.js
const initialState = {
  videoUrl: null,
  videoCollectionUrl: [],
  videoNumber:0,
  isVideoSelected:false,
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VIDEO_URL':
      return {
        ...state,
        videoUrl: action.payload
      };
    case 'SET_VIDEO_COLLECTION':
      return {
        ...state,
        videoCollectionUrl: action.payload
      };
    case 'SET_VIDEO_NUMBER':
        return{
          ...state,
          videoNumber:action.payload
        };
    case 'SET_IS_VIDEO_BUTTON':
      return{
        ...state,
        isVideoSelected:action.payload
      };
        
    default:
      return state;
  }
};

export default videoReducer;
