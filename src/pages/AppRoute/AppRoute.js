import React from 'react';
import {
   BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AddProduct from '../../components/AddProduct/AddProduct.js';
import Dashboard from '../../components/DashBoard/Dashboard.js';
import ProductDetails from '../../components/DisplayProduct/ProductDetails.js';
import Error from '../../components/Error/Error';
import ExploreProduct from '../../components/Explore/Explore.js';
import Login from '../../components/Login/Login.js';
import Register from '../../components/Login/Register.js';
import Order from '../../components/Order/Order.js';
import Home from '../../pages/Home/Home.js';
import PrivateRoute from './PrivateRoute.js';
    

const AppRoute = () => {
    return (
        <>
            
            <Router>
                <Switch>
                    <Route exact path="/">
                     <Home></Home>
                        
                    </Route>
                    <Route path="/addProduct">
                       <AddProduct></AddProduct>
                    </Route>
                    <PrivateRoute path="/dashboard">
                       <Dashboard></Dashboard>
                    </PrivateRoute>
                    <Route path="/explore">
                       <ExploreProduct></ExploreProduct>
                    </Route>
                   
                    
                    <Route path="/login">
                       <Login></Login>
                    </Route>
                    <Route path="/register">
                       <Register></Register>
                    </Route>
                   
                    <Route path="/products/:productID">
                       <ProductDetails></ProductDetails>
                    </Route>
                    <PrivateRoute path="/order/:productID">
                      <Order></Order>
                </PrivateRoute>
                 <Route path="*">
                       <Error></Error>
                    </Route>
                </Switch> 
</Router>
        </>
    );
};

export default AppRoute;