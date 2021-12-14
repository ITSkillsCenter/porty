import React from 'react'
import Nav from './Nav'

export default function Banner( props ) {
    return (
        <>
            <div className="position-relative">
                <div className="potition-absolute tm-site-header">
                    <div className="container-fluid position-relative">
                        <div className="row">
                            <div className="col-7 col-md-4">
                                <a href="index.html" className="tm-bg-black text-center tm-logo-container">
                                    <i className="fas fa-video tm-site-logo mb-3" />
                                    <h1 className="tm-site-name">Video Catalog</h1>
                                </a>
                            </div>
                            
                            <Nav/>


                        </div>
                    </div>
                </div>
                <div className="tm-welcome-container tm-fixed-header tm-fixed-header-2">
                    <div className="text-center">
                        <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 mt-lg-0 mt-5 text-white mx-auto"> { props.firstLine } .<br /> {props.secondLine} .<br /> {props.thirdLine}.</p>
                    </div>
                </div>
                <div id="tm-fixed-header-bg" /> {/* Header image */}
            </div>

        </>
    )
}
