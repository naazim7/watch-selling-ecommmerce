import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../hooks/useProducts';
import Product from './Product';

const DisplayProduct = () => {
    const [products] = useProducts();
    let slicedProduct = products.slice(0, 6);
    slicedProduct = slicedProduct.reverse();

    return (
        <>
            <Container fluid="true" className="text-center">
                <div className="headTitle ">Brand New Products</div>
             { products.length? 
                <Row className="centerXY">

                    {
                        slicedProduct.map((product)=><Product product={product} key={product.name}></Product>)
                    }
                </Row>:  <Spinner className="my-5" animation="grow" />
}

            </Container>
            
            </>
    );
};

export default DisplayProduct;