import React from 'react'
import MovieSearch from '../components/MovieSearch/MovieSearch.jsx'
import MovieCard from '../components/MovieCard/MovieCard.jsx'

const Home = () => {
  return (
    <div>
        <MovieSearch/>
        <MovieCard/>
    </div>
  )
}

export default Home