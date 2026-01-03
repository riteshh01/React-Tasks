import React from "react";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => {
        const poster =
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image";

        return (
          <div
            key={movie.imdbID}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          >
            <img src={poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;