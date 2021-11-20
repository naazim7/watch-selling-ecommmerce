import React from 'react';
import useAuth from '../hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth()
    return (
        <>
            

            <h1 className="text-center text-success">Wellcome To Your Dashboard</h1>
            
                <h5 className="fw-bold my-2">Name: {user.displayName}</h5>
                <h5 className="fw-bold">Email: {user?.email}</h5>
            
            </>
    );
};

export default DashboardHome;