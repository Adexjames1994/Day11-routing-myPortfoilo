import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useTawk from "../src/hooks/useTawk";





const App = () => {
  const location = useLocation();

  const shouldLoadTawk = location.pathname === "/contact";

  useTawk(shouldLoadTawk); // ✅ ALWAYS call hook

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 min-h-[80vh]">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Navigate to='/'/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='about-us' element={<Navigate to='about'/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='contact-us' element={<Navigate to='contact'/>}/>
          <Route path='project' element={<Projects/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App
