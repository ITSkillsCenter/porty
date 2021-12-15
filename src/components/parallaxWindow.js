import React from 'react'

function ParallaxWindow({ image }) {
    return (
        <div>
            <div className="parallax-window parallax-window-2" data-parallax="scroll">
                <img src={ image }/>
            </div>
        </div>
    )
}

export default ParallaxWindow
