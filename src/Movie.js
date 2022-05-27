import React from "react";
import "./movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img className="movieImage" src={movie.Poster} alt="MovieImage" />
      <div className="type">{movie.Type}</div>
      <div className="movieName">{movie.Title}</div>
      <div className="movieYear">{movie.Year}</div>
    </div>
  );
};

export default Movie;
