import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Navbar/Navbar';

const PageBanner = (props) => {
    return (
        <>
            <Container fluid="true">
                <div className="pageBanner">
                    <div className="pageBannerOverlay">
                        <NavBar></NavBar>
                    
                    
                        <h1 className="centerXY text-white mt-5">{props.title}</h1>
                    
                    </div>
                    

                </div>
        
            </Container>

        </>
    );
};

export default PageBanner;