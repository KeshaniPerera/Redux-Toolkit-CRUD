import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../movieSlice.js';
export const MovieInput =() =>{
    const [newMovie, setNewMovie] = useState('');
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if (newMovie){
            dispatch(addMovie(newMovie));
            setNewMovie('');
            
        }

    }
    return <div>
   
        <div>
            <input value={newMovie} onChange={(e) => setNewMovie(event.target.value)} type="text" placeholder="Enter movie name"/>
            <button onClick={handleAddMovie}>Add Movie</button>
            </div>
    </div>
}