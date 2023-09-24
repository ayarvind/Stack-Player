import Video from './utils/Video'

function Test(){
  return(
    <>
      <Video
        source='file:///C:/Users/HP/Downloads/SampleVideo_1280x720_1mb.mp4'
        className = 'video-5'
        playBackSpeed={1.5}
       
      />
    </>
  )
}

export default Test