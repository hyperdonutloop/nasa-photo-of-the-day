import React from "react";
import styled from "styled-components";

const PhotoTitle = (props) => {
    
    const WrapperDiv = styled.h1`
        font-size: 4.5rem;
        margin: 30px;
        color: whitesmoke;

        @media (max-width: 500px) {
            max-width: 100%
            font-size: 2.3rem;
        }
    `;
    return (
        <WrapperDiv>
            {props.header}
        </WrapperDiv>
    
    );
}

export default PhotoTitle;

//when you call {props.header} header is the name of the "key" in the "key value pair" in the apps.js line