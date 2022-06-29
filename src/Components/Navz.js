import { Navbar,Container,Nav,Form,Button,FormControl} from "react-bootstrap";
import {Link} from 'react-router-dom'
const Navz=()=>{
    return( 
        
        <div className="navs"> 
            <Navbar>
            <Container>
                <Navbar.Brand href="#">MOOVEEZ</Navbar.Brand>
                <Navbar.Collapse>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '80 px'}}
                    navbarScroll
                >
                <Nav.Link as={Link} to='/'>HOME</Nav.Link>
                <Nav.Link s={Link} to='Movies'>Movies</Nav.Link>
                <Nav.Link as={Link} to='SignIn'>SignIn</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search a movie</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        
    )
}
export default Navz
