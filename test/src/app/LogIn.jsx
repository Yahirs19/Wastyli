import { NavLink } from 'react-router-dom';
import './css/login.scss'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

    const { loginWithRedirect } = useAuth0();
    return (
      <>  
           <NavLink onClick={() => loginWithRedirect()}><span className='text'>LogIn</span></NavLink>
      </>
    )
  }
  
  export default App