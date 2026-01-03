import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=620f6ae`
        );
        const data = await res.json();

        if (data.Response === "False") {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p className="movie-loading">Loading movie details...</p>;
  }

  if (error) {
    return <p className="movie-error">{error}</p>;
  }

  return (
    <div className="movie-page">
      <div className="movie-container">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="movie-poster"
        />

        <div className="movie-info">
          <h1>{movie.Title}</h1>
          <p className="movie-plot">{movie.Plot}</p>

          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;