import React, { useRef } from 'react'
import lang from '../utlis/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utlis/openai';
import { API_OPTIONS } from '../utlis/constants';
import { addGptMovieResult } from '../utlis/gptSlice';

const GptSearchPage = () => {
    const langKey = useSelector(store=> store.config?.lang);
    const searchtext = useRef(null);
    const dispatch = useDispatch();
    const handleGptSearch = async () =>{
     console.log(searchtext.current.value);
     //Make an API call to GPT API and get movie results
    //  const gptQuery = "Act as a movie recommendation system and suggest some movies for the query"+  searchtext.current.value 
    //  + "only give me name of 5 movies, comma separated like  the example result given ahead. Example Result: Gadar, change up, Don, Sholay";
    //  const getGptResults = await openai.chat.completions.create({
    //   model: 'gpt-4o',
    //   messages: [
    //     { role: 'user', content: gptQuery },
    //   ],
    // });
    
    // console.log(getGptResults.choices[0].message.content);
    // if(!getGptResults?.choices) {
     const  gptResults = "Andaz apna apna, Hera pheri, Chupke chupke, Jaane bhi Do yaaro, padosan"
      const gptMovies = gptResults.split(",")  // it will convert string to array
      const promiseArray = gptMovies.map(movie=> searchMovieTMDB(movie))
      console.log(promiseArray) //[Promise, Promise, Promise, Promise, Promise]
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
    // }
    // const gptMovies = getGptResults.choices[0].message.content.split(",")


    //For each , I will search tmdb api
    }
     //search a movie in tmdb
    const searchMovieTMDB = async(movie)=>{
       const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
      const json = await data.json();
      return json.results;
    } 

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}> 
            <input type='text' ref={searchtext}
            className='p-4 m-4 col-span-9'
            placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='py-2 px-4 m-4 rounded-lg bg-red-700 text-white col-span-3'
            onClick={handleGptSearch}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchPage