import React from 'react'

function Subscribe() {
    return (
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
    )
}

export default Subscribe
