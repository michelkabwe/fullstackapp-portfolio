import React from 'react'
import '../Styles/Footer.css'
import linkedinLogo from '../Assets/SocialMediaIcons/linkedin.png'
import facebookLogo from '../Assets/SocialMediaIcons/facebook.png'
import instagramLogo from '../Assets/SocialMediaIcons/instagram.png'
import tiktokLogo from '../Assets/SocialMediaIcons/tiktok.png'



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="section-left">
                        <ul className="ul-footer">
                            <li><a href="default.asp">Home</a></li>
                            <li><a href="news.asp">News</a></li>
                            <li><a href="contact.asp">Contact</a></li>
                            <li><a href="about.asp">About</a></li>
                        </ul>
                </div>
                <div className="section-right">

                <div className="socialMediaLogoWrapper">
                        <img src={linkedinLogo} className="lkLogo"/>
                        <img src={facebookLogo} className="fbLogo"/>
                        <img src={instagramLogo} className="igLogo"/>
                        <img src={tiktokLogo} className="ttLogo"/>
                </div>
    
                </div>
             
            </div>  
            <div className="bottom-section">
                    <p className="info">Fullstack Website | Programmed and designed by Michel Kabwe ©</p>
                </div>  
        </div>
    )
}

export default Footer
