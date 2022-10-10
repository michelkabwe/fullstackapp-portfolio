import React from 'react'
import '../Styles/Login.css'
import LoginForm from './LoginForm'

const Login = ({setIsAuth}) => {
    return (
        <div className="login-container">
            <div className="login-box__one"></div>
            <div className="login-box__two"><LoginForm setIsAuth={setIsAuth} /></div>   
        </div>
    )
}

export default Login
