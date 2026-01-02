import React from "react";
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  if (!movie) return null;
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;