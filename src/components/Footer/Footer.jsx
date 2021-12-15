import React from 'react'
import OurPages from '../OurPages'
import Quicklink from '../Quicklink'
import Subscribe from './Subscribe'


function Footer() {

    return (
        <div>
            <div className="row mt-5 pt-3">

                <Subscribe/>

                <Quicklink/>

                <OurPages/>
                  

                </div>
                <footer className="row pt-5">
                  <div className="col-12">
                    <p className="text-right">Copyright 2020 The Video Catalog Company 
                      - Designed by <a href="https://templatemo.com" rel="nofollow" target="_parent">TemplateMo</a></p>
                  </div>
                </footer>
                </div>

  )
}

export default Footer

