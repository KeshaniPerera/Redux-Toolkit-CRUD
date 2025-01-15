import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moviesArray: [{ id: 1, title: 'The Wild Robot' }, { id: 2, title: 'Harry Potter' }]
};

const movieSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const newMovie = {
                id: state.moviesArray.length + 1,
                title: action.payload,
            };
            state.moviesArray.push(newMovie); 
        },
        removeMovie: (state, action) => {
            const removeMovieId = action.payload;
            state.moviesArray = state.moviesArray.filter((movie) => movie.id !== removeMovieId);
            
            
        },
    }
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
