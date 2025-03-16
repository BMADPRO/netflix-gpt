import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondContainer from './SecondContainer.js';
import { useSelector } from 'react-redux';
import GptSearchBar from './GptSearchBar.js';

const Browser = () => {

  useNowPlayingMovies();
  const gptSearch = useSelector(store=> store.gpt?.showGptSearch);

  //console.log(nowPlayingMovies)

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearchBar />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
      {/**
         Main Container
         - video bg
         - video title
         Secondary container
          - Movie lists *n
            - cards *n
        
         */}
    </div>
  );
}

export default Browser;