import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty'
import './css/profile.scss'

function App() {
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        isAuthenticated && (
        <div className="perfil"> 
            <h2>{user.name}</h2>
            <img src={user.picture} alt={user.name} />
            <p>{user.email}</p>
            <JSONPretty data={user}/>
            
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
        </div>
        )
        
    )
  }
  
  export default App