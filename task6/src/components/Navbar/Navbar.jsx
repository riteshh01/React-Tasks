import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ setMovies, setLoading }) => {

  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please Enter Something");
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
    <div className="navbar">
        <div className="nav-main">
            <div className="nav-logo">
                <h2>MovieFlix</h2>
            </div>

            <div className="nav-search">
                <input
                placeholder='Search Movie...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                            handleSearch();
                    }
                }}
                type="text" name="" id="" />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar