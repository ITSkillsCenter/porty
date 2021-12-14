import React from 'react'

function ParallaxWindow(props) {
    return (
        <div>
            <div className="parallax-window parallax-window-2" data-parallax="scroll">
                <img src={props.image}/>
            </div>
        </div>
    )
}

export default ParallaxWindow
