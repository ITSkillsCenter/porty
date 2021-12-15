import React from 'react'

function ContactHeader() {
    return (
        <div className="position-relative">
        <div className="potition-absolute tm-site-header">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-7 col-md-4">
                <a
                  href="index.html"
                  className="tm-bg-black text-center tm-logo-container"
                >
                  <i className="fas fa-video tm-site-logo mb-3" />
                  <h1 className="tm-site-name">Video Catalog</h1>
                </a>
              </div>
              <div className="col-5 col-md-8 ml-auto mr-0">
                <div className="tm-site-nav">
                  <nav
                    className="navbar navbar-expand-lg mr-0 ml-auto"
                    id="tm-main-nav"
                  >
                    <button
                      className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbar-nav"
                      aria-controls="navbar-nav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span>
                        <i className="fas fa-bars tm-menu-closed-icon" />
                        <i className="fas fa-times tm-menu-opened-icon" />
                      </span>
                    </button>
                    <div
                      className="collapse navbar-collapse tm-nav"
                      id="navbar-nav"
                    >
                      <ul className="navbar-nav text-uppercase">
                        <li className="nav-item">
                          <a
                            className="nav-link tm-nav-link"
                            href="index.html"
                          >
                            Videos
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link tm-nav-link"
                            href="about.html"
                          >
                            About
                          </a>
                        </li>
                        <li className="nav-item active">
                          <a
                            className="nav-link tm-nav-link"
                            href="contact.html"
                          >
                            Contact <span className="sr-only">(current)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-welcome-container tm-fixed-header tm-fixed-header-3">
          <div className="text-center">
            <p className="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 mt-lg-0 mt-5 text-white mx-auto">
              Talk to Us
              <br />
              about any question you have
            </p>
          </div>
        </div>
        <div id="tm-fixed-header-bg" /> {/* Header image */}
      </div>
    )
}

export default ContactHeader
