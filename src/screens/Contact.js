import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactUs from "../components/ContactUs";
import ContactUs from "../components/ContactForm";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials";

export default function Contact() {
  return (
    <div className="tm-page-wrap mx-auto">
      <ContactHeader />

      
        <div className="container-fluid px-0">
          <div className="mx-auto tm-content-container">
            <ContactUs />

            <ContactForm/>
          </div>
       
          <Testimonials />
        </div>
 

      <Footer />
    </div>
  );
}
