import React, { useEffect, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Iframe from "./Iframe";

const App = () => {
  const [video, setVideo] = useState("");
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=AVGiX1uQLvqP21C6VgeD2tYauqndgdBCkCtjqJce")
      .then(response => response.json())
      .then(result => setVideo(result))
    }, []);
    return (
    <div>
      <Header />
      <Iframe url={video.url} title={video.title}/>
    </div>
  );
};

export default App;
