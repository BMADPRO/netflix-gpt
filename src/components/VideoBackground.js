import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailers from '../hooks/useMovieTrailers'

const VideoBackground = ({movieid}) => {
  const trailers = useSelector(store=> store.movies?.movieTrailer)

  useMovieTrailers(movieid);
  console.log("trailers" + trailers?.key)

  return (
    <div className='w-screen'>
      <iframe  src={"https://www.youtube.com/embed/"+ trailers?.key + "?&autoplay=1&mute=1"} 
      className= "w-screen aspect-video"
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin">

      </iframe>
    </div>
  )
}

export default VideoBackground