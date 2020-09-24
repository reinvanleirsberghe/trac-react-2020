import React from "react";

const MovieDetail = ({ movie }) => (
  <div>
    <h2>{movie.title}</h2>
    <div className="movie-card-content">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <p>{movie.overview}</p>
        <table>
          <tbody>
            <tr>
              <td className="bold">Release date</td>
              <td>{movie.release_date}</td>
            </tr>
            <tr>
              <td className="bold">Vote count</td>
              <td>{movie.vote_count}</td>
            </tr>
            <tr>
              <td className="bold">Popularity</td>
              <td>{movie.popularity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default MovieDetail;
