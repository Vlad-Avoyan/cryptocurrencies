import React from 'react';
import logo from './logo.png';
import Search from './Search';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <img src={logo} alt="logo" className="Header-logo" />
      </Link>

      <Search />
    </div>
  )
}
export default Header