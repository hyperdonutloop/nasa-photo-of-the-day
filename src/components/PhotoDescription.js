import React from "react";
import styled from "styled-components";

const PhotoDescripton = (props) => {

    const PhotoDesc = styled.p`
        padding: 50px;
        font-size: 1.4em;
        line-height: 1.6em;
        letter-spacing: 2px;
        text-align: justify;
        /* color: whitesmoke; */

        @media (max-width: 500px) {
            max-width: 100%
            font-size: 1.3rem;
            padding: 20px;
        }

    

    `;

    return (
        <PhotoDesc>
        <p>{props.description}</p>
        </PhotoDesc>
    )

}

export default PhotoDescripton;