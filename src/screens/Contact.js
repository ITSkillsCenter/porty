import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials";

export default function Contact() {
  return (
    <div className="tm-page-wrap mx-auto">
      <ContactHeader />

      
        <div className="container-fluid px-0">
          <div className="mx-auto tm-content-container">
            <ContactUs />

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
       
          <Testimonials />
        </div>
 

      <Footer />
    </div>
  );
}
