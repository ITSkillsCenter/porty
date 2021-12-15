import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [subject, setSubject]= useState('');

    const handlesubmit = ()=>{
        console.log('submitted', name, email, msg, subject);
        let submitted = {
           name,
           email,
           msg,
           subject,
        }
        
            fetch("http://localhost:8000/api/editblog",{
                method : 'POST',
                headers: {'Content-Type' : 'application/json', },
                body: JSON.stringify(submitted)
            }).then(res => {
                return res.json();
            })
            .then(res=>{
                console.log('res is back', res)
                alert(res.msg);
                Navigate('/');
            })        
            .catch(error => {
                console.log('error', error)
            });            
    
    }

    useEffect(() => {
        handlesubmit();
       
     }, [])


    return (
        <div className="mx-auto pb-3 tm-about-text-container px-3">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <form id="contact-form" action="" method="POST" className="tm-contact-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control rounded-0" value={name} onChange={(e) =>setName(e.target.value)} placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control rounded-0"  value={email} onChange={(e) =>setEmail(e.target.value)} placeholder="Email" required />
              </div>
              <div className="form-group">
                <select className="form-control" id="contact-select" onChange={(e)=>setSubject(e.target.value)} value= {subject}>
                  <option value="Subject">Subject</option>
                  <option value="sales">Sales &amp; Marketing</option>
                  <option value="creative">Creative Design</option>
                  <option value="uiux">UI / UX</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows={8} name="message" className="form-control rounded-0" placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
              </div>
              <div className="form-group mb-0">
                <button type="submit" onClick={handlesubmit} className="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"><span>Submit</span></button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="mapouter mb-60">
              <div className="gmap_canvas">
                <iframe width="100%" height={520} id="gmap_canvas" src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}
