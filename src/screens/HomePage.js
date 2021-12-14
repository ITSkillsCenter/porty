import React from 'react'

export default function HomePage() {
    return (

        <div className="tm-page-wrap mx-auto">

            {/* The Header and video component is here */}
            <Header/>




            {/* The categories begins here */}
            <div className="container-fluid">
                <div id="content" className="mx-auto tm-content-container">
                    <main>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-page-title mb-4">Our Video Catalog</h2>
                                <div className="tm-categories-container mb-5">
                                    <h3 className="tm-text-primary tm-categories-text">Categories:</h3>
                                    <ul className="nav tm-category-list">
                                        <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link active">All</a></li>
                                        <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Drone Shots</a></li>
                                        <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Nature</a></li>
                                        <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Actions</a></li>
                                        <li className="nav-item tm-category-item"><a href="#" className="nav-link tm-category-link">Featured</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* The below is the block for all the catalogue */}
                        <div className="row tm-catalog-item-list">

                            <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                                <div className="position-relative tm-thumbnail-container">
                                    <img src="img/tn-09.jpg" alt="Image" className="img-fluid tm-catalog-item-img" />
                                    <a href="video-page.html" className="position-absolute tm-img-overlay">
                                        <i className="fas fa-play tm-overlay-icon" />
                                    </a>
                                </div>
                                <div className="p-4 tm-bg-gray tm-catalog-item-description">
                                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">Sed mattis nisi erat</h3>
                                    <p className="tm-catalog-item-text">Integer ultricies mi eu aliquet cursus. Nam sem leo, imperdiet non lacinia eget, volutpat ac massa. Donec mattis in velit quis commodo. Cras nec rutrum arcu.</p>
                                </div>
                            </div>
                        </div>



                        {/* Catalog Paging Buttons */}
                        <div>
                            <ul className="nav tm-paging-links">
                                <li className="nav-item active"><a href="#" className="nav-link tm-paging-link">1</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">2</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">3</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">4</a></li>
                                <li className="nav-item"><a href="#" className="nav-link tm-paging-link">&gt;</a></li>
                            </ul>
                        </div>
                    </main>

                    {/* The footer begins here  */}
                    {/* Subscribe form and footer links */}
                    <div className="row mt-5 pt-3">
                        <div className="col-xl-6 col-lg-12 mb-4">
                            <div className="tm-bg-gray p-5 h-100">
                                <h3 className="tm-text-primary mb-3">Do you want to get our latest updates?</h3>
                                <p className="mb-5">Please subscribe our newsletter for upcoming new videos and latest information about our
                                    work. Thank you.</p>
                                <form action="" method="GET" className="tm-subscribe-form">
                                    <input type="text" name="email" placeholder="Your Email..." required />
                                    <button type="submit" className="btn rounded-0 btn-primary tm-btn-small">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                            <div className="p-5 tm-bg-gray">
                                <h3 className="tm-text-primary mb-4">Quick Links</h3>
                                <ul className="list-unstyled tm-footer-links">
                                    <li><a href="#">Duis bibendum</a></li>
                                    <li><a href="#">Purus non dignissim</a></li>
                                    <li><a href="#">Sapien metus gravida</a></li>
                                    <li><a href="#">Eget consequat</a></li>
                                    <li><a href="#">Praesent eu pulvinar</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mb-4">
                            <div className="p-5 tm-bg-gray h-100">
                                <h3 className="tm-text-primary mb-4">Our Pages</h3>
                                <ul className="list-unstyled tm-footer-links">
                                    <li><a href="#">Our Videos</a></li>
                                    <li><a href="#">License Terms</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Privacy Policies</a></li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* row */}
                    <footer className="row pt-5">
                        <div className="col-12">
                            <p className="text-right">Copyright 2020 The Video Catalog Company
                                - Designed by <a href="https://templatemo.com" rel="nofollow" target="_parent">TemplateMo</a></p>
                        </div>
                    </footer>
                </div> {/* tm-content-container */}
            </div>
        </div>
    );
}
