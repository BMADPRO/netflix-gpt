import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies &&  movies[0];
    const { original_title, overview, id} = mainMovie;
console.log(mainMovie)
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieid ={id}/>
    </div>
  )
}

export default MainContainer