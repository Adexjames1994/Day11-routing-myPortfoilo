import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=> setIsOpen(!isOpen)
  return (
   <nav className='text-white p-4 shadow-md '>
    <div className='max-w-6xl mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-xl'>TheRealJegAde</h1>

      <ul className='hidden md:flex gap-6'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='project'>Projects</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>

      <div className='md:hidden z-20 ' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
      </div>

      {isOpen && (
        <ul className='absolute top-16 left-0 w-full flex flex-col gap-4 p-6 text-center z-10 md:hidden transition-all'>
        <li><Link to='/' className='hover:text-blue-300' onClick={toggleMenu}>Home</Link></li>
        <li><Link to='about' className='hover:text-blue-300' onClick={toggleMenu}>About</Link></li>
        <li><Link to='project' className='hover:text-blue-300' onClick={toggleMenu}>Projects</Link></li>
        <li><Link to='contact' className='hover:text-blue-300' onClick={toggleMenu}>Contact</Link></li>
      </ul>
      )}
    </div>
   </nav>
  )
}

export default Navbar
