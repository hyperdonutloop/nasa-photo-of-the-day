import React from "react";
import styled from "styled-components";

const PhotoDate = (props) => {

    const WrapperDiv = styled.h1`
        display: flex
        justify-content: center;
        color: whitesmoke;
        
    `;

    return (
        <WrapperDiv>
            {props.subHeading}
        </WrapperDiv>
    )
}

export default PhotoDate;