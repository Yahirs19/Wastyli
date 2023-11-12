import {useAuth0} from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
import React from 'react';
import './css/pp.scss'

function App() {

    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <NavLink to="/profile"><img className="LogInPP" src={user.picture} /></NavLink>
              
            </div>
          )
    )
  }
  
  export default App