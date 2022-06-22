import { useState } from "react";
import { Card,Button} from "react-bootstrap"
import Rating from '@mui/material/Rating';
const MovieCard=({movie,movies,setMovies})=>{
    const [showMore, setShowMore] = useState(false)
    const handleShow=()=> setShowMore(!showMore)
    const handleDelete=(id)=>  setMovies(movies.filter(movie => movie.id != id))
    return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterURL} style={{width:'286px',height:'389px'}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                {showMore ? movie.description : `${movie.description.substring(0, 25)}...`}
                <a className="btn" onClick={handleShow}>{showMore ? 'Show Less' : 'Show More'}</a>
                </Card.Text>
                <Rating name="read-only" value={movie.rating}  readOnly />
                <br/>
                <Button variant="primary" onClick={()=>{handleDelete(movie.id) }}>Delete</Button>
            </Card.Body>
            </Card>
        )
}

export default MovieCard