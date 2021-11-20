import React, { useEffect, useState } from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import TableData from './TableDataUpdate';

const ManageAllOrder = () => {
    
            const [orders,setOrders]= useState([])

    
   
    useEffect(() => {
        fetch(`https://stark-stream-83699.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
	  
    }, [orders]);

    return (

            

  
   
        

            <Container fluid={true}>
                <Card className="text-center my-5">

<Table striped bordered >
  <thead>
    <tr>
      
      <th>Package</th>
                <th>Status</th>
                <th>Order By</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
                  {
                  orders?.map((order) => (<TableData key={order._id} order={order}></TableData>))

    }
  
     
      
 
   
  </tbody>
</Table>

                </Card>

                </Container>
            
      
    );
};

export default ManageAllOrder;