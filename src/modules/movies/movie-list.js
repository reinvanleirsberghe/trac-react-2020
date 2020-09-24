import React from "react";
import MovieListItem from "./movie-list-item";

const MovieList = ({ movies, setMovie, movieSelected }) => {
  return (
    <div>
      <h3>Total movies {movies && movies.total_results}</h3>
      <div className="movie-list">
        {movies?.results?.map((movie) => (
          <MovieListItem
            movie={movie}
            setMovie={setMovie}
            selected={movie === movieSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
