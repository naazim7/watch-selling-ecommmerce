import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import profile from '../../assets/images/profile.png';


const Reviews = ({ review }) => {
    
    return (
        <>
            
     <Col lg={3} md={6} sm={12} className="centerXY">
                
                <Card className="reviewCard">
                    
					  <div className="d-flex m-3 justify-content-between align-items-center"><img className="profile" alt="male" src={profile}></img> <p>{review.name}</p> <p>   <ReactStars size= {25}
                   value={review.rating}
                 edit={false} /></p>  </div>

                <div className="productCardText text-center">
                  
                    
                        <p className="fw-bold">{review.review}</p>
					
					</div>
				</Card>
     </Col>
            </>
    );
};

export default Reviews;