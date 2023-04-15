import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className='header-container'>
          <h1>Beacon of Strength</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae eveniet deserunt ipsum rem fuga veritatis eum earum perspiciatis enim, vero sit labore commodi error excepturi provident at esse dignissimos!</p>
          <div className="services">
            <h2>Services</h2>
            <p>
              Are you struggling with mental health issues or facing difficult life circumstances? Our Licensed Clinical Social Workers (LCSWs) are here to help. At our clinic, we offer a range of services designed to support your emotional and behavioral well-being.
            </p>
            <div className="services-column">
              <h3>Individual Therapy</h3>
              <p>
                Our individual therapy sessions provide a safe and supportive environment where you can explore your feelings and learn coping strategies to manage anxiety, depression, trauma, addiction, or relationship problems.
              </p>
            </div>
            <div className="services-column">
              <h3>Group Therapy</h3>
              <p>
                Our group therapy sessions offer an opportunity to connect with others who are facing similar challenges and to build a network of support and encouragement.
              </p>
            </div>
            <div className="services-column">
              <h3>Family Therapy</h3>
              <p>
                Our family therapy sessions can help you and your loved ones improve communication, resolve conflicts, and build stronger, healthier relationships.
              </p>
            </div>

            <div className="services-column">
              <h3>Case Management</h3>
              <p>
                Our case management services can help you navigate complex systems and access community resources such as housing, healthcare, and financial assistance.
              </p>
            </div>

            <div className="services-column">
              <h3>Crisis Intervention</h3>
              <p>
                Our crisis intervention services provide immediate support and assistance to clients experiencing a mental health crisis.
              </p>
            </div>

            <div className="services-column">
              <h3>Advocacy</h3>
              <p>
                Our advocacy services can help you navigate legal, educational, or medical settings to ensure you receive appropriate services and support.
              </p>
            </div>

            <div className="services-column">
              <h3>Education and Outreach</h3>
              <p>
                And our education and outreach services help raise awareness about mental health and promote wellness in our community.
              </p>
            </div>
            
            <p>
              At our clinic, we're committed to providing compassionate and personalized care to help you achieve your goals and improve your quality of life. Contact us today to learn more about our services and how we can help you.
            </p>
          </div>
          <Link to='/contact'>
            <button>Schedule Appointment</button>
          </Link>
        </div>
    </div>
  )
}

export default Home