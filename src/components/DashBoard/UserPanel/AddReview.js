import axios from 'axios';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {

    const { user } = useAuth()

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    if (data.rating && data.review)
    {
   axios.post('https://stark-stream-83699.herokuapp.com/reviews', data)
        .then(res => console.log(res))
     
         alert("Succesfully Added Item!")
      
    reset();
  
    }
    else{
       alert("Please Fill Up all the fields")
    }
    
  };

 
    return (
        <>
            <Container className="mx-auto">
          <h2 className="headTitle text-center ">Add A Review</h2>

                <Card className="m-3">

                     <form className="addProduct p-3 text-center" onSubmit={handleSubmit(onSubmit)}>
     
                        <input defaultValue={user.displayName} placeholder="Product Name"{...register("name")} />
                        <label>Give your Rating (1-5)</label>
                        <input type="number" {...register("rating", { min: 0, max: 5  })} />
         <input  placeholder="Write Your Review Here"{...register("review")} />
        
      
     
      
    
      <button type="submit" >Submit</button>
    </form>
          </Card>
           
        </Container>
           
            


            
         </>
    );
};

export default AddReview;