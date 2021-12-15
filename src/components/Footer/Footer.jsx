import React from 'react'
import OurPages from '../OurPages'
import Quicklink from '../Quicklink'


function Footer() {

    return (
        <div>
            <div className="row mt-5 pt-3">
                  <div className="col-xl-6 col-lg-12 mb-4">
                    <div className="tm-bg-gray p-5 h-100">
                      <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                      <p className="mb-5">Please subscribe our newsletter for upcoming new videos and latest information about our
                        work. Thank you.</p>
                      <form action method="GET" className="tm-subscribe-form">
                        <input type="text" name="email" placeholder="Your Email..." required />
                        <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                      </form>
                    </div>
                  </div>                  
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

