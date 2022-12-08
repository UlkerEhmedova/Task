import React from 'react'
import './Navbar.css'
import Logo from '../../assets/img/Logo.png'
const Navbar = () => {
  return (
    <div className='container1'>
      <nav className='navbar bg'>
        <img src={Logo} alt="" className='logo' />
        <ul>
          <a href="/"><li>Order</li></a>
          <a href="/table"><li>Table2</li></a>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar