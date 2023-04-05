import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <nav className='header-logo'>
            <Link to='/'>Beacon of Strength</Link>

        </nav>
        <nav className='header-nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
  )
}
