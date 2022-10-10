import React, {useEffect, useState} from 'react'
import '../Styles/Home.css'
import {useNavigate} from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';



const Home = () => {
    const [backendData, setBackendData] = useState([])
    const navigate = useNavigate();
    const navigateToAbout = () => {
        navigate('/About');
    }

   const { ref } = useParallax({ speed: 10 });

    useEffect(() => {
      fetch('/').then(
        response => response.json()
      ).then(
        data =>{
          setBackendData(data)
        }
      )
    },[])

    return (
        <div>
            <main className="main-wrapper" >
              <div className="bg-overlay">
              <div className="main-content">
            <div className="main-hero">
              <h1 className="main-hero__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <button onClick={navigateToAbout}className="button-red">Discover Lorem</button>
            </div>
            </div>
            </div>
          </main>
          <section className="section" ref={ref}>
          <article className="article-content">
              <h1 className="article-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button onClick={navigateToAbout}className="button-blue">Discover Lorem</button>
            </article>
          </section>
    
          </div>
            
        
    )
}

export default Home
