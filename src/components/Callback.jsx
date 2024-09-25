import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userManager from '../config/OidcConfig';


const Callback = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        userManager.signinRedirectCallback().then(() =>{
            navigate('/') // navigate to home after login
        }).catch((err) =>{
            console.error('Callback error',err);
        });
    },[navigate]);
  return (
    <div>
      Processing callback ...
    </div>
  )
}

export default Callback
