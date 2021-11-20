import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import PageBanner from '../Header/PagerBanner/PageBanner';




const ProductDetails = () => {
     const {productID} = useParams();
	const [product,setProduct]= useState({})

    
   
useEffect(() => {
		fetch(`https://stark-stream-83699.herokuapp.com/products/${productID}`)
			.then(res => res.json())
		   .then(data=>setProduct(data))
	  
  },[])
   console.log(productID,product)
   
	const url =`/order/${productID}`

    return (
			<>
		
		
            <PageBanner title="Details"></PageBanner>

				
			<Container className="my-4">
		
				<Card className="p-3">
					{!product.name ? <Spinner className="mx-auto" animation="grow" /> :
						<Row>
							<Col lg={6} md={12} sm={12}>
								<img src={product?.img} className="productProfile" alt={product?.name}></img>
							</Col>
							<Col lg={6} md={12} sm={12}>
								<div >
									<p className="fw-bold fs-4">{product.name}</p>
										
									<p>{product.desc}</p>
                                   
									<p className="fw-bold">Price : {product.Price} BDT</p>
									<Link to={url}> <Button variant="success" className="text-white mt-5"> Order {product.name}</Button></Link>
								</div>
							</Col>
						</Row>}
						</Card>	
					</Container>
			
				<Footer></Footer>
			</>
		);
};

export default ProductDetails;