import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userManager from "./config/OidcConfig";
import HomePage from "./pages/HomePage";

function App() {
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    userManager.getUser().then((user)=>{
      if(!user){
         navigate('/login') // Redirect to login if not authenticated
      } else{
        setUser(user);
      }
    });
  },[navigate]);

  if(!user) return <div>Loading...</div>

  return <HomePage user={user}/>
}
export default App;
