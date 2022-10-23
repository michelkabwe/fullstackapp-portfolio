import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/LoginForm.css'
import { auth, provider } from '../firebase-config.js'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import SignUp from './SignUp'


//provider specify that we log in with google
//.then grabs the (result) that contains all the finormation about the user who is logged in..
const LoginForm = ({ setIsAuth }) => {

  const [visible, setVisible] = useState(false)
  //const [close, setIsClose] = useState(true)

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true) // determiens that we are logged in
      navigate('/')
    })
  }

  const openModal = () => {
    setVisible(prev => !prev)


  }



    return (
        <div>
          <div className="sg-title-wrapper">
            <h1 className="login-title">Log in</h1>
            <div>
            <div className="google-login">
                <p className="sg-title">Sign In With Google to Continue</p>
                <button className="login-btn" onClick={signInWithGoogle} >
                <span className="icon"></span>
                  Sign in with Google</button>
              </div>
              
           
            <form>
              <div className="input-container">
                <label className="sg-title">Username </label>
                <input type="text" name="uname"/>
                
              </div>
              <div className="input-container">
                <label className="sg-title">Password </label>
                <input type="password" name="pass"/>
              
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
           
              <div className="sg-title"><p>Dont have an account?</p>
              <p onClick={openModal} className="signUp-title">Sign up here!</p>
              
              </div> 
             
              <div className="signUp-field"><SignUp  visible={visible} openModal={openModal}/> </div>
                      
                          
       
     

     
          </div>
            
        </div>
        </div>
    )
}

export default LoginForm
