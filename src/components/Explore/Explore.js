import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../DisplayProduct/Product.js';
import Footer from '../Footer/Footer';
import PageBanner from '../Header/PagerBanner/PageBanner.js';
import useProducts from '../hooks/useProducts';

const ExploreProduct = () => {
    const [products] = useProducts();


    return (
        <>
            <PageBanner title="Explore "></PageBanner>
            
            <Container fluid="true" className="text-center">
                <div className="headTitle ">Explore</div>
                {
    !products?.length ? <Spinner className="my-5" animation="grow" /> :
                <Row className="centerXY">

                    {
                        products.map((product)=><Product product={product} key={product.name}></Product>)
                    }
                </Row>

                }
                
               


            </Container>
            <Footer></Footer>
            
            </>
    );
};

export default ExploreProduct;