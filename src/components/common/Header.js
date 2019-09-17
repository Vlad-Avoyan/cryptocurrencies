import React from 'react';
import logo from './logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="Header-logo" />
    </div>
  )
}
export default Header