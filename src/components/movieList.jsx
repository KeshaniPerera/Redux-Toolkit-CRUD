import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMovie } from '../movieSlice.js';

export const MovieList = () => {
    const dispatch = useDispatch();

    const handleRemoveMovie = (deleteMovieId) => {
        dispatch(removeMovie(deleteMovieId));
    };

    const movies = useSelector((state) => state.movieList.moviesArray);

    return (
        <div>
            <h1>Movie List</h1>
            <div>
                {movies.map((movie) => (
                    <div class="movieList" key={movie.id}> 
                        <h3>{movie.id}</h3>
                        <h3>{movie.title}</h3>
                        <button onClick={() => handleRemoveMovie(movie.id)}>DELETE MOVIE</button> 
                    </div>
                ))}
            </div>
        </div>
    );
};
