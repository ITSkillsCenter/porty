import React from "react";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials";


export default function Contact() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Video Catalog</title>
      <link rel="stylesheet" href="fontawesome/css/all.min.css" />{" "}
      {/* https://fontawesome.com/ */}
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      {/* https://fonts.google.com/ */}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/templatemo-video-catalog.css" />
      {/*

TemplateMo 552 Video Catalog

https://templatemo.com/tm-552-video-catalog

*/}
      <div className="tm-page-wrap mx-auto">
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
        {/* Page content */}
        <main>
          <div className="container-fluid px-0">
            <div className="mx-auto tm-content-container">
              <div className="row mt-3 mb-5 pb-3">
                <div className="col-12">
                  <div className="mx-auto tm-about-text-container px-3">
                    <h2 className="tm-page-title mb-4 tm-text-primary">
                      Contact our team
                    </h2>
                    <p className="mb-4">
                      Integer sit amet odio id libero tincidunt dignissim in
                      eget arcu. Aliquam tristique ut magna sit amet tincidunt.
                      Sed tempor tellus nulla, molestie luctus lectus tincidunt
                      id. You are <u>not allowed</u> to re-distribute the
                      template ZIP file on any template collection website.
                    </p>
                    <p className="mb-4">
                      Video Catalog is a free website template for your
                      business. This is 100% free Bootstrap v4.4.1 layout. You
                      can modify and adapt this template for your CMS websites.
                      You can use it for commercial or non-commercial work. If
                      you wish to suport{" "}
                      <a
                        rel="nofollow"
                        target="_parent"
                        href="https://templatemo.com"
                        className="tm-text-primary"
                      >
                        TemplateMo
                      </a>
                      , please contact us.
                    </p>
                  </div>
                </div>
              </div>
              {/* {waiting for deborah} */}
              {/* {debby's code right here} */}
              <div className="mx-auto pb-3 tm-about-text-container px-3">
                <div className="row">
                  <div className="col-lg-6 mb-5">
                    <form
                      id="contact-form"
                      action
                      method="POST"
                      className="tm-contact-form"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control rounded-0"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control rounded-0"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <select
                          className="form-control"
                          id="contact-select"
                          name="inquiry"
                        >
                          <option value="-">Subject</option>
                          <option value="sales">Sales &amp; Marketing</option>
                          <option value="creative">Creative Design</option>
                          <option value="uiux">UI / UX</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <textarea
                          rows={8}
                          name="message"
                          className="form-control rounded-0"
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="mapouter mb-60">
                      <div className="gmap_canvas">
                        <iframe
                          width="100%"
                          height={520}
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameBorder={0}
                          scrolling="no"
                          marginHeight={0}
                          marginWidth={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="parallax-window parallax-window-2"
              data-parallax="scroll"
              data-image-src="img/contact-2.jpg"
            />
            <Testimonials/>
          </div>
        </main>
        <div className="container-fluid tm-content-container mx-auto pt-4">
         <Footer/>
          
        </div>
      </div>
    </div>
  );
}
