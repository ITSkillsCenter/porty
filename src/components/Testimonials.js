import React, { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
    const [dataT, setDataT] = useState([])

    const testimonial = () =>{

        fetch("https://3b7a-129-18-182-91.ngrok.io/api/testimonial")
        .then(res => res.json())
        .then(json => {
            
            console.log(json);
            
            setDataT(json.data);
            console.log(json)
        })
    }
    useEffect(() => {

        testimonial()
        
        return () => {
      
        }
    }, [])



    const data = [
        {
           "image": "img/testimonial-1.jpg" ,
           "content" : " dcjdcjdchs djcdj finibys id lorem nec,"
        },
        {
            "image": "img/testimonial-2.jpg" ,
            "content" : " dcjdcjdchs djcdj finibys id lorem nec,"
         },
         {
            "image": "img/testimonial-3.png" ,
            "content" : " dcjdcjdchs djcdj finibys id lorem nec,"
         },
         {
            "image": "img/testimonial-4.png" ,
            "content" : " dcjdcjdchs djcdj finibys id lorem nec,"
         }
    ]
    return (
    
        <div className="mx-auto tm-content-container mt-4 px-3 mb-3">
        <div className="row">
          <div className="col-12">
            <h2 className="tm-page-title mb-5 tm-text-primary">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          
        
         {

            dataT.map((item) =>(
                <TestimonialCard
                content = {item.description}
                img = {item.image}
                
                />
            ))
         }
         
        </div>
        </div>
  
      
    )
}
