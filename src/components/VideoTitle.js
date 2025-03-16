import React from 'react'

const VideoTitle = ({title, overview}) => {
 
  
  return (
    <div className='w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-t-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <button className='rounded-lg bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80'>▶️ Play</button>
      <button className=' mx-2 rounded-lg bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80'>More Info</button>
      
    </div>
  )
}

export default VideoTitle;