import React from 'react';

function Service_single({ title, content }) {
    return (
        <div>
            <div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
		        <div class="tm-bg-gray p-4">
	                <i class="fas fa-broadcast-tower fa-5x p-3 mb-4 tm-about-icon"></i>
		            <h3 class="tm-text-primary mb-3">{ title }</h3>
                    <p>{ content }</p>
		        </div>	
		    </div>
        </div>
    )
}

export default Service_single;
