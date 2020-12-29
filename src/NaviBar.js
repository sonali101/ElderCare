import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NaviBar.css'

class NavigationBar extends React.Component{
    render(){
        return(
            <>
            <Navbar bg="dark" variant="dark" expand="sm" className="bg-light justify-content-betwwen">
            <Navbar.Brand href="/"><div style={{color:'cyan'}}>Elder Care</div></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
           <Container fluid style={{marginLeft:'200px'}}>
            <Nav className="mr-auto">
            
                <Nav.Link href="/" className="navMargin">Home</Nav.Link>
                <Nav.Link href="/About" className="navMargin">About Us</Nav.Link>
                <Nav.Link href="/Nursing" className="navMargin">Services</Nav.Link>
                <Nav.Link href="#" className="navMargin">Contact US</Nav.Link>

            </Nav>
            </Container>
            </Navbar.Collapse>
            </Navbar>
            </>
        );
    }
}

export default NavigationBar;