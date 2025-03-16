import React from 'react'
import { IMG_CDN_URL } from '../utlis/constants'

const MoviesCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt="Movie card"
        src={IMG_CDN_URL+ posterPath}

        />
    </div>
  )
}

export default MoviesCard