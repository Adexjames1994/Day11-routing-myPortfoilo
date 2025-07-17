import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='text-white p-4 shadow '>
    <div className='max-w-6xl mx-auto flex justify-between items-center'>
      <h1 className='font-bold text-xl'>TheRealJegAde</h1>
      <ul className='flex gap-6'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='project'>Projects</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </ul>
    </div>
   </nav>
  )
}

export default Navbar
