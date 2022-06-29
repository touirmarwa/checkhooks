import { Form,Button} from "react-bootstrap"

const SignIn=()=>{
    return(
        <div className="sign">
        <Form style={{marginLeft: '50px'}}>
        <Form.Text className="text-muted">
                <h2>Sign In</h2>
        </Form.Text>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>E-mail </Form.Label>
         <Form.Control type="email" placeholder="Enter email" style={{width:'550px',height:'35px'}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" Enter Password" style={{width:'550px',height:'35px'}}/>
        <br/>
        <Form.Text className="text-muted">
        <h6>Help?</h6>
        </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
         Sign In
        </Button>
        <br/>
        <br/>
        <Button variant="primary" type="submit">
         Create a New Account
        </Button>
      </Form>
      </div>
    )
}
export default SignIn