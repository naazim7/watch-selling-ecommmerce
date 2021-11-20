import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {

    const [email,setEmail]=useState('')
    const handleMakeAdmin = (e) => {
       
        const user={email}

         axios.put('https://stark-stream-83699.herokuapp.com/users/admin', user)
        .then(res => console.log(res))
     
    
        alert("Succesfully Make admin!");
         e.preventDefault();
    }
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        console.log(email)
    }

    return (
        <>
        <h3 className="text-primary text-center">Make An Admin</h3>
            <form onSubmit={handleMakeAdmin} className="text-center ">
                <input type="text" className="form-control mt-4 w-75 mx-auto" placeholder="Enter an E-mail" onBlur={handleOnBlur}></input>
              
             <div className="centerXY m-3">   <Button variant="success" type="submit" >Make Admin</Button></div>


            </form>
            </>
    );
};

export default MakeAdmin;