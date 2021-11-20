import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images/ss3.png';
import NavBar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <>
            <Container fluid="true">
                <div className="topBanner">
                    <div className="topBannerOverlay"><NavBar></NavBar>
                    
                    
                        

                        <Row>
                            <Col md={6} lg={6} sm={12}>
                                <h1 className="text-white bannerText centerXY">GhoriGhor</h1>
                                <h3 className="text-white centerXY mt-2 bannerTextSm">We Belive in Quality</h3>
                           <div className="centerXY mt-3"><Button className="bigBtn "> <Link to="/explore">Explroe</Link></Button></div>
                            
                            </Col>
                            <Col md={6} lg={6} sm={12}>
                                
                               <img className="img-fluid" alt="main" src={Image}></img>
                            </Col>
                            
                        </Row>
                    
                    
                    </div>
                    

                </div>
        
            </Container>

        </>
    );
};

export default Banner;