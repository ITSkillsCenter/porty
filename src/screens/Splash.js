import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../components/Button'

export default function Splash() {
    const navigate = useNavigate();

    const H1 = styled.h1`
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    line-height: 140%;
    color: #FFFFFF;
    `;
    const SmallText = styled.p`
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    text-align:center;
    margin-top:20px;
    color:white;
    `;

    const Container  =styled.div`
    height:100vh;
    padding:20px 20px;
    background: linear-gradient(0deg, rgba(128, 92, 245, 0.46), rgba(128, 92, 245, 0.46)), url(/img/image3.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    `;

    const Login = styled.span`
        color:white;
        padding:0px 10px
    `;

    const handleSignUp = (type) =>{
        alert('asdfasd');
        localStorage.setItem('type', type);
        navigate('/signup');
    }

    return (
        <Container>
            <H1>
            Supporting the everday Nigerians.
            </H1>

            <Button
                text="Sign Up as a User"
                press={()=>handleSignUp('user')}
                bgColor="transparent"
                textColor="white"
                border="1px solid white" 
            />

            <Button
                text="Sign Up as a Distributor"
                press={()=>handleSignUp('distributor')}
                bgColor="white"
                textColor="#805CF5"
            />

            <Button
                text="Sign Up as Central"
                press={()=>handleSignUp("central")}
                bgColor="transparent"
                textColor="white"
                border="1px solid white" 
            />

            <SmallText>Already have an account? 
                <Login>
                    <Link to="/login">Log In</Link>
                </Login>
            </SmallText>

            
        </Container>
    )
}
