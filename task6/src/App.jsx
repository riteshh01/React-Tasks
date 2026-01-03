import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import MovieList from './components/MovieList/MovieList.jsx'
import MoviePage from './components/MoviePage/MoviePage.jsx'

const App = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <BrowserRouter>
      <Navbar setMovies={setMovies} setLoading={setLoading} />
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} loading={loading} />}
        />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App