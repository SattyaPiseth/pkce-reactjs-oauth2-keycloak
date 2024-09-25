import React, { useEffect, useState } from 'react'
import userManager from '../config/OidcConfig';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(()=> {
        userManager.getUser().then((user) => {
            if(user) setUser(user);
        });
    },[]);

    if(!user){
        return <Navigate to={"/login"} replace />
    }

  return children; 
}

export default ProtectedRoute
