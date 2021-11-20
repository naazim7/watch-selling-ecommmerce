import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../assets/images/login.jpg';
import Footer from '../Footer/Footer';
import PageBanner from '../Header/PagerBanner/PageBanner';
import useAuth from '../hooks/useAuth';
const Login = () => {
    const { googleSignIn, emailSignIn, setEmail, setPassword, error, user, setError, setUser, setLoading } = useAuth();
    
    const location = useLocation();
	const history = useHistory();
		const url = location.state?.from || "/dashboard";

    const handleEmail = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
 };

 const handlePassword = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
    };
    

    
	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				saveUserToDataBase(result.user);
				history.push(url);
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => setLoading(false));
      
	
	}










	
	const handleEmailSignIn = (e) => {
		   e.preventDefault();
	
		           emailSignIn()
					.then(() => {
						history.push(url);
									})
						.catch((error) => {
										const errorMessage = error.message;
									setError(errorMessage);
									})
							.finally(() => setLoading(false));
	}

	const saveUserToDataBase = (newUser) => {
		console.log("Eroor")
	
		 axios.put('https://stark-stream-83699.herokuapp.com/users', newUser)
        .then(res => console.log(res))
     
    
         alert("Succesfully Registerd!")
		
	}
	
    return (
        <>
            <PageBanner title="Login"></PageBanner>


            <Container className="mx-auto">

                <Card>

                    <Row>
                        <Col lg={6} md={6} sm={12}>
<img src={login} className="img-fluid" alt="login" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        
                        <Form onSubmit={handleEmailSignIn} className="mt-5 pt-2">
								
								
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control type="email" placeholder="Enter email" onBlur={handleEmail} />
										<Form.Text className="text-muted">
											We'll never share your email with anyone else.
										</Form.Text>
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" onBlur={handlePassword} />
									</Form.Group>
									{error && <Alert>{error}</Alert>}
									<Button variant="success" type="submit" >
										LogIn
									</Button>
									<p className="my-2">
										New Here? <Link to="/register">Regiser</Link>
									</p>
								
									<Button
										variant="dark"
									
										onClick={handleGoogleSignIn}>
										<FontAwesomeIcon
											icon={faGoogle}
											style={{ color: "green" }}
										/>
										Login Using Google
									</Button>
								</Form> 
                        </Col>

                    </Row>
                </Card>

                </Container>

            <Footer/>
            

         </>
    );
};

export default Login;