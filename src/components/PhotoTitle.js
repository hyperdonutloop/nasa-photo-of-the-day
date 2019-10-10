import React from "react";
import styled from "styled-components";

const PhotoTitle = (props) => {
    
    const WrapperDiv = styled.h1`
        font-size: 3.5rem;
        // background-color: whitesmoke;
        margin: 30px;
        color: whitesmoke;
    `;
    return (
        <WrapperDiv>
            <h1>{props.header} </h1>
        </WrapperDiv>
    
    );
}

export default PhotoTitle;

//when you call {props.header} header is the name of the "key" in the "key value pair" in the apps.js line