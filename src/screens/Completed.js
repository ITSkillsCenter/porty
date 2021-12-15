import React from 'react'
import Button from '../components/Button'
import styled from 'styled-components';

export default function Completed({title, desc, btnText, btnBgColor, btnTextColor, terms}) {

    const Container  =styled.div`
    height:100vh;
    padding:20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-size: cover;
    `;

    const H1 = styled.h1`
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1px;
    text-align: center;
    `;
    const Description = styled.p`
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    letter-spacing: 0.1px;
    padding:0px 70px;
    `;
    const Terms = styled.p`
    font-family: Gilroy;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 160%;
    text-align: center;
    color: #20173D;
    margin-top:20px;
    `;

  


    return (
        <Container>
            <H1>{title || "Account Created"}</H1>
            <Description>
                {desc || "Dear distributor your account has been created successfully. Click on the button below to complete your profile."} 
            </Description>
            <Button
                bgColor ={btnBgColor}
                textColor = {btnTextColor}
                text={btnText}
            />

            <Terms>
                {terms || "By click Continue, you agree to Terms of Use and Privacy Policy"}
            </Terms>
        </Container>
    )
}
