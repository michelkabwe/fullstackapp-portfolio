import React from 'react'
import Navigation from './Navigation.jsx'
import '../Styles/Header.css'

const header = ({isAuth, setIsAuth}) => {
    return (
        <div className="header">
            <div className="header-logo"><h1 className="header-logo__text">
             COMPANY TEMPLATE</h1></div>
            <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
   
        </div>
    )
}

export default header
