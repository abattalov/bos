import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <Link to='/'>Beacon of Strength</Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
  )
}
