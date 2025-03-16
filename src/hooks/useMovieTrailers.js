import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMovieTrailers } from "../utlis/movieSlice";
import { API_OPTIONS } from "../utlis/constants";

const useMovieTrailers = (movieid)=>{

    const dispatch = useDispatch();
    const movieTrailer = useSelector(store=>store.movies?.movieTrailer);
  const getMovieTrailer = async() =>{
    const trailers = await fetch("https://api.themoviedb.org/3/movie/" + movieid + "/videos?language=en-US", API_OPTIONS)
    const data = await trailers.json();
   // console.log(data)
    const filteredData = data.results.filter((video)=> video.type==="Trailer");
    const trailer = filteredData.length ? filteredData[1] : data?.results[0];
    

    dispatch(getMovieTrailers(trailer));
  }
  useEffect(()=>{
    !movieTrailer && getMovieTrailer();
  },[])
}

export default useMovieTrailers;