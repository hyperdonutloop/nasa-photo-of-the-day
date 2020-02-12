import React from "react";

import { Wrapper } from './styles/PhotoTitle-Styles.js';

const PhotoTitle = (props) => {

  return (
      <Wrapper>
        <div className="header">
          {props.header}
        </div>
      </Wrapper>

  );
}

export default PhotoTitle;

//when you call {props.header} header is the name of the "key" in the "key value pair" in the apps.js line