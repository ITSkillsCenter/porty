import React from 'react';
import Link from 'react'

function Quicklink() {
	return (
		
			<div className="p-5 tm-bg-gray">
				<h3 className="tm-text-primary mb-4">Quick Links</h3>
				<ul className="list-unstyled tm-footer-links">
					<li>
						<Link to="#">Duis bibendum</Link>
					</li>
					<li>
						<Link to="#">Purus non dignissim</Link>
					</li>
					<li>
						<Link to="#">Sapien metus gravida</Link>
					</li>
					<li>
						<Link to="#">Eget consequat</Link>
					</li>
					<li>
						<Link to="#">Praesent eu pulvinar</Link>
					</li>
				</ul>
			</div>
		
	);
}

export default Quicklink;
