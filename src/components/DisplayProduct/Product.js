import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id}=product;
    	const url=`/products/${_id}`
    return (
        <>
            
     <Col lg={4} md={6} sm={12} className="centerXY">
                
              <Card className="customCard">
					<img src={product.img} className="productImg" alt="imggs"></img>

                <div className="productCardText text-center">
                    <p>{product.name}</p>
                    
                        <p className="fw-bold">Price : {product.Price} BDT</p>
					<button className="buttonCustom"><Link to={url}>See Details</Link></button>
					</div>
				</Card>
     </Col>
            </>
    );
};

export default Product;