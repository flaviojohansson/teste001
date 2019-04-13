import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Container,
    Form,
    FormControl,
} from 'react-bootstrap'

class Signin extends Component {

    state = {
        logged: false,
        password: '',
        userName: '',
    }

    onCognitoLogin = () => {

    }

    onUserNameChange = (event) => {
        this.setState({
            ...this.state,
            userName: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            ...this.state,
            password: event.target.value
        })
    }

    render = () => {

        let logged = null;

        if (this.state.logged) {
            logged = (
                <h1>Ok ! You are logged in !</h1>
            )
        }

        return (

            <Container>
                <Row className="align-items-center" >
                    <Col md={{ span: 4, offset: 4 }}>
                        <h1>Signin</h1>
                        <Form>
                            <Form.Group controlId="Username">
                                <FormControl type="text" placeholder="Username" className="mr-sm-2" onChange={this.onUserNameChange} />
                            </Form.Group>
                            <Form.Group controlId="Password">
                                <FormControl type="password" placeholder="Password" className="mr-sm-2" onChange={this.onPasswordChange} />
                            </Form.Group>
                            <Button onClick={this.onCognitoLogin}>Sign in</Button>
                        </Form>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Signin;