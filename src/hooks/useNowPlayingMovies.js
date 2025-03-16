import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utlis/movieSlice";
import { API_OPTIONS } from "../utlis/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // Fetch movie data and update movie store
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(()=>{
      getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovies;