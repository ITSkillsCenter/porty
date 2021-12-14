import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Catalogue from '../components/Catalogue'


export default function HomePage() {
    return (

        <div className="tm-page-wrap mx-auto">

            {/* The Header and video component is here */}
            <Header/>
            
            {/* The categories begins here */}
            <Catalogue/>

            {/* The footer begins here  */}
            {/* Subscribe form and footer links */}
            <div className="container-fluid">
                <div id="content" className="mx-auto tm-content-container">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
