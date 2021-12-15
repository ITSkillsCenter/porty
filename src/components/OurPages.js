import React from "react";
import { Link } from "react-router-dom";

function OurPages() {
    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
            <div className="p-5 tm-bg-gray h-100">
                <h3 className="tm-text-primary mb-4">Our Pages</h3>
                <ul className="list-unstyled tm-footer-links">
                    <li><Link to="/">Our Videos</Link></li>
                    <li><Link to="#">License Terms</Link></li>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="#">Privacy Policies</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default OurPages;

            