import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'
import Button from '../components/Button'
import { userContext } from '../context/userContext';

export default function SignUp() {
    
    const navigate = useNavigate();

    const [payload, setPayload] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        username:"",
        password:""
    })
    const {user, setUser} = useContext(userContext); 
    const {jwt, setJwt} = useContext(userContext); 

    const handleChange = (e) =>{
        setPayload({...payload, [e.target.id]: e.target.value})
    }

    const handleSubmit = () =>{
        const data = {...payload, 
            "username": `${payload.phone}`,
            "email": `${payload.firstname}@gmail.com`,
            "provider": "local",
            "password": `${payload.password}`,
            "confirmed": true,
            "role":1,
            "firstname": `${payload.firstname}`,
            "lastname": `${payload.lastname}`,
            "phone": `${payload.phone}`,
        };
       console.log("payload", data)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
        };

        fetch("http://134.122.92.247:1336/auth/local/register", requestOptions)
        .then(response => response.json())
        .then(result =>{
            if(result.jwt){
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("jwt", JSON.stringify(result.jwt));

                setUser(result.user)
                setJwt(result.jwt)

                navigate('/success');
            }else{
                console.log('not right')
            }

        } )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });
    }

    const checkUser = () =>{
        if(localStorage.getItem('jwt')){
            navigate('/home');
        }
    }

    useEffect(() => {
       checkUser();

    }, [])

    return (
        <Container>
            <H1>Create your account</H1>
        
            <H4>Supporting the everyday Nigerians</H4>
            <div>
                <Label>First Name</Label>
                <Input id="firstname" value={payload.firstname} onChange={handleChange} type="text"/>
            </div>
            <div>
                <Label>Last Name</Label>
                <Input id="lastname" value={payload.lastname} onChange={handleChange} type="text"/>
            </div>
            <div>
                <Label>Phone Number</Label>
                <Input id="phone" value={payload.phone} onChange={handleChange} type="text"/>
            </div>
            <div>
                <Label>Password</Label>
                <Input id="password" value={payload.password} onChange={handleChange} type="password"/>
            </div>
            <div>
                <Button 
                press={handleSubmit} 
                />
            </div>
        </Container>
    )
}

const H4 = styled.h4`
font-family: Gilroy;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.1px;
`;

const H1 = styled.h1`
font-family: Gilroy;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #20173D;
`;

const Label = styled.label`
    display:block;
    margin: 0;
`;

const Container = styled.div`
width: 375px;
height: 812px;
background: #FFFFFF;
margin:0 auto;
`;

const Input = styled.input`
background: rgba(243, 239, 255, 0.5);
opacity: 0.5;
border: 2px solid #6045B8;
border-radius: 5px;
width:100%;
`;

