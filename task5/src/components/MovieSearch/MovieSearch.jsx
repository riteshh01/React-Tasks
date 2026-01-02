import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard.jsx'
import './MovieSearch.css'

const MovieSearch = () => {

    // yaha pe search input ka state banaya hu
    const [query, setQuery] = useState("");

    // movies list ka state banaya hu
    const [movies, setMovies] = useState([]);

    // make a loader 
    const [loading, setLoading] = useState(false);

    // now I have to make a search handler to make an API call

    const handleSearch = async () => {
        if (query.trim() === "") {
            alert("Please Enter Something")
            return;
        }
        setLoading(true);

        try {
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=620f6ae&s=${query}`
            );

            const data = await res.json();

            if (data.Search) {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies", error);
        }

        setLoading(false);
    };

    return (
        <div className="movie-app">
            <h1>Movie Search</h1>

            <div className="search-box">
                <input type="text"
                    placeholder='Search Movie...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
                <button onClick={handleSearch}>Click</button>
            </div>


            {/* Loading */}
            {loading && <p>Loading movies...</p>}

            {/* Movies Grid */}
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default MovieSearch