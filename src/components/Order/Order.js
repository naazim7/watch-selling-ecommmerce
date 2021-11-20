import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import PageBanner from '../Header/PagerBanner/PageBanner';
import useAuth from '../hooks/useAuth';

const Order = () => {
    const history = useHistory();
    
    const { user } = useAuth()
    const [status,setStatus]=useState({status:'Pending'})
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
    const result= {...data,...status
        }
        axios.post('https://stark-stream-83699.herokuapp.com/orders',result)
            .then(res => {
        if (res.data.insertedId) {
                    
            alert("Added Succesfully")
            reset()
            history.push('/explore')
        }
    })
    

		
    	};
        const {productID} = useParams();

    const [product,setProduct]= useState({})

    
   
	useEffect(() => {
		fetch(`https://stark-stream-83699.herokuapp.com/products/${productID}`)
			.then(res => res.json())
		   .then(data=>setProduct(data))
	  
  },[productID])
    return (
        <>
            <PageBanner title="Make an Order"></PageBanner>


            <Container className="w-75 mx-auto p-1">


				<Card className="hookForm text-center">
					<div className="headline">Make Sure Your Info</div>

    {product?.name ?<form onSubmit={handleSubmit(onSubmit)} className="addProduct">
    
      <input  defaultValue={product?.name} {...register("name")} />
      
    
      <input   defaultValue={product?.Price}{...register("price")} />
    
     

      <input  defaultValue={product?.brand}{...register("brand")} />
      
    
   
      <input defaultValue={user?.email} {...register("email")} />
      <input defaultValue={user?.displayName} {...register("username")} />
      <input placeholder="Enter Your Phone Number" {...register("phone", { required: true })} />
    
     
      
    
    
     
      
    
      
      
      
      <input type="submit" />
    </form> : <div className="text-center my-5"><div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div></div>
}




                    
                </Card>

            </Container>

            <Footer></Footer>
            


        </>
    );
};

export default Order;