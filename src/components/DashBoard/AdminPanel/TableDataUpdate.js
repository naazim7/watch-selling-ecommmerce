import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

const TableData = ({ order }) => {
    const { status } = order;
    
    const updateStatus = (status) => {
        
        if (status === 'Pending')
        {
            order.status = 'Pending'
            console.log(order)
            }
        
       else if (status === 'Shipped')
        {
            order.status = 'Shipped';
                  console.log(order)
        }
        
        axios.put(`https://stark-stream-83699.herokuapp.com/orders/${order._id}`, order)
    .then(res => {
    //  console.log(res)
    })
    .catch(err => console.log(err));

    }
    return (
        <>
            <tr>
         
                <td>{order.name}</td>
                <td>{status}</td>
                <td>{order.username}</td>
                

                   <td>
                
                 {  order.status!=="Pending"?<Button variant="danger" onClick={()=>{updateStatus("Pending")}}>Pending</Button>:<Button variant="success" onClick={()=>{updateStatus("Shipped")}}>Shipped</Button>}
                </td>
            
                </tr>
            
            
          
         </>
    );
};

export default TableData;