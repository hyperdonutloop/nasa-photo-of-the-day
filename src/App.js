import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import axios from "axios";
import PhotoTitle from "./components/PhotoTitle";
import Photo from "./components/Photo";
import PhotoDescription from "./components/PhotoDescription";

function App() {
  const [photo, setPhoto] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=sezuxIbfdzKPwBDP1mDsxeMj506z17sAxTz2BoIB")
    .then(response => {
        console.log(response);
        setPhoto(response.data.url);
        setTitle(response.data.title);
    })
    .catch(error => {
        console.log("the data was not returned" + error);
    });
}, []);

  return (
    <div className="App">
    
      <PhotoTitle />
      <Photo image={photo} />
      <PhotoCard />
    </div>
  );
}

export default App;
