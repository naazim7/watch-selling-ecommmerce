import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const { user,logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
            <Navbar.Brand as={ Link}  to="/">GhoriGhor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
     
     
    </Nav>
    <Nav>
      
      
      <Nav.Link as={Link}  to="/explore">
    Explore
      </Nav.Link>
      <Nav.Link as={Link}  to="/dashboard">
       Dashboard
                </Nav.Link>
                
{ !user?.email ? 
    (  <Nav.Link as={Link}  to="/login">
    Login
      </Nav.Link>) :
     <Navbar.Text>
											{user.displayName || user.email}
											<Button className="ms-1" variant="danger" size="sm" onClick={logOut}>
												LogOut
											</Button>
										</Navbar.Text>}
    </Nav>
  </Navbar.Collapse>
  </Container>
        </Navbar>
        
            </>
    );
};

export default NavBar;