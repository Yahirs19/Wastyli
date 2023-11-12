import './css/sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from './images/WastilyLogo.png'

function App() {

  return (
    <>  

        <div className="sidebar">
            
            <ul>
                    <NavLink className="button" to="/home">
                        <img className="logo" src={Logo}  />
                    </NavLink>
                
                
                <li class="list">
                    <NavLink className="button" activeClassName="active" to="/publicaciones">
                        <span class="icon">
                        <ion-icon name="photos"></ion-icon>
                        </span>
                        <span class="text">Publicaciones</span>
                        </NavLink>
                </li>
                <li class="list"> 
                    <NavLink className="button" activeClassName="active" to="/grupos"><span class="icon">
                        <ion-icon name="people"></ion-icon>
                    </span>
                    <span class="text">Grupos</span>
                    </NavLink>
                </li>
                <li class="list">
                    <NavLink className="button" activeClassName="active" to="/configuracion"><span class="icon">
                        <ion-icon name="settings">
                        </ion-icon>
                    </span>
                    <span class="text">Configuracion</span>
                    </NavLink>
                </li>
                

            </ul>
        </div>
          
    </>
  )
}

export default App