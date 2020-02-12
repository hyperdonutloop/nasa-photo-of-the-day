import React from "react";
import { PhotoWrapper } from './styles/Photo-Styles.js';

function Image(props) {
  return (
  <PhotoWrapper>
    <div className="image">
      <img src={props.image} alt="nasa image"/>
    </div>
  </PhotoWrapper>    
  )
}
export default Image;