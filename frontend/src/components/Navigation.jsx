import React from 'react'
import '../Styles/Navigation.css'
import { NavLink } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useNavigate }  from 'react-router-dom'



const Navigation = ({isAuth, setIsAuth}) => {
    const navigate = useNavigate()

    const signInOutUser = () => {
        signOut(auth).then(() => {
          localStorage.clear()
          setIsAuth(false)
          navigate('/Login')
    
        })
    
      }
    return (
        <div>
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
    )
}

export default Navigation
