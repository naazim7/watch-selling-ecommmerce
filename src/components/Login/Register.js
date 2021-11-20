import { updateProfile } from '@firebase/auth';
import axios from 'axios';
import { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import login from '../../assets/images/login.jpg';
import Footer from '../Footer/Footer';
import PageBanner from '../Header/PagerBanner/PageBanner';
import useAuth from '../hooks/useAuth';





const Register = () => {
	const { auth, signUpWithEmail, setEmail, setUser,setPassword,password, error, displayName, setDisplayName } = useAuth();
	const [retype,setReType]=useState('')
 const location = useLocation();
	const history = useHistory();
	const url = location.state?.from || "/";
	
	
   
	const handleEmail = (e) => {
		
        e.preventDefault();
       setEmail(e.target.value);
}

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
}

    const handleName = (e) => {
        e.preventDefault();
        setDisplayName(e.target.value);
}
    const handleReType = (e) => {
        e.preventDefault();
        setReType(e.target.value);
}

  
	const handleRegistration = (e) => {
		e.preventDefault();
		if (password !== retype)
		{	setPassword('');
			setReType('');
			alert('Password Dont match')
		
		}
		else {
			signUpWithEmail(displayName)
			.then((result) => {
			
				const newUser = { email: result.user.email, displayName };
			
				setUser(newUser);
				saveUserToDataBase(newUser);



				updateProfile(auth.currentUser, { displayName: displayName, })
					.then(() => { })
					.catch((error) => {});

				
			
				
				history.push(url)
	

				console.log("user");
			})
			.catch((error) => {
				const errorMessage = error.message;
				
			});
		}
	}
	const saveUserToDataBase = (newUser) => {
		console.log("Eroor")
	
		 axios.post('https://stark-stream-83699.herokuapp.com/users', newUser)
        .then(res => console.log(res))
     
    
         alert("Succesfully Registerd!")
		
	}

    return (
			<>
				
            <PageBanner title="Registration"></PageBanner>

				<Container>
					<Card className="m-5 p-2">
						<Row>
							<Col>
								<img src={login} alt="reg"></img>
							</Col>
							<Col>
								<Form onSubmit={handleRegistration}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											onBlur={handleEmail}
									/>
										<Form.Label>Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Your Name"
											onBlur={handleName}
										/>
									
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											onBlur={handlePassword}
										/>
										
									</Form.Group>
									<Form.Group className="mb-3" controlId="formBasicPassword">
										<Form.Label>ReType Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
											onBlur={handleReType}
										/>
										
									</Form.Group>
								{error &&	<Alert>{error}</Alert>}
									<Button variant="success" type="submit">
										Register
									</Button>{" "}
									<p>
										already have an account? <Link to="/login">Login</Link>
									</p>
								</Form>
							</Col>
						</Row>
					</Card>
				</Container>

				<Footer></Footer>
			</>
		);
};

export default Register;