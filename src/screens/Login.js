import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../context/userContext';

export default function Login() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext); 
    const {jwt, setJwt} = useContext(userContext); 

    const [payload, setPayload] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) =>{
        setPayload({...payload, [e.target.id]: e.target.value})
    }

    const handleLogin = () =>{
        setPayload({...payload, 
            "identifier": `${payload.phone}`,
            "password": `${payload.password}`,
        })
       
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("http://134.122.92.247:1336/auth/local", requestOptions)
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
        .catch(error => console.log('error', error));
    }

        
    const SmallText = styled.p`
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    text-align:center;
    margin-top:20px;
    `;

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
            <H1>Login</H1>
            <H4>Supporting the everyday Nigerians</H4>
            <div>
                <Label>Phone Number</Label>
                <Input id="username" value={payload.username} onChange={handleChange} type="text"/>
            </div>
            <div>
      
      
                <Label>Password</Label>
                <Input id="password" value={payload.password} onChange={handleChange} type="text"/>
            </div>
            <div>
                <Button 
                onclick={handleLogin} 
                />
            </div>

            <SmallText>Don't have an account? 
                <Link to="/signup">Sign Up</Link>
            </SmallText>
        </Container>
    )
}



