import React,{ useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { ParallaxProvider } from 'react-scroll-parallax';






const App = () => {
  //isAuth state determines if user is logged in or not..
  //isAuth is passed as props to log in component
  const [isAuth, setIsAuth] = useState(false)

  return (

    <BrowserRouter>
    <div className="App">
    <ParallaxProvider>
      
         <Header isAuth={isAuth} setIsAuth={setIsAuth}/> 
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} /> 
          <Route path="/SignUp" element={<SignUp />} /> 
        </Routes> 
        <Home />
        <Footer/>  
        </ParallaxProvider> 
    </div>
    </BrowserRouter>
   
  



  );
}

export default App;
