import React from 'react'
import '../App.css';
export default function TestimonialCard(props) {
    return (
        <div className="col-lg-6 mb-5 pt-3">
        <div className="media tm-testimonial">
          <img
            className="mr-4 img rounded-circle img-fluid"
            src={props.img}
            alt="Generic placeholder image"
          />
          <p className="media-body pt-3 tm-testimonial-text">
            {props.content}
          </p>
        </div>
      </div>
    )
}
