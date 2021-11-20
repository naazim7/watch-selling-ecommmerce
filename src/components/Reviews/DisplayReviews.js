import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useReviews from '../hooks/useReviews';
import Reviews from './Review';

const DisplayReview = () => {
    const [reviews] = useReviews();
   
    return (
        <>
            <Container fluid="true" className="text-center ">
                <div className="headTitle ">Our Happy Client Says</div>
             { reviews.length? 
                <Row className="centerXY">

                    {
                        reviews.map((review)=><Reviews review={review} key={review.name}></Reviews>)
                    }
                </Row>:  <Spinner className="my-5" animation="grow" />
}

            </Container>
            
            </>
    );
};

export default DisplayReview;