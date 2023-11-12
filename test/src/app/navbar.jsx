import './css/navbar.css'
import Logo from './images/WastilyLogo.png'
import LogIn from './LogIn'
import PP from './ProfilePicture'
import {useAuth0} from '@auth0/auth0-react'


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    
    <>  
        <div className="navbar">
         
            <p>Menu Principal</p>
            
            <div className="login">
              { isAuthenticated ? <PP/> : <LogIn/> }
              
            </div>
            
             
        </div>
          
    </>
  )
}

export default App