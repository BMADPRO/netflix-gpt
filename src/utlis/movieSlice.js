import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null
    },
    reducers:{
        addNowPlayingMovies : (state, action)=>{
          state.nowPlayingMovies = action.payload;
        },
        getMovieTrailers: (state, action)=>{
            state.movieTrailer = action.payload;
        }
    }
});

export const {addNowPlayingMovies, getMovieTrailers} = movieSlice.actions;
export default movieSlice.reducer;