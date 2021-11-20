
import axios from 'axios';
import React from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products] = useProducts();

     const deleteProduct = (id) => {
    alert('Are You Sure ?')
    axios.delete(`https://stark-stream-83699.herokuapp.com/products/${id}`)
    
  }
    
    return (
        <>
            <h2 className="headTitle text-center ">Product Management</h2>
              <Container fluid={true}>
                <Card className="text-center my-5">

{products.length ? <Table striped bordered >
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Price</th>
      <th>Brand</th>
    </tr>
  </thead>
  <tbody>
             
                            {
       products?.map((product)=>(<tr key={product._id}><td>{product.name}</td>
    
           <td>{product.brand}</td>
         <td><Button variant="danger" onClick={()=>{deleteProduct(product._id)}}>Delete</Button></td></tr>))

    }
    <tr>
     
      
    </tr>
   
  </tbody>
</Table>: <h3 className="text-center my-5">Wait............</h3>}

                </Card>

            </Container>


        </>
    );
};

export default ManageProduct;