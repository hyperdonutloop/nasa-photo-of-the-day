import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=sezuxIbfdzKPwBDP1mDsxeMj506z17sAxTz2BoIB")
    .then(response => {
        console.log(response);
        // setNasaData(response.data)
    })
    .catch(error => {
        console.log("the data was not returned" + error);
    });
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
        
      </p>
      <PhotoCard />
    </div>
  );
}

export default App;
