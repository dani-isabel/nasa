import React from "react";
import styled from "styled-components";

const imgRoute = "https://image.tmdb.org/t/p/original/"
const urlMovie = "https://www.themoviedb.org/movie/"

const MovieStyled = styled.div`
  background-color: black;
  height: 39.5vh;
  display: flex;
  & ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: flex;
    overflow-x: auto;
  }
  & li {
    transition: width 0.1s ease-in-out 0s;
    flex: 0 0 auto;
    width: 20%;
    padding: 0px;
    margin: 20px;
  }
  & img {
    width: 100%;
    max-width: 100%;
    object-fit: fill;
    height: 100%;
  }
`;

const Movies = ({ movies }) => {
  return (
    <MovieStyled>
      <ul>
          {movies &&
            movies.map((movie) => (
          <li key={`img-${movie.id}`}>
              <a href={urlMovie + movie.id} target="_blank">
                <img src={imgRoute + movie.poster_path} alt={movie.original_title} />
              </a>
        </li>
            ))}
      </ul>
    </MovieStyled>
  );
};

export default Movies;
