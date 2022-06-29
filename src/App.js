import './App.css';
import Navz from './Components/Navz';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import FilterMovies from './Components/FilterMovies';
import Home from './Components/Home';
import Description from './Components/Description';
import SignIn from "./Components/SignIn";
import { Route, Routes } from 'react-router-dom'
function App() {
  const [movies,setMovies] = useState([
    {title : "The Father" ,trailer : "https://www.youtube.com/embed/4TZb7YfK-JI", description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" , rating : 5, id: Math.random()},
    {title : "Nomadland " ,trailer : "https://www.youtube.com/embed/6sxCFZ8_d84" ,description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : 3, id: Math.random()},
    {title : "Les Mitchell contre les machines" ,trailer : "https://www.youtube.com/embed/QolEkXbxupw" ,description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : 2, id: Math.random()},
    {title : "Zack Snyder's Justice League " ,trailer : "https://www.youtube.com/embed/QolEkXbxupw" ,description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg" , rating : 5, id: Math.random()}
  ]
  )
  const [titleF,setTitleF] = useState('')
  const [ratingF,setRatingF] = useState(5)
  return (
    <div className='mam'>
      <Navz/>
      <br/>
      <br/>
      {/*<AddMovie setMovies={setMovies} movies={movies}/>
      <br/>
      <br/>
      <FilterMovies setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>*/}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<MovieList movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF} setTitleF={setTitleF} setRatingF={setRatingF}/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Movies/:id' element={<Description movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;
