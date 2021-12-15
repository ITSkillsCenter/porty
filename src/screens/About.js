import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer/Footer";
import ParallaxWindow from "../components/parallaxWindow";

function About() {
  return (
    <div className="tm-page-wrap mx-auto">
      <div className="position-relative">
        {/* Expecting banner from isaac */}

        <Banner />
      </div>
      {/* Page content */}
      <main>
        <div className="container-fluid px-0">
          <div className="mx-auto tm-content-container">
            <div className="row mt-3 mb-5 pb-3">
              <div className="col-12">
                <div className="mx-auto tm-about-text-container px-3">
                  <h2 className="tm-page-title mb-4 tm-text-primary">
                    About the Video Catalog
                  </h2>
                  <p className="mb-4">
                    Video Catalog is free HTML CSS template for your website.
                    This Bootstrap v4.4.1 website template is 100% free download
                    for everyone. You can modify and expand this template for
                    your CMS websites. You can use it for commercial or
                    non-commercial work. If you wish to support{" "}
                    <a className="tm-text-primary">TemplateMo</a>, please
                    contact us.
                  </p>
                  <p className="mb-4">
                    You are <u>not allowed</u> to re-distribute the template ZIP
                    file on any template collection website.
                  </p>
                  <p className="mb-4">
                    Vivamus sit amet justo sed erat iaculis consequat. Nulla
                    suscipit posuere lectus ut venenatis. Proin sed orci eget
                    tellus euismod vulputate eu eu arcu. Etiam a bibendum lorem.
                    Curabitur ac bibendum odio. Vivamus euismod dui mauris, ut
                    tincidunt mi congue quis.
                  </p>
                  <p className="mb-0">
                    Phasellus luctus orci dolor, a luctus massa tincidunt vitae.
                    Integer sit amet odio id libero tincidunt dignissim in eget
                    arcu. Aliquam tristique ut magna sit amet tincidunt. Sed
                    tempor tellus nulla, molestie luctus lectus tincidunt id.
                    Cras duismod leo a urna placerat, vel blandit turpis
                    fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Expecting Parallax from pleasure */}
          <ParallaxWindow />

          {/* Expecting Services From Flames  */}

          {/* Expecting Parallax from pleasure */}
        </div>
      </main>
      {/* Expecting Footer From jide */}
      <Footer />
    </div>
  );
}

export default About;
