import React from 'react'

function parallaxWindow(props) {
    return (
        <div>
            <div className="parallax-window" data-parallax="scroll" data-image-src={props.image} />
        </div>
    )
}

export default parallaxWindow
