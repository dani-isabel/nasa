import React, { useEffect, useState } from "react";
import Header from "./Header";
import Iframe from "./Iframe";
import Movies from "./Movies"

const urlDailyImg = "https://api.nasa.gov/planetary/apod?api_key=AVGiX1uQLvqP21C6VgeD2tYauqndgdBCkCtjqJce"
const nasaMovies = "https://api.themoviedb.org/3/movie/142087/similar?api_key=0ed6f19ea57214a61cf469309f1e0c23"

const getInfo = (state, urlFetch) => {
    fetch(urlFetch)
    .then(response => response.json())
    .then(result => state(result))
}

const App = () => {
  const [dailyImg, setDailyImg] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    getInfo(setDailyImg, urlDailyImg)
    getInfo(setMovies, nasaMovies)
    }, [])
    console.log(movies.results)
    return (
    <div>
      <Header />
      <Iframe url={dailyImg.url} title={dailyImg.title}/>
      <Movies movies={movies.results}/>
    </div>
  );
};

export default App;
