import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className='header-container'>
          <h1>Beacon of Strength</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae eveniet deserunt ipsum rem fuga veritatis eum earum perspiciatis enim, vero sit labore commodi error excepturi provident at esse dignissimos!</p>
          <Link to='/contact'>
            <button>Schedule Appointment</button>
          </Link>
        </div>
    </div>
  )
}

export default Home