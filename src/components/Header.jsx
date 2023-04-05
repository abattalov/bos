import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <Link to='/'>Beacon of Strength</Link>
        </div>
        <div className='header-nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}
