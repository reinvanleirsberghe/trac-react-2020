import React from "react";

const MovieListItem = ({ movie, setMovie, selected }) => (
  <div
    className={`movie-list-item ${selected ? "selected" : ""}`}
    onClick={() => setMovie(movie)}
  >
    <div>{movie.title}</div>
    <div className="text-right">{movie.original_language}</div>
    <div className="text-right">{movie.vote_average}</div>
  </div>
);

export default MovieListItem;
