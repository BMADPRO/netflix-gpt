import React from 'react'
import GptSearchPage from './GptSearchPage'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BG_IMG } from '../utlis/constants'

const GptSearchBar = () => {
  return (
    <div>
     <div className="absolute -z-10">
                <img src={LOGIN_BG_IMG}
                alt="bg-image"/>
            </div>
        <GptSearchPage/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchBar