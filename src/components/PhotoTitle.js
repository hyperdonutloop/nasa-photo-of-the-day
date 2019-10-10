import React from "react";

const PhotoTitle = (props) => {
    
    return (
        <h1>{props.header}</h1>
    );
}

export default PhotoTitle;

//when you call {props.header} header is the name of the "key" in the "key value pair" in the apps.js line