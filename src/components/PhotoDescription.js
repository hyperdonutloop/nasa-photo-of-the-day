import React from "react";
import { Wrapper } from './styles/PhotoDesc-Styles';

const PhotoDescripton = (props) => {

    return (
        <Wrapper>
          <div className="photo-title">
            <p>{props.description}</p>
          </div>
        </Wrapper>
    )

}

export default PhotoDescripton;