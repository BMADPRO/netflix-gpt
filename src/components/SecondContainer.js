import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  /**
      - Movie List - moviecard*n
       - popular, trending, now playing
      */

  const movies = useSelector(store=> store.movies?.nowPlayingMovies);

    if (!movies) return;
  return (
    
    <div className=' bg-black'>
    <div className='-mt-44 pl-12 relative z-20'>
      <MoviesList title={"Now Playing Movies"} movies={movies}/>
      <MoviesList title={"Treding Movies"} movies={movies}/>
      <MoviesList title={"Thriller Movies"} movies={movies}/>
      <MoviesList title={"Popular Movies"} movies={movies}/>

    </div>
      
    </div>
  )
}

export default SecondContainer