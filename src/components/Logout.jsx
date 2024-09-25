import React, { useEffect } from 'react'
import userManager from '../config/OidcConfig'

const Logout = () => {
    useEffect(()=>{
        userManager.signoutRedirect(); // Log out and redirect to Keycloak logout
    },[])
  return (
    <div>
      Logging out ...
    </div>
  )
}

export default Logout
