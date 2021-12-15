import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';

import HeaderCatalog from '../components/Catalog';
import { useNavigate } from 'react-router';


export default function HomePage() {
    const navigate = useNavigate();

    const checkUser = () =>{
        if(localStorage.getItem('jwt')){
            
        }else{
            navigate('/');
        }
    }

    useEffect(() => {
       checkUser();

    }, [])

    return (

        <div className="tm-page-wrap mx-auto">

            {/* The Header and video component is here */}
            <Header/>
            
            {/* The categories begins here */}
            {/* <HeaderCatalog/> */}

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
