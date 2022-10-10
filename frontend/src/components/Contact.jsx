import React from 'react'
import '../Styles/Contact.css'

const Contact = () => {
    return (
         
         
<div className="contact-wrapper">
        
        
        
        <div className="contact-box__two">
        
        <div className="form-wrapper">
        <form>
        <label className="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

        <label className="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <textarea className="text-area">
        Hello there, this is some text in a text area
        </textarea>

        <input type="submit" value="Submit" />

        </form>   
        </div>
   
    </div>
      
    <div className="contact-box__one"></div>
    </div>

    )
}

export default Contact
