import React from 'react'

function HeaderVideo() {
    return (
        <div>
        <div id="tm-video-container">
        <video autoPlay muted loop id="tm-video">
          {/* <source src="video/sunset-timelapse-video.mp4" type="video/mp4"> */}
          <source src="video/wheat-field.mp4" type="video/mp4" />
        </video>    
      </div>
      <i id="tm-video-control-button" className="fas fa-pause" />
      </div>
    )
}

export default HeaderVideo
