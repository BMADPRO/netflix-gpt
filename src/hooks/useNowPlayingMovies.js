import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utlis/movieSlice";
import { API_OPTIONS } from "../utlis/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetch movie data and update movie store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies?.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;