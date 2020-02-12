import React from "react";

import { Wrapper } from './styles/PhotoDate-Styles.js';

const PhotoDate = (props) => {

  return (
    <Wrapper>
      <div className="subHeading">
        {props.subHeading}
      </div>  
    </Wrapper>
  )
}

export default PhotoDate;