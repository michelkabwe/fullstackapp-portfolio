import React,{useState} from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


import '../Styles/SignUp.css'

const SignUp = ({ openModal, visible}) => {
    return (
        <div className="SignUP-container">

    {visible ?
    <div>
            <div className="close-button">
            <button onClick={openModal} className="close-button"><AiFillCloseCircle /></button>
            </div>
                    <h1 className="SignUp-title">Sign Up</h1>
                            <form>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="uname"/>
                                
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="pass"/>
                            
                            </div>
                            <div className="button-container">
                                <input type="submit" />
                            </div>
                            </form>

                            </div>
            : null }
    </div>
                  
    )
}

export default SignUp
