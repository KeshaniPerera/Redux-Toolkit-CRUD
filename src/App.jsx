import { useState } from 'react'
import './App.css'
import { MovieList } from './components/movieList.jsx'
import {MovieInput} from './components/movieInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieInput />
      <MovieList />
      
      
    </>
  )
}

export default App
