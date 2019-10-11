import React from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
    @media (max-width: 750px) {
        width:100%;
    }
    img {
        max-width: 100%;
    }
`;

function Image(props) {
    return (
    <PhotoWrapper className="photo-wrapper">
        <img src={props.image} alt="NGC 7714: Starburst after Galaxy Collision"/>
    </PhotoWrapper>    
    )
}
export default Image;