import './App.css';
import Navz from './Components/Navz';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import FilterMovies from './Components/FilterMovies';
function App() {
  const [movies,setMovies] = useState([
    {title : "The Father" , description : "Film de Florian Zeller avec Olivia Colman, Anthony Hopkins, Mark Gatiss" , posterURL : "/1.jpg" , rating : 5, id: Math.random()},
    {title : "Nomadland " , description : "Film de Chloé Zhao avec Frances McDormand, David Strathairn, Gay DeForest" , posterURL : "/2.jpg" , rating : 3, id: Math.random()},
    {title : "Les Mitchell contre les machines" , description : "Long-métrage d'animation de Michael Rianda et Jeff Rowe avec Abbi Jacobson, Danny McBride, Maya Rudolph" , posterURL : "/3.jpg" , rating : 2, id: Math.random()},
    {title : "Zack Snyder's Justice League " , description : "Film de Zack Snyder avec Ben Affleck, Gal Gadot, Henry Cavill" , posterURL : "/4.jpg" , rating : 5, id: Math.random()}
  ]
  )
  const [titleF,setTitleF] = useState('')
  const [ratingF,setRatingF] = useState(5)
  return (
    <div className='mam'>
      <Navz/>
      <br/>
      <br/>
      <AddMovie setMovies={setMovies} movies={movies}/>
      <br/>
      <FilterMovies setTitleF={setTitleF} setRatingF={setRatingF} titleF={titleF} ratingF={ratingF}/>
      <br/>
      <MovieList movies={movies} setMovies={setMovies} titleF={titleF} ratingF={ratingF}/>
    </div>
  );
}

export default App;
