import ReactPlayer from 'react-player'
import "./index.css"

const OurWork = ()=>{
  return(
  <div className="video-container">
    <h1 className="video-heading">Our Work</h1>
    <div className="responsive-container">
    <ReactPlayer url='./video.mp4' controls width='100%'/>
    </div>
  </div>
  )
}

export default OurWork