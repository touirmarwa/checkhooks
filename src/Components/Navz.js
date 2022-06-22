import { Navbar,Container,Nav,Form,Button,FormControl,NavDropdown} from "react-bootstrap";
const Navz=()=>{
    return( 
        
        <div> 
            <Navbar>
            <Container>
                <Navbar.Brand href="#">MOOVEEZ</Navbar.Brand>
                <Navbar.Collapse>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link href="#action2">Series</Nav.Link>
                        <NavDropdown title="Catégories" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
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
