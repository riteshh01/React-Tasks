import React from 'react'
import MovieList from '../../components/MovieList/MovieList'

const Home = ({ movies, loading }) => {
  return (
    <div>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  )
}

export default Home