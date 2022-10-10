import React, {useState} from 'react'
import Navigation from './Navigation.jsx'
import '../Styles/Header.css'
import { NavLink } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate }  from 'react-router-dom'
import { FiAlignJustify,FiXCircle } from 'react-icons/fi';






const Header = ({isAuth, setIsAuth}) => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false)


    const signInOutUser = () => {
        signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false)
          navigate('/Login')
    
        })
    
      }

    return (
        <div className="header">
            <div className="header-logo"><h1 className="header-logo__text">
             COMPANY TEMPLATE</h1></div>
            <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />

    {!isOpen ? <FiAlignJustify className="mobil-nav" onClick={()=>setIsOpen(true)} /> : (
<div className="dropdown__menu">
    <div className="btn-container">
   <FiXCircle className="mobil-nav__open" onClick={()=>setIsOpen(false)}/>
   <div className="dropdown-nav_continer">
   <nav>
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            {!isAuth ? <li><NavLink to="/Login">Login</NavLink></li> : <button onClick={signInOutUser}>Log Out</button>}
            {/*<!-- !isAuth ? if we are not authenticaed show the link.. else : dont showbutton*/}
            </ul>
        </nav>

   </div>
    </div>
    
</div>    )
   }
        </div>
    )
}

export default Header
