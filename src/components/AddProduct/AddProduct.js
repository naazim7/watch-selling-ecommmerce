import axios from 'axios';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProduct = () => {
 
 const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {

    if (data.name && data.Price && data.desc && data.model && data.img)
    {
      axios.post('https://stark-stream-83699.herokuapp.com/addProduct', data)
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
          <h2 className="centerXY">Add New Product</h2>

                <Card className="m-3">

                     <form className="addProduct p-3 text-center" onSubmit={handleSubmit(onSubmit)}>
     
         <input  placeholder="Product Name"{...register("name")} />
         <input  placeholder="Brand Name"{...register("brand")} />
         <input  placeholder="Model"{...register("model")} />
         <input  placeholder="Price"{...register("Price")} />
         <input  placeholder="Short Description"{...register("desc")} />
         <input  placeholder="Product Image URL"{...register("img")} />
      
     
      
    
      <button type="submit" >Submit</button>
    </form>
          </Card>
           
        </Container>
        
    

        



       

      </>
      
    );
};

export default AddProduct;