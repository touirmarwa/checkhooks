import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"

const Description=({movies})=>{
    const {id} = useParams()
    const find = movies.find(movie => movie.id == id )
    const navigate = useNavigate()
    return(
        <div className='Marwa'>
            <br/>
            <h1>{find.title}</h1>
            <br/>
            <p>{find.description}</p>
            <br/>
            <iframe width="560" height="315" src={find.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <Button variant="secondary"  onClick={()=> navigate('/')}>Home</Button>
        </div>
    )
}

export default Description