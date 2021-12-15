import React from 'react'
import styled from 'styled-components';

export default function Button({text, press, bgColor, textColor, border}) {

const Btn = styled.button`
margin-top:20px;
width: 100%;
border: ${border || 0};
background: ${bgColor || "#805CF5"};
border-radius: 8px;
color: ${textColor || "white"};
height: 56px;
`;

    return (
        <Btn onClick={press} className="">{text || "Register"}</Btn> 
    )
}



