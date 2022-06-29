import {Button} from "react-bootstrap"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Home=({movies})=>{
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
    return(
        <div className="Home">
            <Button variant="primary" onClick={()=> navigate('/Movies')}>Watch Movies!</Button>
        </div>
    );
}
export default Home