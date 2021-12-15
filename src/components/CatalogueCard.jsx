import React from "react";
import { Link } from "react-router-dom";

export default function CatalogueCard({image,video,title,description}) {
  
  return (
    <div className="row tm-catalog-item-list">
      <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
        <div className="position-relative tm-thumbnail-container">
          <img
            src={`${image}`}
            alt="Image"
            className="img-fluid tm-catalog-item-img"
          />
           <Link to={`${video}`}>
            <i className="fas fa-play tm-overlay-icon"></i>
            </Link>

        </div>
        <div className="p-4 tm-bg-gray tm-catalog-item-description">
          <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
            {title}
          </h3>
          <p className="tm-catalog-item-text">
            
            <span className="tm-text-secondary">do not need</span>{description}
          </p>
        </div>
      </div>
    </div>
  );
}
