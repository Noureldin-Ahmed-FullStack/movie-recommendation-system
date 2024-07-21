
import { useContext } from 'react';
import './App.css'
import MovieList from './Components/MovieList';
import { MyContext } from './Components/MyContextProvider';
import { PaletteMode } from '@mui/material';
function App() {
  
  const {Theme} = useContext(MyContext)
  return (
      <div className={`${Theme == 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'} w-100 d-flex flex-column flex-grow-1 pt-3`}>
        <MovieList Theme={Theme as PaletteMode}/>

      </div>
  )
}

export default App
