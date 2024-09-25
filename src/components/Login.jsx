import React, { useEffect } from 'react'
import userManager from '../config/OidcConfig'

const Login = () => {
    useEffect(()=>{
        userManager.signinRedirect(); // Redirect to keycloak
    },[])
  return (
    <div>
      Redirecting to Keycloak ...
    </div>
  )
}

export default Login
