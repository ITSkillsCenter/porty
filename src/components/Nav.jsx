import React from 'react'

function Nav() {
    return (
        <div className="col-5 col-md-8 ml-auto mr-0">
        <div className="tm-site-nav">
          <nav className="navbar navbar-expand-lg mr-0 ml-auto" id="tm-main-nav">
            <button className="navbar-toggler tm-bg-black py-2 px-3 mr-0 ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span>
                <i className="fas fa-bars tm-menu-closed-icon" />
                <i className="fas fa-times tm-menu-opened-icon" />
              </span>
            </button>
            <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
              <ul className="navbar-nav text-uppercase">
                <li className="nav-item active">
                  <a className="nav-link tm-nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link tm-nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Nav
