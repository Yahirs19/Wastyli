import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './app/sidebar'
import NavBar from './app/navbar'
import Home from './pages/home'
import Publicaciones from './pages/publicaciones'
import Grupos from './pages/grupos'
import Configuracion from './pages/configuracion'
import './app.scss'
import Profile from './pages/profile'
import PP from './app/ProfilePicture'


function App() {

  return (
    <>
      <Router>
        <div className="flex">
          <SideBar/>
          <div className="column">
            <NavBar/>
            <div className="content">
              <Routes>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/publicaciones' element={<Publicaciones/>}/>
                <Route path='/grupos' exact={true} element={<Grupos/>}/>
                <Route path='/configuracion' exact={true} element={<Configuracion/>}/>
                <Route path='/profile' exact={true} element={<Profile/>}/>
                
              </Routes>
            </div>
          </div>
          
        </div>
      </Router>
    </>
  )
}

export default App
