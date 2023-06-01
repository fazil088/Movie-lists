import React from 'react'
import './Navbar.css'
import {ReactComponent as Logo} from './logo.svg'



function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo_section'>
        <Logo className='logo'/>
        <h3 className='logo_name'> Movies</h3>
      </div>
    </div>
  )
}

export default Navbar
