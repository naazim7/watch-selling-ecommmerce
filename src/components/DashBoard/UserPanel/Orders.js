
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const {user}=useAuth()

     const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://stark-stream-83699.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
          .then(data=>setOrders(data))

    }, [user.email,orders])
    
  
    const deleteOrder = (id) => {
    alert('Are You Sure ?')
    axios.delete(`https://stark-stream-83699.herokuapp.com/orders/${id}`)
    
  }
    return (
        <>
            <h2 className="headTitle text-center ">Orders</h2>
              <Container fluid={true}>
                <Card className="text-center my-5">

{orders.length ? <Table striped bordered >
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
    </tr>
  </thead>
  <tbody>
             
                            {
       orders?.map((order)=>(<tr key={order._id}><td>{order.name}</td>
      <td>{order.price} BDT</td>
         <td>{order.status}</td>
         <td><Button variant="danger" onClick={()=>{deleteOrder(order._id)}}>Delete</Button></td></tr>))

    }
    <tr>
     
      
    </tr>
   
  </tbody>
</Table>: <h3 className="text-center my-5"> You Dont order yet,Please Order Something</h3>}

                </Card>

            </Container>


        </>
    );
};

export default Orders;