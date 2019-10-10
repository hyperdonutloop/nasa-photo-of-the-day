import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import axios from "axios";
import PhotoTitle from "./components/PhotoTitle";
import Photo from "./components/Photo";
import PhotoDescripton from "./components/PhotoDescription";

function App() {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState([]);
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=sezuxIbfdzKPwBDP1mDsxeMj506z17sAxTz2BoIB")
    .then(response => {
        console.log(response);
        setPhoto(response.data.url);
        setTitle(response.data.title);
        setExplanation(response.data.explanation)

    })
    .catch(error => {
        console.log("the data was not returned" + error);
    });
}, []);

  return (
    <div className="App">
    
      <PhotoTitle header={title} />
      <Photo image={photo} />
      <PhotoDescripton description={explanation} /> 
      <PhotoCard />
    </div>
  );
}

export default App;

// *description={explanation}* IS the prop FOR PhotoDescription//