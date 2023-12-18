import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailer: null
    }, // array of objects
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }

})
// addNowPlayingMovies: (state, action) => {
//     return [ ...action.payload, ...state ];
// }
export const { addNowPlayingMovies, addTrailer } = movieSlice.actions;
export default movieSlice.reducer;